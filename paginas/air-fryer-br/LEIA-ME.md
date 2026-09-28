# Página de vendas (Brasil): 365 Receitas pra Air Fryer

Versão antiga no ar: https://365-receitas-air-fryer-br.vercel.app/
Checkout: Wiapy (`https://pay.wiapy.com/FAtga8pCFalZ`)

## Limpeza de 28/09/2026
- **Prova social inventada removida:** saíram "Mais de 70 mil pessoas já usam", "+70.000 alunas", "4.9★" e os 3 depoimentos com nome e cidade. No lugar entrou a seção "Como funciona" (3 passos). Quando tiver avaliações reais, com autorização das clientes, elas entram ali.
- **Preço "de" removido:** "De R$197" virou "Menos que um pedido de delivery".
- **Contador:** não mostra mais "00:00" quando o celular reabre a aba; recomeça sozinho.
- **Imagens:** convertidas para JPG leve (de ~1,5 MB para 190 KB e 26 KB), a página carrega mais rápido no celular.
- **Pixel da Meta:** a página não tinha pixel nenhum. Instalado com o ID `1353120302041980` (`var META_PIXEL_ID`, no início do `index.html`). A página a enviar PageView e, ao clicar em comprar, InitiateCheckout. A compra (Purchase) vem da Wiapy: cadastre o mesmo pixel no produto dentro da Wiapy.

## Para publicar
Projeto novo na Vercel: **Add New → Project** → importe `jocemarquardt/Vendas-todos-os-dias` → em **Root Directory** escolha `paginas/air-fryer-br` → **Deploy**.
Ou, se achar o projeto antigo `365-receitas-air-fryer-br`: **Settings → Git** → conecte o repositório com o mesmo Root Directory.
