# Guía para editar la página de HTS

## Qué archivo abrir

| Archivo | Qué podés cambiar |
| --- | --- |
| `index.html` | Todos los textos visibles, títulos, enlaces, teléfono, dirección, formulario y contenido de las secciones. |
| Cada subcarpeta con `index.html` | El texto de esa página interna. Por ejemplo, `alarm-systems/index.html` contiene toda la página de alarmas. |
| `styles.css` | Colores, tipografía, tamaños, espacios y diseño de escritorio y móvil. |
| `internal-pages.css` | Diseño compartido de las páginas internas. |
| `script.js` | Lista de ciudades, opciones del formulario y comportamiento del menú/formulario. |
| `internal-pages.js` | Comportamiento del menú de las páginas internas. |
| `check_site.py` | Comprueba que todos los enlaces internos e imágenes existan. |
| `assets/` | Fotos y logo que usa la página. |

Abrí la carpeta en Visual Studio Code. Usá **Ctrl+F** para buscar una frase de la página. Cambiá el texto **entre** las etiquetas, por ejemplo:

```html
<h1 id="hero-title">Security Cameras, Alarms...</h1>
```

Podés reemplazar el texto después de `>` y antes de `</h1>`. Conservá las etiquetas y los atributos.

## Dónde están los textos

| Parte de la web | Buscar en `index.html` |
| --- | --- |
| Título grande de portada | `id="hero-title"` |
| Párrafo debajo del título | `class="hero-lead"` |
| Teléfono y botones superiores | `class="header-cta"` |
| Credenciales | `class="trust-strip"` |
| Quiénes son los clientes | `id="who"` |
| Portón animado al bajar | `id="gate-experience"` |
| Tarjetas de servicios | `id="services"` |
| Monitoreo y trailers | `id="monitoring"` |
| Cómo trabajan | `id="process"` |
| Empresa y fundador | `id="about"` |
| Reseñas y proyectos | `id="reviews"` |
| Contratos DIR | `id="government"` |
| Zona de servicio y mapa | `id="areas"` |
| Preguntas frecuentes | `id="faq"` |
| Formulario | `id="estimate-form"` |
| Pie de página | `<footer` |

La lista de **36 ciudades** está al comienzo de `script.js`, bajo el comentario `City chips`. Las opciones de **“What do you need?”** están debajo, bajo `Service options`.

## Páginas internas

Cada página está en una carpeta cuyo nombre coincide con su enlace. Ejemplos:

| Página | Archivo |
| --- | --- |
| Cámaras | `security-camera-systems/index.html` |
| Alarmas | `alarm-systems/index.html` |
| Control de acceso | `access-control/index.html` |
| Portones | `automatic-gate-systems/index.html` |
| Teléfonos | `business-phones-and-voip/index.html` |
| Wi-Fi y redes | `wifi-networking/index.html` |
| Monitoreo | `security-camera-systems/proactive-video-monitoring/index.html` |
| Tráilers | `security-camera-systems/mobile-security-camera-trailers/index.html` |
| Contratos DIR | `cooperative-contracts/index.html` |
| Mantenimiento | `maintenance-plans/index.html` |

También hay páginas para POS, instalación y reparación, áreas de servicio, About, Contact, Careers/Contractors, Referral Partners y Privacy Policy. Buscá la frase que querés cambiar con **Ctrl+Shift+F**: VS Code te mostrará el archivo exacto. Los textos de cada página están directamente en su `index.html`, dentro de `<h1>`, `<h2>`, `<p>` y `<li>`.

Los enlaces internos usan rutas relativas para funcionar tanto en la carpeta local como en GitHub Pages. Si cambiás una ruta, ejecutá `python check_site.py` en la carpeta principal del sitio para detectar enlaces rotos.

El texto de la escena del portón está en `index.html` dentro de `id="gate-experience"`. Su aspecto está en `styles.css` bajo el comentario `Scroll story`, y el movimiento está en `script.js` bajo `Open the illustrated gate`.

## Colores y fotos

Los colores principales están al comienzo de `styles.css`:

```css
--blue: #0b1678;
--yellow: #ffd21a;
```

Cambiar esos dos valores actualiza muchas partes de la web. Las imágenes están en `assets/`, incluido `hts-logo.png` (el logo que enviaste). Sus ubicaciones se buscan por el nombre del archivo en `index.html` y en los `index.html` de las páginas internas. Podés reemplazar una foto por otra con el mismo nombre, o cambiar el valor de `src="..."`. El origen de cada imagen está documentado en `PHOTO-SOURCES.md`.

## Cambios importantes antes de publicar

- Si cambiás teléfono, email o dirección, usá **Ctrl+Shift+F** para buscarlos en todos los archivos, porque aparecen varias veces.
- Los textos entre corchetes `[CONFIRM]`, `[REPLACE]` y `[PHOTO]` indican información o imágenes que todavía faltan.
- Si modificás preguntas frecuentes o datos de contacto, actualizá también los bloques `application/ld+json` del encabezado de `index.html`; son los datos para buscadores.
- El formulario actual valida datos y abre un correo preparado. Para recibir solicitudes directamente desde la web hace falta un backend seguro. No borres el aviso de vista previa hasta conectarlo.
- La página interna de Privacy Policy es un borrador señalado como tal. El dueño debe aprobar el texto y el tratamiento real de datos antes de publicar el sitio.

Para comprobar tus cambios, guardá el archivo y actualizá la pestaña del navegador con **Ctrl+R**.
