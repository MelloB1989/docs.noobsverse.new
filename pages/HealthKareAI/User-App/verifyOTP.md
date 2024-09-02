# OTP Verification API

- **Endpoint:** `/auth/verifyOTP`
- **Method:** POST
- **Description:** Verify OTP for user authentication.
- **Request Body:**
  ```json
  {
    "phone": "string",
    "otp": "string",
    "backend_secret": "string"
  }
  ```
- **Responses:**
  - **200 OK**
    ```json
    {
      "message": "OTP verified",
      "token": "string"
    }
    ```
  - **401 Unauthorized**
    ```json
    { "message": "Unauthorized" }
    ```
- **Example:**
  ```bash
  curl -X POST http://<your-server-address>/auth/verifyOTP \
  -H "Content-Type: application/json" \
  -d '{"phone": "1234567890", "otp": "123456", "backend_secret": "your_backend_secret"}'
  ```