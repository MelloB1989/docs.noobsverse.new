# Error Codes and Security

- **401 Unauthorized:** Authentication failed due to incorrect credentials or OTP.
- **400 Bad Request:** Request failed due to incorrect or missing parameters.

### Security

All routes are protected with JWT authentication. Ensure the `JWT_KEY` is securely stored and not exposed.
