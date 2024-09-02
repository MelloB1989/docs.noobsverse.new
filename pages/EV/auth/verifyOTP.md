# 2. Verify OTP

## Description
The Verify OTP API is used to verify the One-Time Password (OTP) sent to the user's phone number during the signup or login process. Successful verification allows the user to proceed with authentication or registration.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/auth/verify_otp`
- **Method:** `POST`
- **Authentication:** None required

### Request Headers

No specific headers are required for this request.

### Request Body

The body of the request should be sent in JSON format.

#### JSON Parameters:

| Parameter | Type   | Description                               | Required |
|-----------|--------|-------------------------------------------|----------|
| phone     | string | The user's phone number. Example: `"+917569236628"` | Yes      |
| otp       | string | The OTP (One-Time Password) received by the user. Example: `"815897"` | Yes      |

Example JSON body:

```json
{
  "phone": "+917569236628",
  "otp": "815897"
}
```

### Response

The API will return a response based on the success or failure of the OTP verification attempt. The response format and content will depend on the specific implementation.

### Example Request

```bash
curl -X POST "{{BASE_URL}}/v1/auth/verify_otp" \
-H "Content-Type: application/json" \
-d '{
  "phone": "+917569236628",
  "otp": "815897"
}'
```

### Example Response

```json
{
  "status": "success",
  "message": "OTP verified successfully."
}
```

### Notes

- Ensure that the phone number and OTP provided are correct.
- Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:9080`).
