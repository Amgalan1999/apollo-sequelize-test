import { DataTypes, Model, Sequelize } from 'sequelize';

export default class Category extends Model {

    public title!: string;
    public description!: string;
    public icon!: string;

    public static createModel(sequelize: Sequelize) {
        this.init(
            {
                id: {
                    primaryKey: true,
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4
                },
                title: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                description: {
                    type: DataTypes.STRING
                },
                icon: {
                    type: DataTypes.STRING
                }
            },

            {
                sequelize,
                modelName: 'categories',
                timestamps: true
            }
        );
    }
}