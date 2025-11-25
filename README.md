# Login y Registro de usuarios (API)

Esta API permite iniciar sesión y registrarse a usuarios, persiste la información en una base de datos mysql y cuenta con algunas características de seguridad y privacidad como la encripción de la contraseña y sesión basada en token JWT.

## 🚀 Features

- Encripción de la contraseña.
- Persistencia de los datos en base de datos MySQL.
- Registro de usuarios nuevos y control de registros duplicados (por email).
- Inicio de sesión seguro a través de JWT.
- Realice login con email y contraseña al endpoint /auth/login.
- Realice registro enviando los datos requeridos al endpoint /auth/register.

## 📦 Installation

1. Clonar el repositorio:

```bash
git clone https://github.com/jucgonza/PIV-LoginRegisterBackend.git
cd PIV-LoginRegisterBackend
```

2. Instalar dependencias

```bash
npm install
```

3. Crear archivo .env

```
PORT = value

DB_HOST = value
DB_PORT = value
DB_NAME = value
DB_USER = value
DB_PASSWORD = value

JWT_SECRET = value
JWT_EXPIRES_IN = 12h
```

4. Ejecutar la app

Para iniciar el servidor de desarrollo, ejecute:

```bash
npm run dev
```

## 🛠️ Construido con

- [Node](https://nodejs.org)
- [Express.js](https://expressjs.com)
- [Nodemon](https://nodemon.io)
- [MySQL](https://www.mysql.com)

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT