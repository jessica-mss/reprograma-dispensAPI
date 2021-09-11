<img src="https://i.imgur.com/6bntZGn.png" alt="logo da dispensAPI" width="700">

# dispensAPI - {reprograma} - Projeto Livre

<p align="justify"> A DispensAPI é uma aplicação que gerencia os itens da dispensa de uma casa. Após a compra mensal de suprimentos, uma família armazena suas compras em sua dispensa. Para saber se o que foi comprado será o suficiente para seu sustento durante um mês a família fará o controle do seu consumo pelo DispensAPI. Cada movimentação na dispensa como: cadastro de novos itens, alteração de informações dos itens cadastrados ou exclusão será feita pelo CRUD da API. </p>

## Tecnologias Utilizadas

Ferramentas que foram usadas na construção do projeto:
| <img width="70" height="50" src="https://i.imgur.com/TJbRe4D.png" alt="npm"/></code> | <img width="70" height="50" src="https://i.imgur.com/9OrPpPn.png" alt="heroku"/></code> | <img width="70" height="50" src="https://i.imgur.com/S9rEEsR.png" alt="nodejs"/> | <img width="70" height="50" src="https://i.imgur.com/2xAdaHj.png" alt="github"/></code>
|--- |--- |--- |--- |
| <img width="70" height="50" src="https://i.imgur.com/YBIQkiH.png" alt="Postman"/></code> | <img width="70" height="50" src="https://i.imgur.com/O3vQ0ok.png" alt="mongodb"/></code> | <img width="70" height="50" src="https://i.imgur.com/jL9D3c5.png" alt="git"/></code> | <img width="70" height="50" src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg" alt="VScode"/></code>
| <img width="70" height="50" src="https://i.imgur.com/I9bCtGE.png" alt="javascript"/></code> |   |  |  
  

## Como Funciona

- Faça o download local do projeto (<https://github.com/jessica-mss/reprograma-dispensAPI>);
- Execute 'npm start' para instalar as dependências necessárias para funcionamento;
- Crie um .env com o parâmetro `MONGODB_URL` e coloque sua conexão com o robo3T
- Execute 'npm start' para executar a API
 
## Demandas de Negócio

- [ ]  **"/dispensa/home"** Deverá a página inicial do projeto;
- [ ]  **"/dispensa"** Deverá retornar todos os produtos da dispensa;
- [ ]  **"/dispensa/adicionar"** Deverá criar um produto na dispensa;
- [ ]  **"/dispensa/atualizar/[ID]"** Deverá atualizar uma informação específica em um produto que já existe dispensa de acordo com o ID informado;
- [ ]  **"/dispensa/excluir/[ID]"** Deverá excluir um produto da dispensa de acordo com o ID informado e retornar uma mensagem de sucesso;
- [ ]  **"/dispensa/categorias/todas"** Deverá retornar todas as categorias cadastradas;
- [ ]  **"/dispensa/categorias/filtro/[ID]"** Deverá retornar a categoria de acordo com o ID informado;
- [ ]  **"/dispensa/categorias/cadastrar"** Deverá criar uma nova categoria;
- [ ]  **"/dispensa/categorias//atualizar/[ID]"** Deverá atualizar uma informação específica na categoria informada pelo Id.
- [ ]  **"/dispensa/categorias/excluir/[ID]"** Deverá excluir a categoria de acordo com o ID informado e retornar uma mensagem de sucesso;

## Regras de Negócio

- Não poderá cadastrar um produto que já existe na dispensa, apenas atualizá-lo;
- Vincular apenas uma categoria para cada item da dispensa;
- Não poderá cadastrar mais de uma categoria com o mesmo nome.


## **Autora**

- Jessica Marques

[<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/jessicamarquess/) 
[![outlook](https://img.shields.io/badge/outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](mailto:jessica-mss@hotmail.com)
