# Landing Page — Advogado Direito da Saúde ⚖️

Landing page de alta conversão para escritório de advocacia especializado em **Direito da Saúde**, construída com **React 18**, **TypeScript**, **Vite**, **TailwindCSS** e component library **shadcn/ui**. O projeto é orientado a captação de leads via **WhatsApp** com foco em negativas de planos de saúde.

---

## Objetivo

Servir como página comercial otimizada para SEO e conversão, conectando pacientes com negativas de tratamento médico diretamente ao advogado via WhatsApp. A arquitetura é projetada para carregamento rápido (Vite) e responsividade total (mobile-first com TailwindCSS).

---

## Seções da Página

| Seção | Componente | Descrição |
|---|---|---|
| **Hero** | `HeroSection.tsx` | Headline principal com CTA direto para WhatsApp, indicadores de confiança (liminar 48h, atuação nacional) e gradiente animado |
| **Autoridade** | `AuthoritySection.tsx` | Credenciais e números do advogado para estabelecer confiança |
| **Dores** | `PainPointsSection.tsx` | Lista de problemas comuns enfrentados pelos pacientes (negativa de cirurgia, medicamentos, etc.) |
| **Serviços** | `ServicesSection.tsx` | Grid de 6 áreas de atuação — ações contra planos, liminares, home care, medicamentos, reembolso e revisão contratual |
| **Sobre** | `AboutSection.tsx` | Perfil profissional e histórico do advogado |
| **CTA Final** | `CTASection.tsx` | Call-to-action de fechamento com botão WhatsApp |
| **Footer** | `Footer.tsx` | Informações de contato, links e aviso legal |
| **WhatsApp Flutuante** | `FloatingWhatsApp.tsx` | Botão fixo de WhatsApp sempre visível na tela |

---

## Arquitetura do Projeto

```text
src/
├── components/
│   ├── ui/                     # Componentes base do shadcn/ui (Button, Toast, Tooltip, etc.)
│   ├── HeroSection.tsx         # Seção hero com gradiente, badge e trust indicators
│   ├── AuthoritySection.tsx    # Provas sociais e números
│   ├── PainPointsSection.tsx   # Dores do público-alvo
│   ├── ServicesSection.tsx     # Grid de serviços com ícones Lucide
│   ├── AboutSection.tsx        # Sobre o advogado
│   ├── CTASection.tsx          # Call-to-action final
│   ├── Footer.tsx              # Rodapé com links e OAB
│   ├── FloatingWhatsApp.tsx    # Botão WhatsApp fixo
│   └── NavLink.tsx             # Link de navegação reutilizável
├── hooks/                      # Custom hooks
├── lib/                        # Utilitários (cn helper para classes)
├── pages/
│   ├── Index.tsx               # Página principal — composição de todas as seções
│   └── NotFound.tsx            # Página 404
├── App.tsx                     # Roteamento (React Router) e providers globais
├── main.tsx                    # Entry point do React
└── index.css                   # Estilos globais e configuração TailwindCSS
```

---

## Stack Tecnológica

| Tecnologia | Função |
|---|---|
| React 18 | Renderização de componentes |
| TypeScript | Tipagem estática |
| Vite 5 | Build tool e dev server |
| TailwindCSS 3 | Estilização utility-first |
| shadcn/ui | Component library (Radix UI) |
| Lucide React | Biblioteca de ícones |
| React Router DOM | Roteamento SPA |
| React Query | Gerenciamento de estado assíncrono |
| Zod | Validação de schemas |
| React Hook Form | Formulários |
| Vitest | Testes unitários |

---

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/juanalenca/landing-page-advogado.git
   cd landing-page-advogado
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse `http://localhost:5173` no navegador.

### Outros Comandos

| Comando | Função |
|---|---|
| `npm run build` | Build de produção |
| `npm run preview` | Preview do build |
| `npm run lint` | Lint com ESLint |
| `npm run test` | Testes com Vitest |
