# Get family members

- **Endpoint:** `/family/familyMembers`
- **Method:** GET
- **Description:** Retrieves the list of family members.
- **Authorization:** Requires authentication token.
- **Responses:**
  - **200 OK**
    ```json
    {
      "message": "Family members",
      "familyMembers": [
        // List of family members
      ]
    }
    ```
  - **401 Unauthorized**
    ```json
    { "message": "Unauthorized" }
    ```
  - **500 Internal Server Error**
    ```json
    { "message": "Family members retrieval failed" }
    ```
- **Example:**
  ```bash
  curl -X GET http://<your-server-address>/family/familyMembers \
  -H "Authorization: Bearer <your-auth-token>"
  ```