# Landing page · Lucas Mairink (Storymaker / videomaker RJ)

Site estático (HTML + CSS + JS, sem build). Abre rápido no celular.

## Como editar
- **WhatsApp:** `main.js`, constante `WHATSAPP` (DDI + DDD, só dígitos) e `MENSAGEM`.
- **Cases:** `index.html`, seção `#portfolio`. Em cada `.video`, preencha `data-src` (vídeo .mp4 em `assets/videos/`) e `data-poster` (capa .jpg em `assets/posters/`). Sem `data-src` aparece "vídeo em breve".
- **Depoimentos, Sobre e textos:** direto no `index.html`. Foto do Sobre: `assets/foto.jpg` + `style="background-image:url(assets/foto.jpg)"` na div `.foto`.

## Vídeos leves (9:16)
```
ffmpeg -i entrada.mp4 -vf "scale=540:-2" -c:v libx264 -crf 28 -preset slow -an -movflags +faststart assets/videos/case1.mp4
ffmpeg -i entrada.mp4 -ss 1 -frames:v 1 -vf "scale=540:-2" -q:v 4 assets/posters/case1.jpg
```
Os vídeos só carregam quando chegam perto da tela (lazy-load) e mostram o poster antes.

## Rodar local
```
npx serve .
```

## Deploy
Qualquer host estático grátis. Preview atual: GitHub Pages (deploy a cada push na `main`).
Para Cloudflare Pages: conectar este repo, build command vazio, output `/`.
