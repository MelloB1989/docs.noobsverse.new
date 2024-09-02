# Get Appointment API Endpoint

## POST /appointments/get

This endpoint retrieves appointment records for a given family.

### Authorization

This endpoint requires user authentication. Ensure the request includes the necessary authentication headers to verify the user.

### Request Body

| Field    | Type   | Description                          |
|----------|--------|--------------------------------------|
| familyID | String | The unique identifier for the family |

### Responses

#### 200 OK

Successfully retrieved the appointment data.

**Response Body:**

```json
{
  "data": "Appointment data"
}
```

#### 401 Unauthorized

The request lacks valid authentication credentials.

**Response Body:**

```json
{
  "error": "Unauthorized"
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