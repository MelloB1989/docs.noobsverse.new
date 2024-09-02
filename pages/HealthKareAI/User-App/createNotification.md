# Create Notification

Allows authenticated users to create a notification. The user must be authenticated and authorized to create notifications for their account.

## Endpoint

`POST /user/createNotification`

## Authentication

This route requires user authentication. Ensure the request includes authentication credentials that the middleware can verify.

## Request Body

- **phone** (string): The phone number associated with the user's account. Must match the authenticated user's phone number.
- **sender** (string): The sender's identifier.
- **receiver** (string): The receiver's identifier.
- **content** (string): The content of the notification.

## Success Response

- **Status Code:** 200 OK
- **Body:** 
  ```json
  {
    "message": "Notification created",
    "notification": {}
  }
  ```

## Error Responses

- **Status Code:** 401 Unauthorized
  - **Body:** `{ "message": "Unauthorized" }`
- **Status Code:** 403 Forbidden
  - **Body:** `{ "message": "User not authorized" }`
- **Status Code:** 500 Internal Server Error
  - **Body:** `{ "message": "Notification creation failed" }`
```