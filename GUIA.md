# Guia do projeto — Site sobre João Pessoa

## 1. Como as 3 tecnologias se conectam
- **HTML** (`index.html`, `praias.html`, `pontos-turisticos.html`): conteúdo e estrutura.
- **CSS** (`css/style.css`): aparência. Ligado no `<head>` com `<link rel="stylesheet" href="css/style.css">`.
- **JavaScript** (`js/script.js`): comportamento. Ligado no fim do `<body>` com `<script src="js/script.js"></script>`.
- Os 3 arquivos ficam separados e funcionam juntos (requisito 1 do trabalho).

## 2. O que cada parte faz
- `<header>` + `<nav>`: menu igual nas 3 páginas; a classe `ativo` marca a página atual.
- `.hero` e `.chamada` (Home): faixa de abertura e links para as outras páginas.
- `.grade` + `.card` (Praias / Pontos): grade que se ajusta sozinha (`auto-fit`, `minmax`).
- `:root{--mar:...}`: variáveis de cor. Mude a cor do site em um lugar só.
- `@media(max-width:600px)`: layout de celular.
- JS: (1) ano do rodapé, (2) menu hambúrguer, (3) tema claro/escuro salvo no navegador, (4) imagem reserva se a foto faltar, (5) clicar na foto para ampliar. Se faltar uma foto em `img/`, o JS busca uma na Wikipédia (`fetch`) e, se falhar, mostra um quadro azul.

## 3. Rodar no VS Code
1. Extraia o .zip e abra a pasta: **File > Open Folder**.
2. Instale a extensão **Live Server**, clique com o botão direito em `index.html` > **Open with Live Server**.
3. Ponha as fotos em `img/` (veja `img/LEIA-ME.txt`) e edite os textos dos `<p>`.

## 4. Enviar para o GitHub
1. Crie conta e um repositório novo em github.com (ex.: `site-joao-pessoa`), sem README.
2. No terminal do VS Code (**Ctrl + '**), dentro da pasta:
```
git init
git add .
git commit -m "Trabalho 01: site sobre Joao Pessoa"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/site-joao-pessoa.git
git push -u origin main
```
3. (Opcional) Site online: repositório > Settings > Pages > Branch `main` > Save.
4. Depois de editar: `git add .` → `git commit -m "o que mudou"` → `git push`.

## 5. Entregar
Selecione **o conteúdo da pasta** (index.html, css, js, img…), botão direito > Compactar em .zip, e anexe na atividade. Teste abrindo o .zip extraído antes de enviar.
