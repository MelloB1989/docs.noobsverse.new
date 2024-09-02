# Get User Details

- **Endpoint:** `/user/details`
- **Method:** GET
- **Description:** Retrieves details of the authenticated user.
- **Authorization:** Requires authentication token.
- **Responses:**
  - **200 OK**
    ```json
    {
      "message": "User details",
      "userDetails": {
        // User details object
      }
    }
    ```
  - **401 Unauthorized**
    ```json
    { "message": "Unauthorized" }
    ```
  - **500 Internal Server Error**
    ```json
    { "message": "User details retrieval failed" }
    ```
- **Example:**
  ```bash
  curl -X GET http://<your-server-address>/user/details \
  -H "Authorization: Bearer <your-auth-token>"
  ```