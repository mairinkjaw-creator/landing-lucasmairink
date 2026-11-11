// ===== CONFIG: troque aqui =====
// Número com DDI + DDD, só dígitos. Ex.: "5521999999999". Vazio = botões levam para a seção Contato.
const WHATSAPP = "";
const MENSAGEM = "Oi, Lucas! Vi seu site e quero um orçamento de Storymaker para o meu evento.";
// ===============================

if (WHATSAPP) {
  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAGEM)}`;
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
  });
}

document.getElementById("ano").textContent = new Date().getFullYear();

// Vídeos: só carregam quando chegam perto da tela (lazy-load), com poster.
// Tocam mudos em loop enquanto visíveis; toque abre com som.
const boxes = document.querySelectorAll(".video");
const io = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const v = e.target.querySelector("video");
        if (e.isIntersecting) {
          if (!v) montar(e.target);
          else v.play().catch(() => {});
        } else if (v) {
          v.pause();
        }
      });
    }, { rootMargin: "200px" })
  : null;

function montar(box) {
  const v = document.createElement("video");
  v.src = box.dataset.src;
  if (box.dataset.poster) v.poster = box.dataset.poster;
  v.muted = true;
  v.loop = true;
  v.playsInline = true;
  v.preload = "metadata";
  v.addEventListener("click", () => { v.muted = !v.muted; v.play().catch(() => {}); });
  box.appendChild(v);
  v.play().catch(() => {});
}

boxes.forEach((box) => {
  if (!box.dataset.src) {
    box.classList.add("vazio");
    if (box.dataset.poster) box.style.background = `center / cover url(${box.dataset.poster})`;
    return;
  }
  if (io) io.observe(box);
  else montar(box);
});
