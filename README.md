# node-mailgun-server

## Caso de estudio: Servidor de correos

Esta aplicación envía un correo electrónico a un destinatario configurado en las variables de entorno, es consumido por [Holy Paint landing](https://github.com/juanfix/react-holy-paint-landing).

## Stack

- NodeJS 18.16.0
- Express 4.18.2

## Solución

### POST

`host`/api/mail<br/>

Crea y envía un email al destinatario configurado.

**Parámetros: JSON**

| Nombre    | Requerido | Tipo   | Descripción                      |
| --------- | --------- | ------ | -------------------------------- |
| `email`   | Si        | string | Email de la persona              |
| `name`    | Si        | string | Nombre de la persona             |
| `phone`   | Si        | string | Número de teléfono de la persona |
| `message` | Si        | string | Mensaje del email                |

**Respuesta**

```
{
    "ok": true,
    "status": 201,
    "message": "Mail created and sent successfully!"
}
```

## Servidor de desarrollo

1. Clonar el repositorio.
2. Renombra el archivo .env.template a .env
3. Ingresa o modifica los datos correspondientes en el archivo .env
4. Ejecutar el comando `yarn` en la ruta del proyecto para instalar las dependencias.
5. Ejecutar el comando `yarn dev` para iniciar el servidor de desarrollo.
6. Navegar a la página `http://localhost:{PORT}/`. Donde debes reemplazar el {PORT} por la variable de entorno configurada en el paso 3
7. La aplicación cargará automáticamente cada que realice cambios en los archivos.
