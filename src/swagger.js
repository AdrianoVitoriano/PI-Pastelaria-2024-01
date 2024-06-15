import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        version: "1.0.0",
        title: 'API Pastelaria Central',
        description: 'API Pastelaria Central',
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: 'Development server',
        },
    ],
    definitions: {
        UpdateComandas: {
            aberta: 1,
        },
        AddOrUpdateItens: {
            nome: 'Pastel de Carne',
            preco: 5.00,
            idTipo: 1,
            ativo: 1
        },
        DeleteItens: {
            id: 1,
        },
        AddOrUpdateUsuarios: {
            nome: 'Lucas',
            email: '',
        },
        DeleteUsuarios: {
            id: 1,
        },
        AddPedidos: {
            id_usuario: 1,
            id_produto: 1,
            quantidade: 2,
            valor: 5.00,
            data: '2021-09-01',
        },
        DeletePedidos: {
            id: 1,
        },
        AddOrUpdateMesas: {
            status: 'Livre',
        },
        DeleteMesas: {
            id: 1,
        },
        UpdateCozinha: {
            produzido: 1,
        },
    },
}

const outputFile = './src/swagger_output.json';
const endpointsFiles = ['./src/app.js'];

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, doc);