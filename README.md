# Zafir Invest

Landing page institucional da **Zafir Invest** — soluções financeiras sem banco, sem burocracia e sem aprovação de crédito.

## Tech Stack

- **Framework**: React 18 + Vite 5
- **Linguagem**: TypeScript
- **Estilo**: Tailwind CSS v3 + shadcn/ui
- **Roteamento**: React Router DOM v6
- **Deploy**: Cloudflare Pages

## Ambiente Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Deploy no Cloudflare Pages

### Setup inicial (uma vez)

1. Faça push do código para o GitHub
2. Acesse [Cloudflare Pages](https://pages.cloudflare.com/)
3. Clique em **"Create a project"** → **"Connect to Git"**
4. Selecione o repositório `zafir-dreams-realized`
5. Configure:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `20`

### Deploy automático via GitHub Actions

Configure os seguintes secrets no repositório GitHub:
- `CLOUDFLARE_API_TOKEN` → Token da API do Cloudflare
- `CLOUDFLARE_ACCOUNT_ID` → ID da sua conta Cloudflare

### Domínio personalizado

Após o deploy, configure seu domínio em:
**Cloudflare Pages → Projeto → Custom Domains**

E atualize as URLs no `index.html`:
```html
<meta property="og:url" content="https://SEU-DOMINIO.com" />
<meta property="og:image" content="https://SEU-DOMINIO.com/og-image.png" />
<meta name="twitter:image" content="https://SEU-DOMINIO.com/og-image.png" />
```

## Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis (shadcn/ui + customizados)
├── pages/          # Páginas da aplicação
├── hooks/          # Custom hooks
├── lib/            # Utilitários
└── assets/         # Imagens e assets estáticos
```
