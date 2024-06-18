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
        AddOrUpdateTipoItens: {
            nome: 'Pastel de Carne',
            ativo: 1
        },
        DeleteTipoItens: {
            ativo: 1,
        },
        AddOrUpdateItens: {
            nome: 'Pastel de Carne',
            preco: 5.00,
            idTipo: 1,
            ativo: 1
        },
        DeleteItens: {
            ativo: 1,
        },
        AddOrUpdateUsuarios: {
            nome: 'Lucas',
            email: 'Lucas@gmail.com',
        },
        DeleteUsuarios: {
            ativo: 1,
        },
        AddOrUpdatePedidos: {
            id_usuario: 1,
            idComanda: 1,
            total: 250.00,
            data: '2021-09-01',
            finalizado: 1
        },
        DeletePedidos: {
            id: 1,
        },
        AddOrUpdateMesas: {
            localizacao: 'Perto da entrada',
        },
        UpdateCozinha: {
            produzido: 1,
        },
    },
}

const outputFile = './src/swagger_output.json';
const endpointsFiles = ['./src/app.js'];

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, doc);