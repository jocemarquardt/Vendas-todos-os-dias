# Plano de ação: relançar a campanha "365 Receitas pra Air Fryer"

Objetivo: sair de 8 campanhas pequenas e aleatórias (4 vendas no total) para **1 campanha organizada** que dê à Meta sinal suficiente para vender todo dia.

Siga na ordem. **Não pule a Etapa 1**: sem rastreamento certo, nenhuma campanha funciona.

---

## Etapa 1: Arrumar a base (antes de gastar R$ 1)

### 1.1 Rastreamento (Wiapy + Meta)
- [ ] Na Wiapy, abra o produto → Pixels/Integrações → confirme que o **ID do pixel da Meta** está cadastrado.
- [ ] Se houver campo de **token da API de Conversões**, gere o token no Gerenciador de Eventos (Configurações do pixel → API de Conversões → Gerar token de acesso) e cole na Wiapy.
- [ ] Faça **uma compra de teste** (ou use o modo de teste da Wiapy) e confira no Gerenciador de Eventos → *Testar eventos* se aparecem, em sequência:
  `PageView` → `InitiateCheckout` → `Purchase (valor 27,90 BRL)`
- [ ] Compare: as **4 vendas da Wiapy** aparecem como 4 "Compras" no Gerenciador? Se aparecer menos, o problema é o rastreamento. Resolva isso antes de tudo.

### 1.2 Saber qual anúncio vendeu (UTMs)
No campo **"Parâmetros de URL"** de cada anúncio, cole:
```
utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{ad.name}}
```
Assim, no relatório de vendas da Wiapy, você vê de qual anúncio veio cada venda, mesmo se o pixel falhar.

### 1.3 Aumentar o valor de cada venda (o que mais muda o jogo)
Hoje cada venda rende ~R$ 25 líquidos, então o anúncio precisa vender a menos de ~R$ 20. É muito apertado.
- [ ] **Order bump** no checkout da Wiapy, de R$ 12,90 a R$ 19,90. Ideias:
  - "Cardápio Semanal pra Air Fryer: 4 semanas prontas + lista de compras"
  - "50 Receitas Fit / Low Carb na Air Fryer"
  - "Receitas de Marmita na Air Fryer para a semana toda"
- [ ] (Depois) **Upsell** de R$ 37 a R$ 47 na página de obrigado (ex.: pacote completo com sobremesas + fit + marmitas).
- Meta: ticket médio de **R$ 35–40**. Com isso, o custo por venda aceitável sobe para R$ 25–30.

