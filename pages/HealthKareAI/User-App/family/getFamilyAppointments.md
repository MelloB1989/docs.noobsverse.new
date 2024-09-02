# Get Family Appointments

- **Endpoint:** `/family/appointments`
- **Method:** GET
- **Description:** Retrieves appointments for the family.
- **Authorization:** Requires authentication token.
- **Responses:**
  - **200 OK**
    ```json
    {
      "message": "success",
      "appointments": [
        // List of appointments
      ]
    }
    ```
  - **401 Unauthorized**
    ```json
    { "message": "Unauthorized" }
    ```
  - **500 Internal Server Error**
    ```json
    { "message": "Family appointments retrieval failed" }
    ```
- **Example:**
  ```bash
  curl -X GET http://<your-server-address>/family/appointments \
  -H "Authorization: Bearer <your-auth-token>"
  ```