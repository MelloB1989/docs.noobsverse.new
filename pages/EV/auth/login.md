# 1. Login

## Description
The Login API is used to authenticate users by verifying their phone number. Upon successful authentication, the API will return a session token.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/auth/login`
- **Method:** `POST`
- **Authentication:** None required

### Request Headers

- **X-Karma-Admin-Auth:** `ajbkbakweiuy387yeuqqwfahdjhsabd`

### Request Body

The body of the request should be sent in JSON format.

#### JSON Parameters:

| Parameter | Type   | Description                | Required |
|-----------|--------|----------------------------|----------|
| phone     | string | The user's phone number. Example: `"+917569236628"` | Yes      |

Example JSON body:

```json
{
  "phone": "+917569236628"
}
```

### Response

The API will return a response based on the success or failure of the login attempt. The response format and content will depend on the specific implementation.

### Example Request

```bash
curl -X POST "{{BASE_URL}}/v1/auth/login" \
-H "Content-Type: application/json" \
-H "X-Karma-Admin-Auth: ajbkbakweiuy387yeuqqwfahdjhsabd" \
-d '{
  "phone": "+917569236628"
}'
```

### Example Response

```json
{
  "status": "success",
  "token": "your-session-token-here"
}
```

### Notes

- Ensure the `X-Karma-Admin-Auth` header is included in the request to authorize the admin.
- Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:9080`).