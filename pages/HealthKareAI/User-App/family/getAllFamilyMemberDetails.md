# Get All Family Member Details

Retrieves details for all family members associated with the authenticated user's family ID.

## Endpoint

`GET /family/getAllFamilyMemberDetails`

## Authentication

This route requires user authentication. Ensure the request includes authentication credentials that the middleware can verify.

## Success Response

- **Status Code:** 200 OK
- **Body:** 
  ```json
  {
    "message": "Family members details",
    "familyMemberDetails": []
  }
  ```

## Error Response

- **Status Code:** 401 Unauthorized
  - **Body:** `{ "message": "Unauthorized" }`

Note: Individual errors while retrieving family member details are logged but do not halt the process; they do not directly result in an error response.
```