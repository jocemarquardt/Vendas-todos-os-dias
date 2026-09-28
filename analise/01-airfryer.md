# Análise: campanhas "365 Receitas pra Air Fryer"

Fontes: exportações do Gerenciador de Anúncios de 28/09/2026 (`export_20260928_0828.csv` e `export_20260928_0838.csv`, com o mesmo conteúdo).
Esses arquivos trazem só as **configurações** das campanhas. Eles não têm resultados (gasto, cliques, compras).

**Resultado informado:** 4 vendas pela **Wiapy** → 4 × R$ 27,90 = **R$ 111,60 de faturamento bruto** (antes das taxas da Wiapy).
Ainda falta o **valor total gasto** em anúncios para calcular o custo por venda e o retorno.

## O que existe hoje

| # | Campanha | Criada | Orçamento/dia | Onde está o orçamento | Criativo | Idioma do público |
|---|----------|--------|---------------|-----------------------|----------|-------------------|
| 1 | 365 AirFryer - Video1 Clone | 15/09 | R$ 27,90 | campanha | Vídeo A, "muito mais do que batata frita" | Inglês (EUA) ⚠️ |
| 2 | 365 AirFryer - Video1 Clone (Copia) | 15/09 | R$ 27,90 | campanha | igual ao #1 | Inglês (EUA) ⚠️ |
| 3 | 365 AirFryer - Clone B | 16/09 | R$ 27,90 | campanha | Vídeo B, "usando errado" (conjunto e anúncio pausados) | Inglês (EUA) ⚠️ |
| 4 | 365 AirFryer - Clone B (Copia) | 16/09 | R$ 27,90 | campanha | igual ao #3 | Inglês (EUA) ⚠️ |
| 5 | 365 AirFryer - Clone C | 16/09 | R$ 27,90 | campanha | Vídeo C, texto do A | Inglês (EUA) ⚠️ |
| 6 | 365 AirFryer - Clone C (Copia) | 16/09 | R$ 27,90 | campanha | igual ao #5 | Inglês (EUA) ⚠️ |
| 7 | AirFryer Refresh - Imagem-Direto-Preco | 24/09 | R$ 27,90 | conjunto | Imagem com o preço (anúncio pausado) | todos |
| 8 | AirFryer Refresh - Video-Clone1-Refresh | 24/09 | R$ 27,90 | conjunto | Vídeo A, texto curto (anúncio pausado) | todos |

Configuração comum:
- Objetivo **Vendas**, otimizando para **Compra (Purchase)**, com a estratégia "maior volume".
- Público: Brasil, 18 a 65 anos. **Público Advantage+ ligado nas campanhas 1 a 6 e desligado nas 7 e 8.**
- Somente celular. Posicionamentos manuais: Feed, Stories e Reels (as campanhas 1 a 6 também usam Marketplace e Explorar).
- Atribuição: 7 dias clique + 1 dia visualização (campanhas 1 a 6); só 7 dias clique (7 e 8).
- Página de destino: `https://365-receitas-air-fryer-br.vercel.app/`.
- Produto: guia digital de R$ 27,90 + 3 bônus.

## Problemas encontrados (do mais grave para o menos grave)

### 1. 🔴 Seis campanhas só aparecem para quem usa o Facebook em inglês
As campanhas 1 a 6 têm **Idioma = English (US)**. O público é o Brasil, mas o anúncio só é entregue a quem tem o Facebook/Instagram configurado em inglês. Isso é uma fração minúscula dos brasileiros, e justamente as pessoas que menos compram um guia de receitas em português.
Só isso já explica boa parte de qualquer resultado ruim nessas campanhas. As duas campanhas "Refresh" já vieram sem esse filtro, o que está certo.
**Ação:** não reativar as campanhas 1 a 6. Se algum dia forem reaproveitadas, remover o idioma (ou colocar Português).

> **Correção (depois de ler a skill `/automatico`):** os itens 2 e 3 abaixo não são erros. Pelo método @adsborba, a estrutura é proposital: 1 campanha por criativo, orçamento igual ao ticket, duplicada 1×, escalando por janelas de 2h. Mantenho o texto só como alternativa, caso esse método não funcione para este produto. Os erros reais em relação ao padrão da skill são: **idioma English (US)**, Advantage+ público desligado nas "Refresh", atribuição incompleta e falta de UTMs.

### 2. (Alternativa ao método) O orçamento está pulverizado demais para o algoritmo aprender
- São 8 campanhas de **R$ 27,90/dia**, o mesmo valor do produto.
- A Meta precisa de cerca de **50 compras por semana por conjunto** para sair da fase de aprendizado. Com R$ 27,90/dia, cada conjunto consegue no máximo 1 venda por dia (e só se o custo por venda for igual ao preço, ou seja, sem lucro).
- Resultado: nenhum conjunto aprende. As vendas ficam aleatórias (alguns dias vende, outros não), que é exatamente o contrário de "vender todos os dias".

### 3. (Alternativa ao método) Cópias idênticas competindo entre si
"Clone" e "Clone (Copia)" usam o **mesmo público, o mesmo criativo e o mesmo texto**. Elas disputam o mesmo leilão e encarecem o CPM umas das outras. Além disso, duplicar e reiniciar campanhas (15/09, 16/09, 24/09) zera o aprendizado a cada vez.

