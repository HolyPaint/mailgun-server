# node-mailgun-server

This application sends an email to a recipient configured in the environment variables.

## Stack

- NodeJS 18.16.0
- Express 4.18.2

## Solución

### POST

`host`/api/mail<br/>

It creates and sends an email

**Parameters: JSON**

| Name      | Required | Type   | Description   |
| --------- | -------- | ------ | ------------- |
| `email`   | Yes      | string | Email         |
| `name`    | Yes      | string | Name          |
| `phone`   | Yes      | string | Phone         |
| `message` | Yes      | string | Email message |

**Response**

```
{
    "ok": true,
    "status": 201,
    "message": "Mail created and sent successfully!"
}
```

## Development server

1. Clone the repository.
2. Rename the .env.template file to .env.
3. Update the parameters of .env file.
4. Run `yarn` to install the dependencies.
5. Run `yarn dev` to init a dev server.
6. Navigate to `http://localhost:{PORT}/`. You must replace the variable {PORT} to the variable defined in the step 3.
7. The appication will automatically reload if you change any of the source files.
