# Criativos: 365 Receitas pra Air Fryer (lotes 1 e 2)

## O que tem aqui

| Pasta | Conteúdo | Pronto para subir? |
|---|---|---|
| `imagens/` | 3 anúncios em imagem, cada um em feed (4:5) e stories/reels (9:16) | ✅ Sim |
| `roteiros/lote-1-videos.md` | 4 roteiros de vídeo com tempo, texto na tela, imagem e voz | Falta montar |
| `roteiros/lote-2-clones.md` | 2 vídeos CLONE, modelados no concorrente mais escalado | Falta montar |
| `concorrentes/` | Análise do concorrente e transcrições dos vídeos dele | Referência |
| `vozes/` | Texto corrido de cada vídeo, pronto para o gerador de voz | Falta gerar o áudio |

### Imagens
| Arquivo | Ângulo | Texto do anúncio |
|---|---|---|
| `IMG1-direto-preco` | Direto: 365 receitas + preço | Texto 3 |
| `IMG2-gancho-usando-errado` | Curiosidade: "usando errado" | Texto 1 |
| `IMG3-oferta-bonus` | O que a pessoa recebe (guia + 3 bônus) | Texto 2 |

Os textos estão em `analise/02-airfryer-plano.md`. Para refazer ou editar as imagens, rode `NODE_PATH=$(npm root -g) node imagens/gerar.js`.

## Como montar os vídeos sem gastar créditos
1. **Voz:** o CapCut tem "Texto para fala" com vozes em português. Cole o texto de `vozes/` e gere o áudio. (Se ainda tiver créditos no 1min.ai ou no MiniMax, use um deles.)
2. **Imagens:** grave você mesma o preparo na sua Air Fryer. Vídeo real de celular costuma converter melhor que imagem gerada por IA. Se não der, use vídeos gratuitos do Pexels ou Pixabay (busca "air fryer").
3. **Montagem no CapCut:** importe o vídeo e a voz, use "Legendas automáticas", coloque o texto grande dos 3 primeiros segundos e exporte em 1080x1920.
4. **Ordem para subir:** CLONE 1 → CLONE 2 → V1 (usando errado) → V2 (direto) → V4 → V3. Os clones vêm primeiro porque copiam um roteiro que já vende.

## Cuidados (evitam reprovação e desconfiança)
- Não usei "De R$ 197", "+70 mil alunas" nem "4,9★" nos anúncios. Só use esses números se eles forem comprovados.
- Não coloquei depoimentos. Quando tiver prints reais de clientes, eles viram o próximo criativo (prova social).
- A foto dos anúncios é a mesma da página de vendas. Se ela foi gerada por IA, tudo bem para anúncio, mas fotos reais dos pratos do guia costumam passar mais confiança.

## Próximo lote
- Criativo de prova social, quando houver depoimentos reais.
- Uma imagem modelada no concorrente, se você quiser (peça no chat).
