# Chelina Hub Web

Frontend oficial del **Chelina Hub** — Panel Maestro de Marketing y Clientes.

Este repositorio contiene **únicamente la capa web (vitrina)** del sistema Chelina:
interfaces, dashboards y paneles de consulta para el equipo.

---

## 🎯 Propósito

- Visualizar resultados del CRM Chelina Shop
- Facilitar consultas, descargas y acciones operativas
- Servir como panel de control interno (no CRM)

---

## ❌ Qué NO es este repositorio

- NO contiene lógica de negocio
- NO contiene scripts del CRM
- NO procesa Dataview
- NO edita fichas de clientes
- NO reemplaza Obsidian

---

## 🧠 Arquitectura general

Obsidian (MD + Dataview)
→ Scripts (Apps Script)
→ Google Sheets / Drive
→ JSON / Endpoints
→ **Chelina Hub Web (este repo)**

---

## 🗂️ Estructura

- `index.html` → Dashboard principal
- `/pages` → Secciones del Hub
- `/assets/css` → Estilos (tema, cards, aurora)
- `/assets/js` → Lógica de visualización
- `/assets/img` → Logos e íconos
- `/data` → Datos mock (solo desarrollo)

---

## 🔐 Acceso

Este repositorio es **privado**.  
El Hub se publica vía **Cloudflare Pages** con dominio controlado.

---

## 🧩 Estado del proyecto

🟡 En desarrollo  
🟢 Arquitectura definida  
🟢 CRM existente y funcional  

---

© Chelina Shop — Hub Interno
