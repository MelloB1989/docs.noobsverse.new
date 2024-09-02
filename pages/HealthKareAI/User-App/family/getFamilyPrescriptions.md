# Get Family Prescriptions

- **Endpoint:** `/family/prescriptions`
- **Method:** GET
- **Description:** Retrieves prescriptions for the family.
- **Authorization:** Requires authentication token.
- **Responses:**
  - **200 OK**
    ```json
    {
      "message": "success",
      "prescriptions": [
        // List of prescriptions
      ]
    }
    ```
  - **401 Unauthorized**
    ```json
    { "message": "Unauthorized" }
    ```
  - **500 Internal Server Error**
    ```json
    { "message": "Family prescriptions retrieval failed" }
    ```
- **Example:**
  ```bash
  curl -X GET http://<your-server-address>/family/prescriptions \
  -H "Authorization: Bearer <your-auth-token>"
  ```