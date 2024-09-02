# 2. Get All Stations

## Description
The Get Stations API is used to retrieve a list of all stations available in the system. Each station's details, such as name, location, capacity, and current capacity, will be included in the response.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/stations/get`
- **Method:** `GET`
- **Authentication:** None required

### Request Headers

- **X-Karma-Admin-Auth:** `ajbkbakweiuy387yeuqqwfahdjhsabd`

### Request Body

- **Body:** None required for this request.

### Response

The API will return a list of stations, each with detailed information.

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
curl -X GET "{{BASE_URL}}/v1/stations/get" \
-H "X-Karma-Admin-Auth: ajbkbakweiuy387yeuqqwfahdjhsabd"
```

### Example Response

```json
{
  "status": "success",
  "data": [
    {
      "id": "station-1-id",
      "name": "Central Station",
      "location_latitude": "40.712776",
      "location_longitude": "-74.005974",
      "capacity": 100,
      "current_capacity": 75
    },
    {
      "id": "station-2-id",
      "name": "Downtown Station",
      "location_latitude": "34.052235",
      "location_longitude": "-118.243683",
      "capacity": 150,
      "current_capacity": 90
    },
    {
      "id": "station-3-id",
      "name": "Uptown Station",
      "location_latitude": "51.507351",
      "location_longitude": "-0.127758",
      "capacity": 200,
      "current_capacity": 120
    },
    {
      "id": "station-4-id",
      "name": "Westside Station",
      "location_latitude": "35.689487",
      "location_longitude": "139.691711",
      "capacity": 180,
      "current_capacity": 160
    },
    {
      "id": "station-5-id",
      "name": "Eastside Station",
      "location_latitude": "48.856613",
      "location_longitude": "2.352222",
      "capacity": 250,
      "current_capacity": 200
    }
  ]
}
```

### Notes

- Ensure that the `X-Karma-Admin-Auth` header is included in the request to authorize the admin.
- Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).