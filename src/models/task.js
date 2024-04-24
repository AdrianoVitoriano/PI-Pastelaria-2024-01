import { EntitySchema, Entity, PrimaryGeneratedColumn, Column } from "typeorm"


export const mesa = new EntitySchema({
    name: "Mesa",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        description: {
            type: "varchar"
        }
    }
});