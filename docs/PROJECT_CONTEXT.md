# Contexto del proyecto: Uniendo Eslabones

Última actualización documental: 2026-10-06.

## Propósito

Uniendo Eslabones es una plataforma sectorial para visibilizar y conectar actores
de la cadena del caucho natural colombiano. Está dirigida a productores, gremios,
comercializadores, empresas, instituciones, aliados y compradores.

La experiencia combina catálogo de productos y proveedores, perfiles de aliados,
noticias, anuncios e indicadores económicos del mercado del caucho.

## Tecnología y despliegue

- Next.js 16.2.6 con App Router y Turbopack.
- React 19.2.4, TypeScript y Tailwind CSS 4.
- Vercel Analytics está instalado en el layout global.
- Repositorio: `https://github.com/ariaspuljuan/uniendo-eslabones.git`.
- Rama de producción: `main`.
- Vercel despliega automáticamente cada `push` a `main`.
- Comandos de validación: `npm run lint` y `npm run build`.

## Arquitectura relevante

El proyecto conserva rutas en `app/` y la implementación principal en `src/app/`.
No mover ni unificar esta estructura sin revisar todas las reexportaciones y rutas
API.

- `src/app/`: páginas principales y estilos globales.
- `app/`: rutas públicas, rutas API y reexportaciones hacia `src/app/`.
- `src/components/`: componentes por dominio: home, productos, noticias,
  dashboard, administración y layout.
- `src/data/products.ts`: productos y empresas proveedoras.
- `src/data/organizations.ts`: aliados y gremios.
- `src/data/news.ts`: noticias y anuncios.
- `src/data/indicatorMocks.ts`: valores de respaldo de indicadores.
- `src/services/`: acceso y normalización de fuentes de indicadores.
- `public/images_products/`: imágenes principales y galerías de productos.
- `public/images/suppliers/`: logos y banners de proveedores.
- `public/images/logos_aliados/`: logos de aliados.
- `public/images/news/`: imágenes y banners de noticias.
- `proxy.ts`: protección de la ruta administrativa.

## Rutas funcionales

- `/`: inicio con hero, cuatro productos, accesos rápidos, noticias e impacto.
- `/productos`: catálogo sectorial.
- `/productos/[slug]`: ficha de producto y contacto directo con proveedor.
- `/gremios`: directorio de aliados.
- `/gremios/[slug]`: detalle del aliado.
- `/noticias`: noticias y anuncios.
- `/dashboard`: indicadores del caucho natural y calculadora.
- `/gestion-ue`: panel administrativo protegido.
- `/gestion-ue/login`: acceso administrativo.
- `/admin` y `/admin/login`: devuelven página no encontrada deliberadamente.

## Estado actual

- Diseño responsive con navegación móvil tipo aplicación.
- Tema claro y oscuro disponible desde el navbar.
- Hero del inicio utiliza una sola imagen de fondo.
- El home muestra los cuatro productos más recientes.
- Las fichas admiten banners, logo del proveedor y galerías de producto.
- Productos, aliados y noticias están definidos actualmente en archivos TypeScript.
- El administrador todavía no es un CMS persistente completo; falta base de datos,
  almacenamiento de imágenes y operaciones CRUD reales.
- La TRM intenta obtenerse desde Datos Abiertos Colombia con datos mock de respaldo.
- Varios precios internacionales todavía dependen de datos mock/manuales.
- La ventana emergente del home está desactivada temporalmente desde el commit
  `ff6ed4c`; el componente y el anuncio se conservaron para uso futuro.
- Vercel Analytics recopila tráfico básico.

## Productos y proveedores recientes

El catálogo incluye, entre otros, productos de Disguantes de Colombia, Industrias
Goya, Rubberfit, Cauchos Echeverri, Agrosavia, ESLATEX, Emprocaucho SAS, SLTC,
VALEX Group LLC, A'sellaseg Ingeniería y Sempertex de Colombia SAS.

El producto reciente de Sempertex usa una galería interactiva de tres imágenes. Su
título visible es `látex natural Sempertex` y el proveedor es
`Sempertex de Colombia SAS`.

## Administración y secretos

Las variables privadas se guardan exclusivamente en `.env.local` y en Vercel. No
deben aparecer en documentación, chats públicos ni commits.

Variables conocidas:

```env
ADMIN_USERNAME=
ADMIN_PASSWORD=
ADMIN_SESSION_SECRET=
```

En un computador nuevo, copiar estos valores por un canal privado y crear allí el
archivo `.env.local`. Git los ignora intencionalmente.

## Flujo de trabajo acordado

1. Ejecutar `git pull origin main` antes de iniciar una tarea en un computador.
2. Revisar `git status -sb` para evitar mezclar cambios locales.
3. Inspeccionar los archivos relacionados antes de editar.
4. Implementar cambios pequeños y enfocados.
5. Ejecutar `npm run lint` y `npm run build`.
6. Revisar el diff y crear un commit descriptivo en español.
7. Hacer `git push origin main` solamente cuando el usuario solicite publicar.
8. Confirmar el despliegue automático en Vercel.

No trabajar simultáneamente en los dos computadores sobre los mismos archivos sin
sincronizar primero. Antes de cambiar de equipo, hacer commit y push; al llegar al
otro, hacer pull.

## Próximas fases acordadas

1. SEO técnico: metadata completa, canonical, Open Graph, sitemap, robots y datos
   estructurados.
2. Contenido indexable: páginas internas de noticias, categorías y enlaces internos.
3. Conversión: cotizaciones, medición de clics, formularios y productos relacionados.
4. Rendimiento: auditoría de imágenes, formatos modernos y Core Web Vitals.
5. Backend administrativo: base de datos, almacenamiento, roles, auditoría y CRUD.
6. Automatización confiable de indicadores económicos con caché y fuentes trazables.

Estas fases deben ejecutarse y validarse por separado antes de mezclar cambios o
publicarlos.

## Inicio de una conversación nueva

Prompt recomendado:

> Lee `AGENTS.md` y `docs/PROJECT_CONTEXT.md`. Después revisa `git status`, los
> últimos commits y la estructura relacionada con mi solicitud. No hagas cambios
> todavía: primero confirma el estado actual y explícame qué archivos tocarías.

Después de esa primera revisión, proporcionar la tarea concreta.
