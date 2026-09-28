# Página de vendas (EUA): 365 Air Fryer Recipes

Versão antiga (projeto na Vercel não localizado): https://air-fryer-recipes-us-funnel.vercel.app/
Checkout: Kiwify (`https://pay.kiwify.com/XkdJxvz`)

## Correções de 28/09/2026
- **Imagens quebradas:** a pasta `assets/` não tinha sido publicada na Vercel, e as duas imagens davam erro 404. As imagens voltaram, convertidas para JPG leve (190 KB e 26 KB).
- **Contador em "00:00":** quando a pessoa voltava para a página depois de 15 minutos, ou o celular reabria a aba, o contador aparecia zerado. Agora ele reinicia sozinho e nunca mostra oferta expirada.
- **Prova social inventada removida:** saíram "70,000+ home cooks", "4.9★" e os 3 depoimentos com nome e cidade. No lugar entrou a seção "How it works" (3 passos). Quando tiver avaliações reais, com autorização dos clientes, elas entram ali.
- **Preço "de" removido:** "Regularly $67" virou "Less than a single takeout order".
- **Espaço para o Pixel da Meta:** no início do `index.html`, coloque o ID entre as aspas de `var META_PIXEL_ID = '';`. Com o ID, a página envia PageView e, ao clicar em comprar, InitiateCheckout. A compra (Purchase) é registrada pela Kiwify: cadastre o mesmo pixel no produto dentro da Kiwify.

## Para publicar
Projeto novo na Vercel: **Add New → Project** → importe `jocemarquardt/Vendas-todos-os-dias` → em **Root Directory** escolha `paginas/air-fryer-us` → **Deploy**.
