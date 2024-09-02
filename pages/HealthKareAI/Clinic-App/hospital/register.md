# Register Hospital API Endpoint

## POST /register

This endpoint facilitates the registration of a new hospital.

### Request Body

The request body must include the following fields:

| Field         | Type   | Description                       |
|---------------|--------|-----------------------------------|
| hospitalPhone | String | The primary contact number for the hospital |
| hospitalEmail | String | The primary email address for the hospital |
| legalName     | String | The legal name of the hospital |
| location      | String | The physical location of the hospital |
| ownerEmail    | String | The email address of the hospital owner |
| ownerName     | String | The name of the hospital owner |
| ownerPhone    | String | The contact number of the hospital owner |
| startDate     | Date   | The date the hospital started operations |
| password      | String | A password for securing the hospital's account |

### Responses

#### 200 OK

Hospital successfully registered.

**Response Body:**

```json
{
  "data": "Hospital registration data"
}
```

#### 405 Method Not Allowed

One or more required fields are missing in the request body.

**Response Body:**

```json
{
  "error": "Fields missing!"
}
```

#### 500 Internal Server Error

An unexpected error occurred during the process.

**Response Body:**

```json
{
  "error": "Error message"
}
```