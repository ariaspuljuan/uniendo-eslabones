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
