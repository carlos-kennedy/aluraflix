# Projeto: Gerenciador de Categorias de Vídeos

## Descrição

Este projeto é um sistema de gerenciamento de categorias de vídeos desenvolvido com **React** e **TypeScript**. Ele permite exibir vídeos organizados por categorias, editar informações, excluir vídeos e acessar links de reprodução. O design responsivo garante uma experiência consistente em diferentes dispositivos.

## Funcionalidades

- **Exibição de vídeos por categorias**: Exibe os vídeos com título, descrição e miniatura.
- **Edição de vídeos**: Possibilidade de editar os dados de um vídeo existente.
- **Exclusão de vídeos**: Remoção de vídeos indesejados.
- **Redirecionamento para os vídeos**: Cada vídeo possui um link clicável que leva para a página de reprodução.

## Tecnologias Utilizadas

- **React**
- **TypeScript**
- **CSS** (para estilização)

## Estrutura de Dados

Cada vídeo possui a seguinte estrutura:

```typescript
interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}
```

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- Gerenciador de pacotes npm ou yarn

### Passos

1. Clone o repositório:
   ```bash
   git clone <URL-do-repositório>
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd nome-do-projeto
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

4. Execute o projeto:
   ```bash
   npm run dev
   # ou
   ```

5. Acesse o projeto no navegador em `http://localhost:3000`.

## Estrutura de Pastas

```
├── src
│   ├── components
│   │   └── Categoria.tsx
|   |   └──Categoria.css
│   ├── App.tsx
│   ├── index.tsx
│   └── package.json
```

## Melhorias Futuras
- Adicionar autenticação para diferentes usuários.
- Permitir upload de vídeos diretamente pelo sistema.
- Implementar integração com um banco de dados para persistência de dados.
- Melhorar o design da interface com frameworks como TailwindCSS ou Material-UI.

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das mudanças (`git commit -m 'Adicionei uma nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

Desenvolvido com 💻 e ☕ por Carlos.
