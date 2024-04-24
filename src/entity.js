import { EntitySchema} from "typeorm"

export const mesas = new EntitySchema({
    name: "mesas",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        posicao: {
            type: "varchar"
        }
    },
});