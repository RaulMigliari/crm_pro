# 📋 CRM Pro – Sistema de Gestão de Clientes e Projetos

Este é um sistema web desenvolvido com **React** e **Bootstrap puro**, integrado ao **Supabase** como backend. A aplicação simula um ambiente profissional de CRM, permitindo o gerenciamento de clientes e seus respectivos projetos de forma segura e escalável.

---

## 🚀 Funcionalidades

- ✅ Cadastro e login de usuários (autenticação com Supabase)
- 👤 CRUD completo de clientes
- 📁 CRUD completo de projetos vinculados aos clientes
- 📊 Dashboard com resumo e gráficos
- 🔍 Filtro de busca e status dos projetos
- 🔒 Controle de acesso por usuário (cada um vê só seus dados)

---

## 🧰 Tecnologias Utilizadas

- **Frontend**: React + Bootstrap (sem React-Bootstrap)
- **Backend as a Service**: Supabase (Auth + Database)
- **Bibliotecas**:
  - Axios (chamadas HTTP)
  - React Router DOM (navegação)
  - Chart.js (gráficos – opcional)

---

## 🗂️ Estrutura de Pastas Sugerida

```bash
src/
├── assets/ # Imagens e ícones
├── components/ # Componentes reutilizáveis (Cards, Tabelas, Navbar, etc)
├── contexts/ # Contexts globais (ex: AuthContext)
├── hooks/ # Hooks customizados
├── pages/ # Páginas da aplicação (Login, Dashboard, Clientes, Projetos)
├── routes/ # Arquivos de rotas protegidas e públicas
├── services/ # Arquivos de integração com Supabase
├── styles/ # CSS/SCSS customizados, se necessário
└── App.jsx # Arquivo principal com rotas
```


---

## 📝 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/crm-pro.git

# Instale as dependências
npm install

# Crie um arquivo .env com sua URL e chave do Supabase
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...

# Inicie o projeto
npm run dev
```
---

## 🧪 Futuras melhorias

- Upload de imagens dos clientes

- Responsividade total (mobile-first)

- Exportação de relatórios

- Notificações por email (via Supabase ou serviço externo)

---

## 👨‍💻 Desenvolvedor

[![Raul Migliari](https://github.com/RaulMigliari.png?size=100)](https://github.com/raul-mgl)

**Raul Migliari**  
Desenvolvedor Full Stack | Engenharia de Software  
[GitHub](https://github.com/RaulMigliari) • [LinkedIn](https://www.linkedin.com/in/raulmigliari)
