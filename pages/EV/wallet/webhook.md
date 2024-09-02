# 3. Wallet Webhook

## Description
The Wallet Webhook API is used to trigger specific actions related to a user's wallet. This API uses query parameters to pass necessary data such as the user ID, balance to be added or deducted, and a secure webhook key. The user must be authenticated using a bearer token to perform this operation.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/wallet/webhook`
- **Method:** `GET`
- **Authentication:** Bearer token required

### Query Parameters

| Parameter     | Type   | Description                                                                                      | Required |
|---------------|--------|--------------------------------------------------------------------------------------------------|----------|
| uid           | string | The unique identifier of the user. Example: `"0_6ihacjrr"`                                       | Yes      |
| balance       | string | The balance to be added or deducted. Example: `"10"`                                             | Yes      |
| webhook_key   | string | A secure key used to authenticate the webhook request. Example: `"coffeecodesEVBackendKarmafdmfbmd3brh4rfembvfadsadmbdbbvda"` | Yes      |

### Request Headers

- **Authorization:** `Bearer {{TOKEN}}`

### Request Body

- **Body:** None required for this request.

### Response

The API will return a response indicating the success or failure of the webhook operation.

#### JSON Response:

| Parameter | Type   | Description                                                  |
|-----------|--------|--------------------------------------------------------------|
| status    | string | The status of the request. Example: `"success"` or `"error"` |
| message   | string | A message describing the result of the request.              |

### Example Request

```bash
curl -X GET "{{BASE_URL}}/v1/wallet/webhook?uid=0_6ihacjrr&balance=10&webhook_key=coffeecodesEVBackendKarmafdmfbmd3brh4rfembvfadsadmbdbbvda" \
-H "Authorization: Bearer {{TOKEN}}"
```

### Example Response

**Successful Webhook Trigger:**

```json
{
  "status": "success",
  "message": "Webhook executed successfully."
}
```

**Error Response (e.g., Invalid Webhook Key):**

```json
{
  "status": "error",
  "message": "Invalid webhook key."
}
```

### Notes

- **Authentication:** Ensure that the `Authorization` header is included in the request to authenticate the user with the provided bearer token.

- **Query Parameters:**
  - The `uid` parameter is used to identify the user for whom the action is being performed.
  - The `balance` parameter specifies the amount to be added or deducted from the user's wallet.
  - The `webhook_key` is a secure key that must be validated by the server to authorize the webhook action.

- **Replace Placeholders:**
  - Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).
  - Replace `{{TOKEN}}` with the actual bearer token to authorize the request.

- **Handling Responses:** Ensure that the correct webhook key is used to avoid unauthorized access or actions.
