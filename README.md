# DevBox - Developer Tools

Una aplicación web moderna para desarrolladores con herramientas esenciales.

## Características

- **JSON Formatter**: Valida, formatea y colorea JSON con resaltado tipo VSCode
- **JWT Decoder**: Decodifica y analiza JSON Web Tokens
- **Base64 Tool**: Codifica y decodifica texto en Base64
- **API Tester**: Mini Postman para probar APIs con múltiples métodos HTTP

## Tecnologías

### Frontend
- React 18
- CSS Puro (Glassmorphism, Dark Mode)
- Framer Motion (animaciones)
- React Router DOM

### Backend
- Node.js
- Express
- Axios
- JSONWebToken

## Instalación y Ejecución

### Backend

```bash
cd backend
npm install
npm start
```

El servidor correrá en `http://localhost:3001`

### Frontend

```bash
cd frontend
npm install
npm start
```

La aplicación correrá en `http://localhost:3000`

## Estructura del Proyecto

```
DevBox/
├── backend/
│   ├── routes/
│   │   ├── json.js         # API JSON Formatter
│   │   ├── jwt.js          # API JWT Decoder
│   │   ├── base64.js       # API Base64
│   │   └── apiTester.js   # API Tester
│   ├── server.js           # Servidor Express
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Sidebar/    # Navegación lateral
    │   │   └── common/     # Componentes reutilizables
    │   │       ├── Button/
    │   │       ├── Card/
    │   │       ├── Toast/
    │   │       └── Loading/
    │   ├── pages/
    │   │   ├── Home/
    │   │   ├── JsonFormatter/
    │   │   ├── JwtDecoder/
    │   │   ├── Base64Tool/
    │   │   └── ApiTester/
    │   ├── styles/
    │   │   └── globals/    # Estilos globales y variables CSS
    │   ├── App.js
    │   └── index.js
    └── package.json
```

## Diseño

- **Dark Mode** profesional inspirado en VSCode
- **Glassmorphism** con efectos de blur
- **Animaciones** suaves con Framer Motion
- **Responsive** para móviles
- **Tipografía** moderna (Inter, JetBrains Mono)

## Uso

1. Inicia el backend en una terminal
2. Inicia el frontend en otra terminal
3. Abre `http://localhost:3000` en tu navegador
4. ¡Disfruta de las herramientas!

## Características Adicionales

- Validación en tiempo real
- Copiado al portapapeles
- Notificaciones Toast
- Loading animations
- Código limpio y comentado
