# Doctor Login API Endpoint

## POST /login

This endpoint initiates the login process for a doctor by sending an OTP to their phone.

### Request Body

| Field  | Type   | Description                |
|--------|--------|----------------------------|
| phone  | String | Doctor's phone number      |

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

Required fields are missing in the request body.

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