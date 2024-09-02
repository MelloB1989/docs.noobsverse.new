# Update Family Member Details

- **Endpoint:** `/family/updateFamilyMemberDetails`
- **Method:** POST
- **Description:** Updates details of a family member.
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
        // Updated user details object
      }
    }
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
    { "message": "User details update failed" }
    ```
- **Example:**
  ```bash
  curl -X POST http://<your-server-address>/family/updateFamilyMemberDetails \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-auth-token>" \
  -d '{"phone": "<user-phone>", "otherField": "newValue"}'
  ```