// 1) Ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// 2) Menu hambúrguer (celular)
const menu = document.getElementById("menu");
document.getElementById("btn-menu").addEventListener("click", () => {
  menu.classList.toggle("aberto");
});

// 3) Tema claro/escuro (lembra a escolha)
const raiz = document.documentElement;
const btnTema = document.getElementById("btn-tema");
function aplicarTema(tema) {
  raiz.dataset.tema = tema;
  btnTema.textContent = tema === "escuro" ? "☀️" : "🌙";
}
let salvo = "claro";
try { salvo = localStorage.getItem("tema") || "claro"; } catch (e) {}
aplicarTema(salvo);
btnTema.addEventListener("click", () => {
  const novo = raiz.dataset.tema === "escuro" ? "claro" : "escuro";
  aplicarTema(novo);
  try { localStorage.setItem("tema", novo); } catch (e) {}
});

// 4) Imagem reserva se a foto não for encontrada
function reserva(texto) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="380"><rect width="100%" height="100%" fill="#1b8aa6"/><text x="50%" y="50%" fill="#fff" font-size="28" font-family="sans-serif" text-anchor="middle">${texto}</text></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
// Se a foto local falta: tenta a Wikipédia; se falhar, mostra quadro azul
async function buscaWikipedia(termo) {
  const url = "https://pt.wikipedia.org/w/api.php?action=query&generator=search&gsrlimit=1&prop=pageimages&piprop=thumbnail&pithumbsize=800&format=json&origin=*&gsrsearch=" + encodeURIComponent(termo);
  const dados = await (await fetch(url)).json();
  const pagina = dados.query && Object.values(dados.query.pages)[0];
  return pagina && pagina.thumbnail ? pagina.thumbnail.source : null;
}
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", async () => {
    if (img.hasAttribute("data-sem-reserva")) { img.hidden = true; return; }
    if (!img.dataset.tentou) {
      img.dataset.tentou = "1";
      try {
        const achou = await buscaWikipedia(img.alt + " João Pessoa");
        if (achou) { img.src = achou; return; }
      } catch (e) {}
    }
    img.src = reserva(img.alt || "Foto");
  });
});

// 5) Ampliar foto ao clicar (lightbox)
const caixa = document.getElementById("lightbox");
document.querySelectorAll(".card img, .galeria img").forEach((img) => {
  img.addEventListener("click", () => {
    caixa.querySelector("img").src = img.src;
    caixa.querySelector("p").textContent = img.alt;
    caixa.hidden = false;
  });
});
caixa.addEventListener("click", () => (caixa.hidden = true));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") caixa.hidden = true; });