### 1.4 Página de vendas: checklist (confira você)
- [ ] Carrega em **menos de 3 segundos no celular** (teste em https://pagespeed.web.dev).
- [ ] Na primeira tela do celular aparecem: **promessa + foto do produto/receitas + preço + botão**, sem precisar rolar.
- [ ] Tem **fotos reais de pratos prontos** (não só a capa do e-book).
- [ ] Tem **garantia de 7 dias** bem visível (obrigatória por lei e reduz o medo de comprar).
- [ ] Tem **prova social**: prints de clientes, mesmo que sejam as 4 primeiras.
- [ ] Se usar "De R$ 197 por R$ 27,90", garanta que é verdadeiro. Se não for, troque por "Por apenas R$ 27,90, menos que um delivery".
- [ ] Todos os textos **com acentuação correta**.
- [ ] (Recomendado) **Domínio próprio** no lugar de `vercel.app`, verificado no Gerenciador de Negócios.

---

## Etapa 2: Limpar a conta
- [ ] **Não delete** as 8 campanhas antigas (o histórico é útil). Deixe **pausadas/arquivadas**.
- [ ] **Não reative nenhuma delas**: 6 estão com idioma inglês e todas competem entre si.

---

## Etapa 3: Montar a campanha nova

### Campanha
| Campo | Configuração |
|---|---|
| Nome | `AirFryer | Vendas | Teste Criativos | Out26` |
| Objetivo | **Vendas** |
| Tipo | Campanha de vendas manual (ou Advantage+ de vendas, se aparecer como padrão; tudo bem) |
| Orçamento | **Orçamento da campanha (Advantage+ / CBO): R$ 80/dia** (mínimo R$ 50/dia) |
| Estratégia de lance | Maior volume (sem limite de custo por enquanto) |

### Conjunto de anúncios (**apenas 1**)
| Campo | Configuração |
|---|---|
| Local da conversão | Site |
| Pixel / evento | Seu pixel → **Compra** |
| Localização | Brasil |
| Idade | 25 a 65+ (deixe o Advantage+ ampliar) |
| Idioma | **Deixe em branco** ⚠️ |
| Público | **Público Advantage+ ligado**, sem interesses (o pixel/criativo encontra o público) |
| Posicionamentos | **Advantage+ (automáticos)** |
| Dispositivos | Todos |
| Atribuição | 7 dias clique + 1 dia visualização |

### Anúncios (5 no mesmo conjunto)
| Nome do anúncio | Criativo | Texto |
|---|---|---|
| `V-B-UsandoErrado` | Vídeo B ("usando errado") | Texto 1 |
| `V-A-MaisQueBatata` | Vídeo A | Texto 2 |
| `V-C` | Vídeo C | Texto 3 |
| `IMG-Preco` | Imagem com o preço | Texto 3 |
| `CAR-Receitas` | **Novo**: carrossel com 5–8 fotos de pratos prontos | Texto 2 |

- Botão (CTA): **"Comprar agora"** em todos.
- Dica: se os anúncios antigos tiverem curtidas e comentários, crie os novos com **"Usar publicação existente"** (pelo ID da publicação) para herdar a prova social. **Mas antes corrija os textos sem acento.**

---

## Textos prontos para colar

**Título (headline), igual para todos:** `365 Receitas pra Air Fryer + 3 Bônus`
**Descrição:** `Acesso imediato no celular • Garantia de 7 dias`

### Texto 1 (gancho de curiosidade: vídeo B)
> Você tá usando sua Air Fryer errado (e nem sabe). 😳
>
> A maioria das pessoas só faz batata congelada e nuggets, mas ela faz MUITO mais que isso.
>
> Com o Guia 365 Receitas pra Air Fryer você aprende:
> ✅ Carnes suculentas, sem ressecar
> ✅ Bolos fofinhos e sobremesas crocantes
> ✅ Pães e lanches prontos em minutos
> ✅ Pratos saudáveis, com bem menos óleo
>
> Cada receita vem com **tempo e temperatura exatos**. É só seguir e acertar de primeira.
>
> 🎁 Guia completo + 3 bônus por apenas **R$ 27,90**. Acesso imediato no celular.
> 👉 Toque em "Comprar agora".

### Texto 2 (benefício / rotina: vídeo A e carrossel)
> Cansada de fazer sempre a mesma coisa na Air Fryer? 🍗🍰
>
> São 365 receitas testadas: uma diferente para cada dia do ano, do café da manhã à sobremesa.
>
> 📖 Tempo e temperatura exatos em cada receita
> 📱 Acesso na hora, direto no celular
> 🎁 + 3 bônus inclusos
> 🔒 Garantia de 7 dias: não gostou, devolvemos seu dinheiro
>
> Tudo isso por **R$ 27,90**, menos que um único pedido de delivery.
> 👉 Garanta o seu agora.

### Texto 3 (curto e direto: vídeo C e imagem)
> 365 receitas pra Air Fryer com tempo e temperatura exatos. ✅
> Do café da manhã à sobremesa, sem errar.
> 🎁 + 3 bônus • Acesso imediato • Garantia de 7 dias
> Hoje por apenas **R$ 27,90**. 👉 Comprar agora

---

## Criativos novos para produzir (prioridade)
Os criativos são o que mais influencia o resultado. Tenha sempre **2–3 novos por semana** na fila.

Ganchos para os **3 primeiros segundos** dos vídeos (texto grande na tela):
1. "Pare de usar sua Air Fryer só pra batata frita 🍟❌"
2. "Fiz bolo na Air Fryer e ficou assim…" (mostrar o bolo cortado)
3. "3 receitas de Air Fryer que ninguém te contou"
4. "Quanto tempo e qual temperatura? Nunca mais erre"
5. "Almoço pronto em 15 minutos na Air Fryer" (mostrar o prato)

Formatos que costumam funcionar para receitas:
- Vídeo vertical (9:16) de **preparo real e rápido** (mãos, comida, resultado), 15–30 s.
- **Carrossel** de fotos de pratos com o nome da receita.
- Print/depoimento de cliente ("fiz o bolo do guia e…").

---

## Etapa 4: Rotina depois de ligar

### Dias 1 a 3: **não mexa em nada**
Só observe. Mexer em orçamento, público ou anúncios reinicia o aprendizado.

### A partir do dia 3: regras por anúncio
| Situação | Ação |
|---|---|
| Gastou **R$ 25** e CTR (link) **abaixo de 0,8%** | Pausar (o criativo não chama atenção) |
| Gastou **R$ 50** e **nenhuma finalização de compra** | Pausar |
| Gastou **R$ 60** e **nenhuma compra** | Pausar |
| Custo por compra **≤ R$ 25** (ou ≤ R$ 30 com order bump) | Manter ✅ |
| Muitos cliques, mas pouca gente inicia o checkout | O problema está na **página**, não no anúncio |
| Muitos checkouts iniciados, mas poucas compras | O problema está no **checkout/preço/pagamento** (Pix? boleto? cartão?) |

Toda vez que pausar um anúncio, **coloque 1 criativo novo** no lugar. Mantenha sempre de 3 a 5 anúncios ativos.

### Escala (quando o custo por compra ficar bom por 3 dias seguidos)
- Aumente o orçamento em **20–30% a cada 2–3 dias** (R$ 80 → 100 → 125 → 160…).
- Não dobre de uma vez.
- Quando a frequência passar de 3 e o custo subir, é sinal de **criativo cansado**: entre com criativos novos.

### Remarketing (a partir de ~1.000 visitas na página)
- Conjunto separado, **R$ 15/dia**: quem visitou a página ou iniciou o checkout nos últimos 14 dias e **não comprou**.
- Anúncio: prova social + garantia + "última chance com os 3 bônus".

---

## Metas de referência (produto de R$ 27,90)
| Métrica | Bom | Atenção |
|---|---|---|
| CTR (link) | ≥ 1,2% | < 0,8% |
| CPC (link) | ≤ R$ 0,80 | > R$ 1,50 |
| Visita → início de checkout | ≥ 8% | < 4% |
| Checkout → compra | ≥ 30% | < 20% |
| Custo por compra | ≤ R$ 20 (sem bump) / ≤ R$ 30 (com bump) | acima disso |

Com **R$ 80/dia** e custo por venda de ~R$ 20, a meta é **~4 vendas por dia**. É esse volume que tira a campanha do aprendizado e faz vender todo dia.
