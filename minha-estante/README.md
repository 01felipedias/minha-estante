# Minha Estante

Aplicação web para gerenciamento de leituras pessoais, desenvolvida com Node.js, Express, EJS, arquitetura MVC e persistência em JSON.

## Como executar

1. Abra o terminal dentro da pasta `minha-estante`.
2. Instale as dependências com `npm install`.
3. Inicie o projeto com `npm start`.
4. Acesse `http://localhost:8080` no navegador.

Durante o desenvolvimento, também é possível usar `npm run dev` para reiniciar o servidor automaticamente após alterações.

## Funcionalidades

- Cadastro de livros;
- listagem em cards responsivos;
- alteração entre os status “Lendo” e “Lido”;
- remoção com confirmação;
- resumo com total de livros, livros concluídos e páginas lidas;
- validação no formulário e no servidor;
- persistência dos dados em `livros.json`.

## Organização MVC

- `models/`: leitura e escrita dos dados;
- `controllers/`: regras da aplicação e comunicação com o Model;
- `routes/`: definição dos endpoints;
- `views/`: páginas EJS e partials compartilhados.
