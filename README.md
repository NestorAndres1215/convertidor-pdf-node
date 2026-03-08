# 📄 Conversor de Archivos PDF

Este proyecto permite a los usuarios **subir un archivo**, convertirlo a PDF (u otro formato que soporte tu backend) y luego **descargarlo** desde una interfaz web moderna.  
Está construido con **Astro** en el frontend y **Node.js + Express** en el backend.

---

## 🔹 Características

- Subida de archivos mediante **drag & drop** o selector de archivos.
- Conversión de archivos en el backend (ej. DOCX → PDF).
- Página de descarga con botón para descargar el archivo generado.
- Redirección automática a la página de descarga tras la conversión.
- Compatible con múltiples tipos de archivo (según backend).

---

## 💻 Tecnologías utilizadas

| Capa      | Tecnologías                                           |
|----------|------------------------------------------------------|
| Frontend | Astro, HTML, CSS, Tailwind/Bulma opcional, FontAwesome |
| Backend  | Node.js, Express, Multer (para manejo de archivos)   |
| Otros    | JavaScript, Fetch API                                 |

---
