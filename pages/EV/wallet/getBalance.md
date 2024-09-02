# 1. Get Wallet Balance

## Description
The Get Wallet Balance API is used to retrieve the current balance of a user's wallet. The user must be authenticated using a bearer token to perform this operation.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/wallet/get`
- **Method:** `GET`
- **Authentication:** Bearer token required

### Request Headers

- **Authorization:** `Bearer {{TOKEN}}`

### Request Body

- **Body:** None required for this request.

### Response

The API will return the current balance of the user's wallet.

#### JSON Response:

| Parameter  | Type   | Description                                  |
|------------|--------|----------------------------------------------|
| status     | string | The status of the request. Example: `"success"` or `"error"` |
| balance    | string | The current balance in the wallet.           |
| message    | string | A message describing the result of the request (if any).     |

### Example Request

```bash
curl -X GET "{{BASE_URL}}/v1/wallet/get" \
-H "Authorization: Bearer {{TOKEN}}"
```

### Example Response

**Successful Balance Retrieval:**

```json
{
  "status": "success",
  "balance": "40.5"
}
```

**Error Response (e.g., Unauthorized Access):**

```json
{
  "status": "error",
  "message": "Unauthorized access. Please provide a valid token."
}
```

### Notes

- **Authentication:** Ensure that the `Authorization` header is included in the request to authenticate the user with the provided bearer token.

- **Replace Placeholders:**
  - Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).
  - Replace `{{TOKEN}}` with the actual bearer token to authorize the request.

- **Handling Responses:** Be prepared to handle both success and error responses, particularly in cases of invalid or expired tokens.
