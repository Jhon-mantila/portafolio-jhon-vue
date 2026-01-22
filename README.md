# 🚀 Portafolio Profesional — Jhon Mantilla

![Vue 3](https://img.shields.io/badge/Vue.js-3.x-42b883?logo=vue.js&logoColor=white)
![SPA](https://img.shields.io/badge/Arquitectura-SPA-blue)
![Estado](https://img.shields.io/badge/Estado-Activo-success)

Bienvenido al repositorio de mi **portafolio profesional**. Esta aplicación es una **Single Page Application (SPA)** desarrollada con **Vue.js 3**, pensada para mostrar mis proyectos y habilidades como **Desarrollador Full-Stack**, **diseñador amateur** y **entusiasta del desarrollo de videojuegos**.

> 🎯 Objetivo: un portafolio rápido, escalable y fácil de mantener, conectado a mis propios sitios mediante APIs.

---

## 🌐 Demo en Vivo

- 🔗 **Portafolio:** https://esquinaweb.com/jhon-mantilla/
- 🧩 **Proyectos & Artículos:** https://esquinaweb.com
- 🎮 **Gaming & Reviews:** https://esquinagamers.com

---

## 🛠️ Stack Tecnológico

- **Framework:** Vue.js 3 (Composition API)
- **Gestión de Datos:** Consumo de APIs REST (WordPress REST API)
- **Arquitectura:** Modular, basada en componentes y composables
- **Estilos:** CSS3, diseño responsive y enfoque mobile-first
- **Despliegue:** VPS propia

---

## ✨ Características Principales

- ⚡ SPA rápida y optimizada
- 🧩 Componentes reutilizables y desacoplados
- 🔌 Integración directa con WordPress como Headless CMS
- 🗂️ Filtrado dinámico de proyectos
- 📱 Diseño adaptable a cualquier dispositivo

---

## 📂 Estructura del Proyecto

Organización limpia y semántica, orientada a la escalabilidad y el mantenimiento:

```text
src/
├─ main.js             # Punto de entrada de la aplicación
├─ App.vue             # Componente raíz
│
├─ views/              # Vistas principales (Routing)
│  └─ HomeView.vue     # Orquestador de las secciones del portafolio
│
├─ components/         # Componentes organizados por dominio
│  ├─ layout/          # Estructura global (Header, Footer)
│  ├─ home/            # Secciones: Hero, About, Proyectos destacados
│  ├─ projects/        # Galería: Tabs, Grid y Cards
│  └─ ui/              # Componentes base (Botones, Badges, Títulos)
│
├─ composables/        # Lógica de negocio reutilizable
│  └─ useProjects.js   # Estado y filtrado de proyectos
│
├─ services/           # Comunicación con APIs externas
│  └─ wordpressApi.js  # Integración con sitios WordPress propios
│
└─ assets/             # Recursos estáticos (imágenes y estilos globales)
```

---

## 🚀 Instalación y Uso

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Jhon-mantila/tu-repositorio.git
cd tu-repositorio
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Ejecutar en entorno local

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (por defecto).

---

## 🔧 Configuración

Este proyecto consume datos desde WordPress usando la REST API. Puedes adaptar el endpoint en:

```text
src/services/wordpressApi.js
```

Ideal para usar WordPress como **Headless CMS**.

---

## 🧠 Próximas Mejoras

- 🔐 Autenticación para panel privado
- 🌙 Modo oscuro
- 🧪 Tests básicos de componentes
- 🎮 Sección dedicada a juegos desarrollados en Godot

---

## 🤝 Contribuciones

Las sugerencias y mejoras son bienvenidas. Siéntete libre de abrir un **issue** o enviar un **pull request**.

---

## 📫 Contacto

- 🌐 Web: https://esquinaweb.com
- 💼 GitHub: https://github.com/Jhon-mantila

---

⭐ Si este proyecto te resulta útil o interesante, ¡no olvides dejar una estrella al repositorio!