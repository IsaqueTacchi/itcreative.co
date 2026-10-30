# IT Creative — Isaque Tacchi

Portfólio em React e JavaScript, desenvolvido em código editável. A composição cinematográfica mantém quatro seções: marca, apresentação, dedicação e contato. A abertura utiliza a fotografia real com sombras de leitura, movimento lento de câmera e títulos revelados na entrada. Não utiliza imagens de páginas; os elementos gráficos são CSS e SVG. A seção de apresentação inclui a foto pessoal em preto e branco.

## Rodar no VS Code

Com Node.js 20.19+ ou 22.12+:

```sh
npm install
npm run dev
```

Abra a URL exibida no terminal. As mudanças nos arquivos aparecem automaticamente no navegador.

## Onde editar

| Arquivo | Conteúdo |
| --- | --- |
| `src/data/site.js` | Textos, menu, Instagram, número de projetos e etapas do trabalho. |
| `src/styles.css` | Paleta no bloco `:root`, fontes, composição e regras para celular. |
| `src/viewport.css` | Enquadramento pela altura útil da tela, tamanhos adaptativos e conteúdo sem cortes em telas menores. |
| `src/visual.css` | Luz, textura de filme, movimento de câmera e transições. |
| `src/hooks/useStudioMotion.js` | Entrada dos títulos e blocos, profundidade na rolagem e luz da abertura ao mover o mouse. Movimentos pausam fora da tela e respeitam redução de movimentos. |
| `public/loading.css` | Skeleton exibido antes do JavaScript e durante o carregamento da foto. |
| `src/components/LoadingSkeleton.jsx` | Estrutura do skeleton inicial. |
| `src/components/ProgressiveImage.jsx` | Carregamento da foto, transição e tratamento de falha. |
| `src/hooks/useInitialLoading.js` | Aguarda a fonte, com liberação do conteúdo em até 2,5 segundos após montar o React. |
| `src/App.jsx` | Estrutura das quatro seções e rodapé. |
| `src/components/Header.jsx` | Cabeçalho e navegação móvel com Escape e fechamento ao clicar fora. |
| `src/components/BrandMark.jsx` | Símbolo em vetor baseado na referência enviada. Substitua aqui caso tenha o SVG oficial. |
| `src/components/Icons.jsx` | Setas, Instagram e asterisco. |
| `public/assets/isaque-tacchi-pb.png` | Fotografia da abertura. Caminho em `site.hero.photo`. |
| `public/assets/isaque-tacchi-sobre.jpg` | Foto da seção sobre mim. Caminho e texto alternativo em `site.about.photo`. |
| `index.html` | Título, descrição e cor do navegador. |

Paleta: creme `#FFFCF2`, bege `#CCC5B9`, cinza `#403D39`, preto `#252422` e laranja `#EB5E28`. Poppins é carregada localmente; o arquivo disponível tem peso regular, e o navegador sintetiza o negrito.

Os botões de conversa abrem o perfil real do Instagram. Para mudar o destino e o nome exibido, edite `site.instagram`.

## Referências e versões anteriores

- `referencias/artes-originais/`: PNGs preservados como referência, fora da pasta pública e do site publicado.
- `.backups/antes-cinematografico/`: código preservado imediatamente antes da direção cinematográfica.
- `.backup-original/`: primeira versão baseada nas artes.
- `.backup-conversao/`: versão em código anterior ao novo projeto.

## Compilar e publicar

```sh
npm run build
npm run preview
```

O resultado fica em `dist/`. No Netlify Drop, envie o conteúdo de `dist/`. O `netlify.toml` já configura a compilação por repositório.
