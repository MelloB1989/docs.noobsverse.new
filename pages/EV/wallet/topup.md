# 2. Top-up Wallet

### Description
The Top-up Wallet API is used to add funds to a user's wallet. The user must be authenticated using a bearer token to perform this operation.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/wallet/topup`
- **Method:** `POST`
- **Authentication:** Bearer token required

### Request Headers

- **Authorization:** `Bearer {{TOKEN}}`

### Request Body

The body of the request should be sent in JSON format and must include the following field:

#### JSON Parameters:

| Parameter | Type   | Description                          | Required |
|-----------|--------|--------------------------------------|----------|
| balance   | string | The amount to top up the wallet with. Example: `"10.3"` | Yes      |

Example JSON body:

```json
{
  "balance": "10.3"
}
```

### Response

The API will return a response indicating the success or failure of the wallet top-up process. The response format and content will depend on the specific implementation.

#### JSON Response:

| Parameter | Type   | Description                                        |
|-----------|--------|----------------------------------------------------|
| status    | string | The status of the request. Example: `"success"` or `"error"` |
| message   | string | A message describing the result of the request.     |
| new_balance | string | (Optional) The updated balance after the top-up. |

### Example Request

```bash
curl -X POST "{{BASE_URL}}/v1/wallet/topup" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {{TOKEN}}" \
-d '{
  "balance": "10.3"
}'
```

### Example Response

**Successful Top-up:**

```json
{
  "status": "success",
  "message": "Wallet top-up successful.",
  "new_balance": "50.3"
}
```

**Error Response (e.g., Invalid Balance):**

```json
{
  "status": "error",
  "message": "Invalid balance amount."
}
```

### Notes

- **Authentication:** Ensure that the `Authorization` header is included in the request to authenticate the user with the provided bearer token.

- **Content-Type Header:** The `Content-Type` header must be set to `application/json` to indicate that the request body is in JSON format.

- **Replace Placeholders:**
  - Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).
  - Replace `{{TOKEN}}` with the actual bearer token to authorize the request.

- **Balance Validation:** The balance value should be a valid string representing a decimal number. Ensure that the amount is positive and formatted correctly to avoid errors.
