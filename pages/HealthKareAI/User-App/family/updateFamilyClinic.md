# Update Family Clinic

Updates the clinic associated with the authenticated user's family. Requires user to be the family owner.

## Endpoint

`POST /family/updateFamilyClinic`

## Request Body

- **clinicID** (string): The unique identifier of the clinic to associate with the family.

## Authentication

This route requires user authentication. Ensure the request includes authentication credentials that the middleware can verify.

## Success Response

- **Status Code:** 200 OK
- **Body:** 
  ```json
  {
    "message": "Family clinic updated",
    "familyID": "updatedFamilyId"
  }
  ```

## Error Responses

- **Status Code:** 400 Bad Request
  - **Body:** `{ "message": "Missing required fields" }`
- **Status Code:** 401 Unauthorized
  - **Body:** `{ "message": "Unauthorized" }`
- **Status Code:** 403 Forbidden
  - **Body:** `{ "message": "User not authorized" }`
- **Status Code:** 500 Internal Server Error
  - **Body:** `{ "message": "Family clinic update failed" }`
```