### 4. 🟠 A conta não fecha com o preço atual
- Ticket de R$ 27,90, com taxa da plataforma de pagamento (~10%) → sobram cerca de R$ 25 por venda.
- Para lucrar, o **custo por compra precisa ficar abaixo de ~R$ 20**. Para um produto de entrada sem order bump ou upsell, isso é difícil de manter.
- **Ação:** aumentar o ticket médio. Coloque um *order bump* de R$ 9,90 a R$ 19,90 no checkout (ex.: "Receitas fit para Air Fryer" ou "Cardápio semanal") e um *upsell* depois da compra. Com um ticket médio de ~R$ 40, o CPA máximo sobe para ~R$ 30–35 e o jogo muda.

### 5. 🟠 Página de destino em domínio `vercel.app`
- Um domínio genérico passa menos confiança e não pode ser verificado na Meta. Isso limita a configuração de eventos (iOS/Conversions API).
- **Ação:** registrar um domínio próprio (ex.: `365receitasairfryer.com.br`, cerca de R$ 40/ano), verificá-lo no Gerenciador de Negócios e configurar o evento Purchase com prioridade.
- **Checar (Wiapy):** o pixel da Meta está cadastrado **dentro do produto na Wiapy** e disparando **Purchase com o valor 27,90** quando a compra é aprovada? Se a Wiapy oferecer integração por **API de Conversões (token)**, ative também.
- **Teste rápido:** compare as 4 vendas da Wiapy com a coluna "Compras" do Gerenciador. Se o Gerenciador mostrar menos de 4, o rastreamento está perdendo vendas e a Meta está otimizando "às cegas".
- Com só 4 compras registradas, o pixel tem pouquíssimo sinal. Por isso a estrutura concentrada (abaixo) é ainda mais importante.

### 6. 🟡 Criativos
- Existem só **3 vídeos + 1 imagem**, e 2 dos 3 vídeos usam o **mesmo texto** (A e C). Há pouca variação real para testar.
- O gancho **"Você tá usando sua Air Fryer errado"** (vídeo B) é o mais forte no papel, porque gera curiosidade. Vale priorizar.
- Os textos das campanhas "Refresh" estão **sem acentos** ("Voce ta", "bonus"). Isso passa uma impressão amadora; corrija.
- "De R$ 197 por R$ 27,90": só use essa âncora de preço se ela for real. A Meta pode reprovar o anúncio e o público desconfia.
- CTA "Saiba mais": teste **"Comprar agora"** no criativo de preço direto.

### 7. 🟡 Posicionamentos manuais e somente celular
Para um conjunto novo com pouco orçamento, é melhor deixar o **Advantage+ Posicionamentos** (automático) e deixar a Meta achar o inventário mais barato. Não precisa excluir o computador.

## Plano de reativação sugerido

**Estrutura: 1 campanha, poucos conjuntos, orçamento concentrado.**

1. **Antes de ligar qualquer coisa**
   - [ ] Confirmar que o Purchase dispara com o valor certo (faça uma compra de teste e veja no Gerenciador de Eventos).
   - [ ] Ligar a API de Conversões pela plataforma de vendas.
   - [ ] (Recomendado) Domínio próprio + verificação.
   - [ ] (Recomendado) Order bump no checkout.
2. **Campanha de teste: "AirFryer | Vendas | Teste Criativos"**
   - Vendas → Purchase. Orçamento de **campanha (CBO)**: **R$ 60–100/dia**, conforme o seu caixa.
   - **1 conjunto**: Brasil, 25–60 anos, sem idioma, Advantage+ público, posicionamentos automáticos.
   - **4 a 6 anúncios diferentes** dentro desse conjunto: vídeo A, vídeo B ("usando errado"), vídeo C, imagem de preço e 1–2 criativos novos (ex.: carrossel com fotos das receitas, depoimento/print de aluna).
   - **Não mexer por 3–4 dias.** Mudanças reiniciam o aprendizado.
3. **Regras de corte (a partir do dia 3–4)**
   - Um anúncio gastou **R$ 30 (≈ 1 ticket) sem nenhum clique no botão de compra/checkout** → pausar.
   - Um anúncio gastou **R$ 60 sem nenhuma venda** → pausar.
   - Um anúncio tem **custo por compra abaixo do seu CPA máximo** → manter.
4. **Escala (quando houver 1–2 anúncios vencedores)**
   - Levar os vencedores para uma campanha **"AirFryer | Vendas | Escala"**, com orçamento aumentando **20–30% a cada 2–3 dias**, sem pular etapas.
   - Deixar a campanha de teste sempre rodando com orçamento menor, recebendo **2–3 criativos novos por semana**. Isso é o que mantém as vendas todos os dias quando os vencedores cansam (frequência > 3, CPA subindo).
5. **Remarketing (depois de ter tráfego)**
   - Um conjunto pequeno (R$ 15–20/dia) para quem visitou a página ou iniciou o checkout nos últimos 7–14 dias e não comprou, com anúncio de urgência/bônus.

## O que ainda preciso para completar a análise

Esse arquivo não tem **resultados**. Para saber qual criativo vendeu e onde o funil trava, exporte o **relatório de desempenho**:
Gerenciador de Anúncios → aba **Anúncios** → período **15/09 a 27/09** → Colunas: **Desempenho e cliques** + **Compras, Custo por compra, Finalizações de compra iniciadas, Visualizações da página de destino** → Exportar (.csv).

Atenção: o botão **"Exportar"** do menu de edição em massa gera o arquivo de configurações (que já temos). Use **Relatórios → Exportar dados da tabela**, com as colunas de resultado visíveis na tela.

Se for mais fácil, basta um **print da aba Campanhas** com as colunas *Valor usado, Compras, Custo por compra, CTR e CPC*, no período desde 15/09.

Informações já recebidas: plataforma **Wiapy**, **4 vendas** no total.
