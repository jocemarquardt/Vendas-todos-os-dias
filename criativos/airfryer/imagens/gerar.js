// Gera as imagens estáticas dos anúncios (feed 4:5 e stories 9:16).
// Uso: NODE_PATH=$(npm root -g) node imagens/gerar.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const FOTO = 'data:image/png;base64,' +
  fs.readFileSync(path.join(__dirname, 'fonte/prato-frango-legumes.png')).toString('base64');

const FORMATOS = { feed: [1080, 1350], stories: [1080, 1920] };

const BASE_CSS = `
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Poppins',sans-serif;color:#fff;overflow:hidden;background:#1b1210}
.foto{position:absolute;inset:0;background:url(${FOTO}) center/cover}
.sombra{position:absolute;inset:0}
.conteudo{position:absolute;inset:0;display:flex;flex-direction:column;padding:70px 64px}
.preco{display:inline-flex;align-items:baseline;gap:10px;background:#ffcf2e;color:#1b1210;
  font-weight:900;border-radius:22px;padding:14px 34px;box-shadow:0 10px 30px rgba(0,0,0,.35)}
.preco small{font-size:.38em;font-weight:700}
.cta{background:#27ae60;color:#fff;font-weight:800;border-radius:60px;text-align:center;
  padding:26px 20px;font-size:44px;box-shadow:0 10px 30px rgba(0,0,0,.35)}
.selos{display:flex;gap:14px;flex-wrap:wrap;justify-content:center;font-weight:600;font-size:30px}
.selos span{background:rgba(0,0,0,.55);border-radius:40px;padding:10px 24px}
`;

// Criativo 1: DIRETO (número + preço em destaque)
const direto = (h) => `
<div class="foto"></div>
<div class="sombra" style="background:linear-gradient(180deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.35) 38%,rgba(0,0,0,.2) 55%,rgba(0,0,0,.88) 100%)"></div>
<div class="conteudo" style="justify-content:space-between;${h > 1500 ? 'padding-top:220px;padding-bottom:260px' : ''}">
  <div style="text-align:center">
    <div style="font-size:150px;font-weight:900;line-height:.95;color:#ffcf2e;text-shadow:0 6px 24px rgba(0,0,0,.5)">365</div>
    <div style="font-size:64px;font-weight:800;line-height:1.1;text-shadow:0 4px 18px rgba(0,0,0,.6)">receitas pra Air Fryer</div>
    <div style="font-size:36px;font-weight:600;margin-top:14px;opacity:.95">com tempo e temperatura exatos</div>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:26px">
    <div style="font-size:40px;font-weight:700">+ 3 bônus inclusos 🎁</div>
    <div class="preco" style="font-size:120px">R$ 27,90 <small>pagamento único</small></div>
    <div class="selos"><span>📱 Acesso imediato</span><span>🛡️ Garantia de 7 dias</span></div>
  </div>
</div>`;

// Criativo 2: GANCHO de curiosidade ("usando errado")
const gancho = (h) => `
<div class="foto" style="top:${h > 1500 ? 640 : 470}px"></div>
<div class="sombra" style="top:${h > 1500 ? 640 : 470}px;background:linear-gradient(180deg,#fff7e8 0%,rgba(255,247,232,0) 22%,rgba(0,0,0,0) 60%,rgba(0,0,0,.85) 100%)"></div>
<div style="position:absolute;left:0;right:0;top:0;height:${h > 1500 ? 660 : 490}px;background:#fff7e8"></div>
<div class="conteudo" style="justify-content:space-between;${h > 1500 ? 'padding-top:200px;padding-bottom:260px' : ''}">
  <div style="text-align:center;color:#1b1210">
    <div style="display:inline-block;background:#e63946;color:#fff;font-weight:800;font-size:34px;border-radius:12px;padding:8px 22px;margin-bottom:22px">ATENÇÃO</div>
    <div style="font-size:78px;font-weight:900;line-height:1.05">Você tá usando sua Air Fryer <span style="color:#e63946">errado</span> 😳</div>
    <div style="font-size:36px;font-weight:600;margin-top:18px;color:#5a4a42">Ela faz muito mais que batata e nuggets</div>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:22px">
    <div class="selos"><span>🍗 Carnes</span><span>🍰 Bolos</span><span>🍞 Pães</span><span>🥗 Fit</span></div>
    <div class="cta" style="width:100%">Ver as 365 receitas por R$ 27,90</div>
  </div>
</div>`;

// Criativo 3: OFERTA (o que a pessoa recebe)
const oferta = (h) => `
<div class="foto" style="filter:brightness(.55) saturate(1.1)"></div>
<div class="sombra" style="background:linear-gradient(180deg,rgba(0,0,0,.6),rgba(0,0,0,.25) 45%,rgba(0,0,0,.8))"></div>
<div class="conteudo" style="justify-content:center;gap:34px;${h > 1500 ? 'padding-top:220px;padding-bottom:260px' : ''}">
  <div style="text-align:center;font-size:66px;font-weight:900;line-height:1.08;text-shadow:0 4px 18px rgba(0,0,0,.6)">
    Menos que um delivery,<br>receita pro <span style="color:#ffcf2e">ano inteiro</span>
  </div>
  <div style="background:rgba(255,255,255,.96);color:#1b1210;border-radius:34px;padding:40px 46px;font-size:38px;font-weight:600;line-height:1.5;box-shadow:0 16px 40px rgba(0,0,0,.4)">
    <div style="font-weight:800;font-size:42px;margin-bottom:10px">Você recebe:</div>
    ✅ Guia com 365 receitas testadas<br>
    🎁 Bônus 1: Receitas rápidas de micro-ondas<br>
    🎁 Bônus 2: Sopas low carb<br>
    🎁 Bônus 3: Sobremesas na Air Fryer
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:22px">
    <div class="preco" style="font-size:100px">R$ 27,90</div>
    <div class="selos"><span>🛡️ Garantia de 7 dias</span><span>♾️ Acesso vitalício</span></div>
  </div>
</div>`;

const CRIATIVOS = { 'IMG1-direto-preco': direto, 'IMG2-gancho-usando-errado': gancho, 'IMG3-oferta-bonus': oferta };

(async () => {
  const browser = await chromium.launch();
  for (const [nome, tpl] of Object.entries(CRIATIVOS)) {
    for (const [fmt, [w, h]] of Object.entries(FORMATOS)) {
      const page = await browser.newPage({ viewport: { width: w, height: h } });
      await page.setContent(`<!doctype html><meta charset="utf-8"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&display=swap"><style>${BASE_CSS}</style>${tpl(h)}`, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      const out = path.join(__dirname, `${nome}-${fmt}.png`);
      await page.screenshot({ path: out });
      console.log('ok', path.basename(out));
      await page.close();
    }
  }
  await browser.close();
})();
