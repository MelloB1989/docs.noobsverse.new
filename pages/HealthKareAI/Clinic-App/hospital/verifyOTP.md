# Verify Hospital OTP API Endpoint

## POST /otpVerify

This endpoint verifies the OTP sent to the hospital owner during the login process.

### Request Body

| Field      | Type   | Description                   |
|------------|--------|-------------------------------|
| ownerPhone | String | The contact number of the hospital owner |
| otp        | String | OTP sent to the hospital owner's phone|

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