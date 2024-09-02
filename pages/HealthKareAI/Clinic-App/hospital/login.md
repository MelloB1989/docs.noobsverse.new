# Hospital Login API Endpoint

## POST /login

This endpoint initiates the login process for hospital accounts by sending an OTP to the owner's phone.

### Request Body

| Field      | Type   | Description                        |
|------------|--------|------------------------------------|
| ownerPhone | String | The contact number of the hospital owner |

### Responses

#### JSON Response

OTP sent to the provided phone number.

**Response Body:**

```json
{
  "message": "OTP sent"
}
```

#### 405 Method Not Allowed

Owner phone number is missing in the request body.

**Response Body:**

```json
{
  "error": "Fields missing!"
}
```

#### 500 Internal Server Error

An unexpected error occurred.

**Response Body:**

```json
{
  "error": "Error message"
}
```