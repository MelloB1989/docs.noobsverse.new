# Add family member

- **Endpoint:** `/family/addFamilyMember`
- **Method:** POST
- **Description:** Adds a new member to the family group.
- **Authorization:** Requires authentication token.
- **Request Body:**
  ```json
  {
    "username": "string",
    "phone": "string",
    "email": "string",
    "birthDate": "string",
    "gender": "string",
    "city": "string",
    "role": "string"
  }
  ```
- **Responses:**
  - **200 OK**
    ```json
    { "message": "Member added to family", "familyID": "string" }
    ```
  - **400 Bad Request**
    ```json
    { "message": "Missing required fields" }
    ```
  - **401 Unauthorized**
    ```json
    { "message": "Unauthorized" }
    ```
  - **403 Forbidden**
    ```json
    { "message": "User not authorized" }
    ```
  - **500 Internal Server Error**
    ```json
    { "message": "Member addition failed" }
    ```
- **Example:**
  ```bash
  curl -X POST http://<your-server-address>/family/addFamilyMember \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-auth-token>" \
  -d '{"username": "john_doe", "phone": "1234567890", "email": "john@example.com", "birthDate": "2000-01-01", "gender": "male", "city": "New York", "role": "user"}'
  ```