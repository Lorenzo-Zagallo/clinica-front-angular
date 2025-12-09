# 🏥 Clínica Web - Angular 18 & TailwindCSS

[![Angular](https://img.shields.io/badge/Angular-18.0-DD0031?style=flat&logo=angular)](https://angular.io/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Interface web moderna e responsiva para o sistema de gestão clínica, desenvolvida com **Angular 18** utilizando a nova abordagem de **Standalone Components**.

Este projeto consome a API RESTful construída em .NET 10 ([Link para o Backend](https://github.com/SEU_USUARIO/clinica-api-dotnet-clean-arch)), completando a arquitetura Full Stack segura com autenticação JWT.

## 🚀 Tecnologias & Práticas

- **Angular 18**: Framework SPA utilizando recursos modernos.
- **Standalone Components**: Arquitetura modular sem a complexidade de `NgModules`.
- **TailwindCSS**: Estilização utilitária para interfaces rápidas e responsivas.
- **Reactive Forms**: Manipulação robusta e tipada de formulários.
- **Interceptors**: Injeção automática de Token JWT em todas as requisições.
- **Guards**: Proteção de rotas para impedir acesso não autorizado.
- **Services**: Isolamento da lógica de comunicação HTTP.

## 🏗️ Estrutura do Projeto

O projeto segue uma organização por responsabilidades para facilitar a escala:

```text
src/app/
├── core/                # Singleton services, interceptors, guards e models
├── features/            # Telas do sistema (Auth, Pacientes)
└── shared/              # Componentes visuais reutilizáveis (UI)
````

## ⚙️ Como Executar

### Pré-requisitos

  - Node.js (LTS)
  - API Backend rodando (veja o repositório da API)

### Passo a Passo

1.  Clone o repositório:

    ```bash
    git clone https://github.com/Lorenzo-Zagallo/clinica-front-angular
    ```

2.  Instale as dependências:

    ```bash
    npm install
    ```

3.  Execute o servidor de desenvolvimento:

    ```bash
    ng serve
    ```

4.  Acesse a aplicação em: `http://localhost:4200`

## 🔐 Funcionalidades

  - **Autenticação**: Login integrado com API .NET (JWT).
  - **Gestão de Pacientes**:
      - Listagem com tabela responsiva.
      - Cadastro de novos pacientes com validação.
      - Exclusão de registros.
  - **Segurança**: Redirecionamento automático se o token expirar ou não existir.

-----

Desenvolvido por **Lorenzo Zagallo** 👨‍💻