# Fuentes de indicadores sectoriales

Estos servicios centralizan las fuentes antes de llegar a React. La idea es evitar
CORS, normalizar unidades, cachear respuestas y limpiar datos antes de mostrarlos.

- `trm.service.ts`: TRM desde Datos Abiertos Colombia / Superintendencia Financiera.
- `rubberPrices.service.ts`: referencias consolidadas de caucho natural.
- `malaysiaRubber.service.ts`: referencias Latex y SMR20 de Malasia.
- `tsr20.service.ts`: referencia TSR20 desde SGX/SICOM o proveedores como Investing.

La TRM ya se consulta desde backend con revalidación periódica y respaldo local.
Las referencias internacionales de caucho todavía usan datos normalizados en
`src/data/indicatorMocks.ts` mientras se conecta una fuente automática estable.
Cuando se conecten APIs reales, se deben mantener las mismas respuestas
normalizadas para no romper el frontend ni la calculadora.

## Corte manual verificado: 23 de octubre de 2026

Las cifras de caucho son referencias por fecha, no promedios del mes ni precios
locales de compra. La TRM continúa automática; se actualizó su respaldo local.

| Indicador | USD/kg (TRM: COP/USD) | Fecha de referencia | Variación diaria |
| --- | ---: | --- | ---: |
| TRM | 3185.01 | 2026-10-23 | -0.2024% |
| TSR20 | 2.543 | publicación 2026-10-23, cierre 2026-10-22 | -0.6641% |
| Látex | 1.92 | 2026-10-23 | 0% |
| SMR20 | 2.6015 | 2026-10-23 | +0.6383% |
| STR20 | 2.6789 | 2026-10-20 | no verificada |

Fuentes y unidades:

- TRM: API oficial de [Datos Abiertos / SFC](https://www.datos.gov.co/resource/ceyp-9c7c.json),
  campos `valor`, `vigenciadesde` y `vigenciahasta`. El valor 3174.67 cubre
  17–19 de octubre. El anterior al 23 es 3191.47 (22 de octubre).
- TSR20: [boletines RTAS](https://www.rtas.sg/rubber-prices/), columna `Sett`
  del futuro noviembre de 2026. El boletín publica el cierre del día bursátil
  anterior. Centavos USD/kg divididos por 100: 254.3 / 100 = 2.543.
- SMR20: mismos boletines, referencia física FOB del MRB, fila `20`, columna
  US cents/kg Sellers: 260.15 / 100 = 2.6015. Entrega noviembre de 2026.
- Boletines usados para ambas series: [15](https://www.rtas.sg/wp-content/uploads/2026/10/Market-Quotations-20261015.pdf),
  [16](https://www.rtas.sg/wp-content/uploads/2026/10/Market-Quotations-20261016.pdf),
  [19](https://www.rtas.sg/wp-content/uploads/2026/10/Market-Quotations-20261019.pdf),
  [20](https://www.rtas.sg/wp-content/uploads/2026/10/Market-Quotations-20261020.pdf),
  [21](https://www.rtas.sg/wp-content/uploads/2026/10/Market-Quotations-20261021.pdf),
  [22](https://www.rtas.sg/wp-content/uploads/2026/10/Market-Quotations-20261022.pdf),
  [23](https://www.rtas.sg/wp-content/uploads/2026/10/Market-Quotations-20261023.pdf).
- Látex: [Thai Latex Association](https://www.tlalatex.org/en/price), FOB Bangkok
  a granel, USD/tonelada divididos por 1000. El 22 y 23: 1920 / 1000 = 1.92.
  No se usan filas posteriores al corte, aunque aparezcan en la fuente.
- STR20: [IRCo Physical Spot Prices TIM](https://ircorubber.com/ticker/physical-spot-prices-of-tim/),
  última observación verificada al 20 de octubre: 267.89 centavos USD/kg.
  Sin observación anterior comparable no se publica variación. Sin serie
  suficiente no se grafica; los demás días son `null`, no cero ni interpolación.

Las variaciones comparan publicaciones consecutivas de la misma referencia:
`(actual / anterior - 1) * 100`. SMR20 anterior: 2.585; TSR20 anterior: 2.56.
La calculadora usa la precisión completa aunque las tarjetas redondeen a 2 decimales.

El histórico es un snapshot de siete publicaciones (15–23 de octubre), con TRM
válida para cada fecha. No se renombra con fechas obtenidas en vivo. Se retiraron
los filtros de períodos que no modificaban la serie. Las curvas se normalizan
individualmente: sirven para observar tendencias, no comparar magnitudes.

“Caucho seco” conserva su registro histórico de agosto, marcado no disponible:
no existe una metodología documentada que permita recalcular la estimación.
No puede seleccionarse ni calcularse desde la API.
