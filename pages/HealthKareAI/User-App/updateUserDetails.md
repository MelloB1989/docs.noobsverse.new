# Update User

- **Endpoint:** `/user/updateDetails`
- **Method:** POST
- **Description:** Updates details of the authenticated user.
- **Authorization:** Requires authentication token.
- **Request Body:**
  ```json
  {
    // Updated user details object
  }
  ```
- **Responses:**
  - **200 OK**
    ```json
    {
      "message": "User details updated",
      "userDetails": {
        username
        email
        phone
        role
        password
        birthDate
        gender
        city
        isFamilyOwner
        familyID
      }
    }
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
    { "message": "User details update failed" }
    ```
- **Example:**
  ```bash
  curl -X POST http://<your-server-address>/user/updateDetails \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-auth-token>" \
  -d '{"phone": "<user-phone>", "otherField": "newValue"}'
  ```