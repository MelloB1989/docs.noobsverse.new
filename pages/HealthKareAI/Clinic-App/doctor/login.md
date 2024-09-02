# Register Doctor API Endpoint

## POST /register

This endpoint allows for the registration of a new doctor.

### Payload

- **File Upload**: A file (not required in the current implementation but intended for future use, e.g., license documentation).

### Request Body

| Field           | Type   | Description                       |
|-----------------|--------|-----------------------------------|
| name            | String | Doctor's full name                |
| role            | String | Doctor's role                     |
| email           | String | Doctor's email address            |
| phone           | String | Doctor's phone number             |
| clinicLocation  | String | Location of the doctor's clinic   |
| specialization  | String | Doctor's field of specialization  |
| experience      | Number | Years of experience               |
| password        | String | Account password                  |

### Responses

#### 200 OK

Doctor successfully registered.

**Response Body:**

```json
{
  "data": "Doctor registration data"
}
```

#### 400 Bad Request

No file uploaded.

**Response Body:**

```json
{
  "error": "No file uploaded"
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