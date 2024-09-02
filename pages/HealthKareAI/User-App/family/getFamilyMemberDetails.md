# Get Family Member Details

Retrieves details of a specific family member by their phone number. Requires user authentication.

## Endpoint

`GET /family/getFamilyMemberDetails/:phone`

## URL Parameters

- **phone** (string): The phone number of the family member whose details are to be retrieved.

## Authentication

This route requires user authentication. Ensure the request includes authentication credentials that the middleware can verify.

## Success Response

- **Status Code:** 200 OK
- **Body:**
  ```json
  {
    "message": "User details",
    "userDetails": {}
  }
  ```

## Error Responses

- **Status Code:** 401 Unauthorized
  - **Body:** `{ "message": "Unauthorized" }`
- **Status Code:** 403 Forbidden
  - **Body:** `{ "message": "User not authorized" }`
- **Status Code:** 500 Internal Server Error
  - **Body:** `{ "message": "User details retrieval failed" }`
```