import Category from "../database/models/Category";
import { IResponse } from "../utils/types";

export default class CategoryController {
    static async createCategory(doc): Promise<IResponse> {
        try {
            const { title, description, icon } = doc

            const category = await Category.create({
                title: title,
                description: description,
                icon: icon
            })
            console.log(category, "fasdfasd")
            category.save()

            return {
                success: true, message: "Success"
            }
        } catch (err) {
            return {
                success: false, message: "Failed"
            }
        }

    }

    static async updateCategory(doc): Promise<IResponse> {
        try {
            const { id, title, description, icon } = doc;
            const category = await Category.upsert({
                id,
                title,
                description,
                icon
            })

            return {
                success: true, message: `Success: ${category}`
            }
        }
        catch (err) {
            return {
                success: false, message: "Failed"
            }
        }
    }

    static async deleteCategory(doc): Promise<IResponse> {
        try {
            const { id } = doc;
            const count = await Category.destroy({ where: { id } })

            return {
                success: true, message: `deleted: ${count}`
            }
        } catch (err) {
            return {
                success: false, message: "Failed"
            }
        }
    }
}