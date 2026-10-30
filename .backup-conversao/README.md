# IT Creative · React + JavaScript

## Rodar no VS Code

Requer Node.js 20.19+ ou 22.12+. Abra esta pasta no VS Code e execute no terminal:

```sh
npm install
npm run dev
```

Abra o endereço que aparecer no terminal.

## Editar

- `src/App.jsx`: componentes Header, BrandSection, AboutSection, DedicationSection e ContactSection; menu e efeitos.
- `src/styles.css`: estilos desktop/mobile.
- `public/assets/poppins.ttf`: fonte local.
- `.backup-original`: cópia dos componentes e estilos anteriores à conversão.

As quatro seções são construídas em React e CSS, com textos selecionáveis e editáveis em `src/App.jsx`. Marca e ícone do Instagram são SVGs inline; fundos, tipografia e elementos decorativos são código. Nenhuma imagem PNG é carregada pela página. Os PNGs originais foram preservados apenas como referência em `public/assets`.

A composição mantém a identidade preto, creme e laranja. A foto foi substituída por uma composição tipográfica. Poppins é carregada localmente e os títulos usam Georgia; as fontes proprietárias das artes não estão incluídas no projeto.

## Publicar no Netlify

```sh
npm run build
```

Envie o conteúdo da pasta `dist` ao Netlify Drop. O ZIP deste projeto é o código-fonte; não deve ser enviado diretamente ao Drop sem compilar. Em deploy por repositório, o netlify.toml configura build e publicação.
