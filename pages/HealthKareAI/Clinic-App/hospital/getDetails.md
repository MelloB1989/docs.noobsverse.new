# Get Hospital Details API Endpoint

## POST /details

This endpoint retrieves details for a specific hospital, identified by the owner's phone number.

### Request Body

| Field      | Type   | Description                            |
|------------|--------|----------------------------------------|
| ownerPhone | String | The contact number of the hospital owner |

### Responses

#### 200 OK

Successfully retrieved hospital details.

**Response Body:**

```json
{
  "data": "Hospital details data"
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