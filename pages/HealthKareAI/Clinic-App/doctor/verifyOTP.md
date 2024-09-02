# Verify Doctor OTP API Endpoint

## POST /otpVerify

This endpoint verifies the OTP sent to the doctor during the login process.

### Request Body

| Field | Type   | Description                   |
|-------|--------|-------------------------------|
| phone | String | Doctor's phone number         |
| otp   | String | OTP sent to the doctor's phone|

### Responses

#### JSON Response

OTP successfully verified and user authenticated.

**Response Body:**

```json
{
  "message": "OTP verified",
  "token": "Authentication token"
}
```

#### 401 Unauthorized

OTP verification failed or OTP is incorrect.

**Response Body:**

```json
{
  "message": "Unauthorized"
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