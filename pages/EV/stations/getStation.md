# 3. Get Station

## Description
The Get Station API is used to retrieve details of a specific station identified by its unique ID. The response will include detailed information about the station, such as its name, location, capacity, and current capacity.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/stations/get/{station_id}`
- **Method:** `GET`
- **Authentication:** None required

### Request Headers

- **X-Karma-Admin-Auth:** `ajbkbakweiuy387yeuqqwfahdjhsabd`

### URL Parameters

- **station_id** (string): The unique identifier of the station. In the example provided, `wxyoqxff83` is the station ID.

### Request Body

- **Body:** None required for this request.

### Response

The API will return detailed information about the specified station.

#### JSON Response:

| Parameter          | Type   | Description                                           |
|--------------------|--------|-------------------------------------------------------|
| id                 | string | The unique identifier of the station.                 |
| name               | string | The name of the station.                              |
| location_latitude  | string | The latitude of the station's location.               |
| location_longitude | string | The longitude of the station's location.              |
| capacity           | int    | The total capacity of the station.                    |
| current_capacity   | int    | The current number of occupants at the station.       |

### Example Request

```bash
curl -X GET "{{BASE_URL}}/v1/stations/get/wxyoqxff83" \
-H "X-Karma-Admin-Auth: ajbkbakweiuy387yeuqqwfahdjhsabd"
```

### Example Response

```json
{
  "status": "success",
  "data": {
    "id": "wxyoqxff83",
    "name": "Central Station",
    "location_latitude": "40.712776",
    "location_longitude": "-74.005974",
    "capacity": 100,
    "current_capacity": 75
  }
}
```

### Notes

- Ensure that the `X-Karma-Admin-Auth` header is included in the request to authorize the admin.
- Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).
- Replace `{station_id}` in the URL with the actual ID of the station you want to retrieve. In the example provided, the station ID is `wxyoqxff83`.