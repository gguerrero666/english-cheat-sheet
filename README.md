# Cheat Sheet · Meeting English

Hojas de consulta en inglés para tener a mano en reuniones de trabajo (perfil de desarrollo de software). Cada hoja es una sola página HTML pensada para verse en pantalla y para **imprimirse en una hoja A4**.

**Sitio publicado:** <https://gguerrero666.github.io/english-cheat-sheet/>

## Hojas

| Hoja | Contenido | Abrir |
|---|---|---|
| **General** | Saludos, opiniones, acuerdo y desacuerdo, aclaraciones, interrumpir con educación, ganar tiempo, estado y cierre | [Abrir](https://gguerrero666.github.io/english-cheat-sheet/cheat-sheet-general.html) |
| **Vocabulario técnico** | Gestión de proyectos, Agile y Scrum, estado y avance, verbos de reunión, software y tecnología (30 términos) y abreviaturas. EN + ES | [Abrir](https://gguerrero666.github.io/english-cheat-sheet/cheat-sheet-vocabulary.html) |
| **Tiempos 1/2** | Present Simple, Present Continuous, Past Simple, Present Perfect y Future con *will*. Fórmulas, ejemplos y traducción | [Abrir](https://gguerrero666.github.io/english-cheat-sheet/cheat-sheet-tenses-1.html) |
| **Tiempos 2/2** | Future con *going to*, Past Continuous, Present Perfect Continuous, Past Perfect y Condicionales 1 y 2 | [Abrir](https://gguerrero666.github.io/english-cheat-sheet/cheat-sheet-tenses-2.html) |
| **Tiempos (todo)** | Los 10 tiempos en una sola página, con letra más pequeña | [Abrir](https://gguerrero666.github.io/english-cheat-sheet/cheat-sheet-tenses-consolidated.html) |

El [índice](https://gguerrero666.github.io/english-cheat-sheet/index.html) enlaza todas las hojas.

## Cómo abrir las páginas

**En línea (recomendado):** abre el [sitio publicado](https://gguerrero666.github.io/english-cheat-sheet/) y elige una hoja.

**En tu equipo:**
1. Descarga el repositorio (**Code → Download ZIP**) o clónalo: `git clone https://github.com/gguerrero666/english-cheat-sheet.git`
2. Abre `index.html` con doble clic en cualquier navegador.

Las hojas necesitan estar en la misma carpeta que `styles.css` y `theme.js`; si mueves un HTML solo, pierde el estilo.

## Cómo imprimir

1. Abre la hoja que quieras y pulsa **Ctrl + P**.
2. Papel **A4**, escala **100 %**, márgenes **Predeterminados**.
3. Activa **Gráficos de fondo** (*Background graphics*) para conservar los colores.

Cada hoja sale en **una sola página**. El selector de tema, el enlace "← Index" y el pie de página no se imprimen. Para tamaños de letra, cada hoja usa un factor de ampliación solo para impresión que se ajustó para llenar la página con los tres temas (funciona en Chrome y Edge; Firefox lo admite desde la versión 126).

## Temas

Arriba a la derecha hay un selector de tema. La elección se recuerda y se mantiene al moverte entre hojas.

| Tema | Descripción |
|---|---|
| **Classic** | El diseño original: azul, tarjetas redondeadas y números en círculo |
| **Modern** | Empresarial: base gris y negro, acento azul marino, títulos en serif y cajas sobrias |
| **Monochrome** | Solo grises, como una impresión en blanco y negro; el español va en cursiva |

También puedes forzar un tema con la URL, por ejemplo `cheat-sheet-general.html?theme=mono`.

## Estructura

```
index.html                         Índice con enlaces a todas las hojas
cheat-sheet-general.html           Frases generales de reunión
cheat-sheet-vocabulary.html        Vocabulario técnico (EN + ES)
cheat-sheet-tenses-1.html          Tiempos verbales, parte 1
cheat-sheet-tenses-2.html          Tiempos verbales, parte 2
cheat-sheet-tenses-consolidated.html  Todos los tiempos en una página
styles.css                         Estilos compartidos, temas y reglas de impresión
theme.js                           Selector de tema
```

## Personalizar

- **Contenido:** edita el HTML de la hoja correspondiente.
- **Colores y tipografía:** `styles.css` usa variables (`--accent`, `--es`, `--font`...). Cada tema solo cambia esas variables.
- **Nuevo tema:** añade `{ id, label }` a la lista `THEMES` de `theme.js` y un bloque `:root[data-theme="tu-id"] { ... }` en la sección 7 de `styles.css`.
- **Ajuste de impresión:** cada hoja define `--print-zoom` en su `<body>`. Si agregas contenido y la hoja pasa a dos páginas al imprimir, baja ese valor.
