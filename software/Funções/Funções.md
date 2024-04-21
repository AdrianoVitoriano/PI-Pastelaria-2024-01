# Funções do Software

## Index

- [Cadastros](#cadastros)
  - [cadastrarProdutos](#cadastrarprodutos)
  - [cadastrarTipos](#cadastrartipos)
  - [cadastrarUsuarios](#cadastrarusuarios)
  - [cadastrarMesas](#cadastrarmesas)
  - [cadastrarPedidos](#cadastrarpedidos)
- [Alterações](#alteração)
  - [alterarProdutos](#alterarprodutos)
  - [alterarTipos](#alterartipos)
  - [alterarUsuarios](#alterarusuarios)
  - [alterarMesas](#alterarmesas)
  - [alterarPedidos](#alterarpedidos)
- [Processamento](#processamento)
- [Saída](#saída)
  - [visualizarComanda](#visualizarcomanda)
  - [visualizarPedido](#visualizarpedido)
  - [relatorioVendas](#relatoriovendas)

## Cadastros

### cadastrarProdutos

Função para cadastrar novos produtos no banco de dados.

```Javascript

function cadastrarProdutos(nome = new String, preco = new Number, tipo = new Number){

}

```

### cadastrarTipos

Função para cadastrar novos tipos de produtos no banco de dados.

```Javascript

function cadastrarTipos(nome = new String){

}

```

### cadastrarUsuarios

Função para cadastrar novos usuários no banco de dados.

```Javascript

function cadastrarUsuarios(nome = new String, email = new String, cpf = new Number, cargo = new Number, senha = new String){

}

```

### cadastrarMesas

Função para cadastrar novas mesas no banco de dados.

```Javascript

function cadastrarMesas(tipo = new String){

}

```

### cadastrarPedidos

Função para cadastrar novos pedidos no banco de dados.

```Javascript

function cadastrarPedidos(idMesa = new Number, usuario = new Number, itens = new Array, quantidade = new Array){

}

```

## Alteração

### alterarProdutos

Função para alterar produtos no banco de dados.

```Javascript

function alterarProdutos(idProduto = new Number, dados = new Array){

}

```

### alterarTipos

Função para alterar Tipos de produtos no banco de dados.

```Javascript

function alterarTipos(idTipos = new Number, nome = new String){

}

```

### alterarUsuarios

Função para alterar usuários no banco de dados.

```Javascript

function alterarUsuarios(idUsuario = new Number, dados = new Array){

}

```

### alterarMesas

Função para alterar mesas no banco de dados.

```Javascript

function alterarMesas(idMesa = new Number, tipo = new String){

}

```

### alterarPedidos

Função para alterar pedidos no banco de dados.

```Javascript

// const dadosOriginais = [linhaPedido, linhaPedido, linhaPedido]
// const dadosAlterados = [linhaPedido, linhaPedido, linhaPedido]
// class linhaPedido{
//     constructor(){
//         item = nome,
//         quantidade = quantidade,
//         preco = preco
//     }
// }

function alterarPedidos(idPedido = new Number, dados = new Array){

}

```

## Processamento

## Saída

## visualizarComanda

Função para visualizar a comanda na tela inicial.

```Javascript

function visualizarComanda(idComanda = new Number){

}

```

## visualizarPedido

Função para visualizar pedidos.

```Javascript

function visualizarPedido(idPedido = new Number){

}

```

## relatorioVendas

Função para gerar um relatorio de vendas.

```Javascript

function relatorioVendas(mesa = 0, usuario = 0, dataInicial = new Date , dataFinal = new Date){

}


```
