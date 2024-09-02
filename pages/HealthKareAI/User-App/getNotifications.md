# Get User Notifications

Retrieves all notifications for the authenticated user based on their phone number.

## Endpoint

`GET /user/notifications`

## Authentication

This route requires user authentication. Ensure the request includes authentication credentials that the middleware can verify.

## Success Response

- **Status Code:** 200 OK
- **Body:** 
  ```json
  {
    "message": "Notifications",
    "notifications": []
  }
  ```

## Error Responses

- **Status Code:** 401 Unauthorized
  - **Body:** `{ "message": "Unauthorized" }`
- **Status Code:** 500 Internal Server Error
  - **Body:** `{ "message": "Notifications retrieval failed" }`
```