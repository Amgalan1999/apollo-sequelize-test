import CategoryController from "../../controllers/Category"

export default {
    Query: {
        get_user: () => {
            return {
                id: "fasdfasd",
                email: "amgalan@gmail.com"
            }
        }
    },
    Mutation: {
        create_user: async () => {
            // await User.create(args)
            return {
                success: false,
                message: "ajiljiinaa"
            }
        },

        create_category: async (_: any, args: any) => {
            const { title, description, icon } = args
            return CategoryController.createCategory({ title, description, icon })
        },
        update_category: async (_: any, args: any) => {
            const { id, title, description, icon } = args
            return CategoryController.updateCategory({ id, title, description, icon })
        },
        delete_category: async (_: any, args: any) => {
            const { id } = args
            return CategoryController.deleteCategory({ id })
        }
    }
}