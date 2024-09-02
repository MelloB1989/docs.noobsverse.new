# Register API

- **Endpoint:** `/auth/register`
- **Method:** POST
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "username": "string",
    "phone": "string",
    "email": "string",
    "birthDate": "string",
    "password": "string",
    "gender": "string",
    "city": "string",
    "role": "string"
  }
  ```
- **Responses:**
  - **200 OK**
    ```json
    { "message": "OTP sent" }
    ```
  - **400 Bad Request**
    ```json
    { "message": "Missing required fields" }
    ```
  - **500 Internal Server Error**
    ```json
    { "message": "User creation failed" }
    ```
- **Example:**
  ```bash                     
  curl -X POST https://<your-server-address>/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "john_doe", "phone": "1234567890", "email": "john@example.com", "birthDate": "2000-01-01", "password": "password123", "gender": "male", "city": "New York", "role": "user"}'
  ```