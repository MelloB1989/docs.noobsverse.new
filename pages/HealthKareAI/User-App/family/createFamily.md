# Create Family

- **Endpoint:** `/family/createFamily`
- **Method:** POST
- **Description:** Creates a new family group for the authenticated user.
- **Authorization:** Requires authentication token.
- **Responses:**
  - **200 OK**
    ```json
    {
      "message": "Family created",
      "familyID": "string",
      "token": "string"
    }
    ```
  - **400 Bad Request**
    ```json
    { "message": "User already in a family" }
    ```
  - **500 Internal Server Error**
    ```json
    { "message": "Family creation failed" }
    ```
- **Example:**
  ```bash
  curl -X POST http://<your-server-address>/family/createFamily \
  -H "Authorization: Bearer <your-auth-token>"
  ```