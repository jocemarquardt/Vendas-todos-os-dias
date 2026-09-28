# /automatico — Low Ticket Automatizado

Skill pro [Claude Code](https://claude.ai/claude-code) que transforma operacao de low ticket digital num software interativo. Mineracao de ofertas escaladas, modelagem de funil, geracao de criativos, cadastro em gateway e otimizacao de campanhas — tudo dentro do terminal.

**by [@adsborba](https://instagram.com/adsborba)**

## O que faz

| Modulo | Descricao |
|--------|-----------|
| [1] Setup | Diagnostico de dependencias |
| [2] Minerar | Reclame Aqui, Biblioteca Meta, RatoAds |
| [3] Analisar | Analise completa de oferta + definir produto |
| [4] Entregavel | Gera PDF/pack/planilha/simulado completo |
| [5] Funil | Modela pagina de vendas a partir do concorrente |
| [6] Criativos | Scrapa ads reais, transcreve, gera 7 criativos modelados |
| [7] Gateway | Cadastra produto na Wiapy automaticamente |
| [8] Meta Ads | Cria pixel, campanha e otimiza (metodo @adsborba) |
| [9] Config | Diagnostico, instalacao, metricas |

## Instalacao

1. Copie a pasta `automatico/` pra `~/.claude/skills/automatico/`
2. Copie `config-automatico.example.json` pra `config-automatico.json` no seu diretorio de trabalho
3. Preencha suas credenciais no `config-automatico.json`
4. No Claude Code, digite `/automatico`

```bash
# Copiar skill
cp -r automatico ~/.claude/skills/automatico

# Criar config
cp config-automatico.example.json config-automatico.json
```

## Dependencias

Rode `[1] Setup` pra verificar tudo automaticamente. Resumo:

- **Edge** — scraper Reclame Aqui (Windows)
- **Whisper** — transcrever videos (`pip install openai-whisper`)
- **yt-dlp** — baixar videos (`pip install yt-dlp`)
- **Apify** — scraper Biblioteca de Anuncios (conta free em apify.com)
- **Meta Ads Graph API** — criar app em developers.facebook.com, gerar token
- **Wiapy** — gateway de checkout (conta em wiapy.com)
- **RatoAds** — mineracao premium (opcional, ratoads.com.br)

### MCPs opcionais (Claude Code)

- **Higgsfield** — gerar imagens/videos com IA
- **Utmify** — dashboards de performance

## Minerador Reclame Aqui

O `minerador-reclameaqui.py` scrapa reclamacoes de 8 gateways pra encontrar ofertas escaladas.

```bash
# Todos os 8 gateways
python minerador-reclameaqui.py

# Gateways especificos
python minerador-reclameaqui.py wiapy,cakto,kirvano 10 15
```

Requer Edge instalado. Resultados salvos em `./mineracao/`.

## Estrutura de pastas (geradas automaticamente)

```
./mineracao/          resultados do Reclame Aqui
./analises/           analises de ofertas salvas
./produtos/           definicoes de produto
./entregaveis/        PDFs, packs, planilhas gerados
./funis/              paginas de vendas HTML
./criativos/          roteiros, vozes, videos de fundo
```

## Licenca

MIT
