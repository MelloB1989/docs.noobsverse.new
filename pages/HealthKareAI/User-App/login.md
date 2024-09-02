# Login API

- **Endpoint:** `/auth/login`
- **Method:** POST
- **Description:** Authenticates a user and sends an OTP to the user's phone.
- **Request Body:**
  ```json
  {
    "phone": "string",
    "backend_secret": "string"
  }
  ```
- **Responses:**
  - **200 OK**
    ```json
    { "message": "OTP sent" }
    ```
  - **401 Unauthorized**
    ```json
    { "message": "Unauthorized" }
    ```
- **Example:**
  ```bash
  curl -X POST http://<your-server-address>/auth/login \
  -H "Content-Type: application/json" \
  -d '{"phone": "1234567890", "backend_secret": "your_backend_secret"}'
  ```