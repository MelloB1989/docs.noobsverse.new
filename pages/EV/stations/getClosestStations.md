# 4. Get Closest Station

## Description
The Get Closest Station API is used to retrieve a list of the closest stations based on the provided latitude and longitude coordinates. The response will include details of the nearest stations within the specified limit.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/stations/get_nearby`
- **Method:** `GET`
- **Authentication:** None required

### Request Headers

- **X-Karma-Admin-Auth:** `ajbkbakweiuy387yeuqqwfahdjhsabd`

### Query Parameters

| Parameter | Type  | Description                                                 | Required |
|-----------|-------|-------------------------------------------------------------|----------|
| lat       | float | The latitude of the location to search near. Example: `40`  | Yes      |
| lon       | float | The longitude of the location to search near. Example: `-70`| Yes      |
| limit     | int   | The maximum number of stations to return. Example: `2`      | No       |

### Request Body

- **Body:** None required for this request.

### Response

The API will return a list of the closest stations based on the provided coordinates and within the specified limit.

#### JSON Response:

| Parameter          | Type   | Description                                           |
|--------------------|--------|-------------------------------------------------------|
| id                 | string | The unique identifier of the station.                 |
| name               | string | The name of the station.                              |
| location_latitude  | string | The latitude of the station's location.               |
| location_longitude | string | The longitude of the station's location.              |
| capacity           | int    | The total capacity of the station.                    |
| current_capacity   | int    | The current number of occupants at the station.       |
| distance           | float  | The distance from the provided coordinates to the station. |

### Example Request

```bash
curl -X GET "{{BASE_URL}}/v1/stations/get_nearby?lat=40&lon=-70&limit=2" \
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
      "current_capacity": 75,
      "distance": 4.5
    },
    {
      "id": "station-2-id",
      "name": "Downtown Station",
      "location_latitude": "34.052235",
      "location_longitude": "-118.243683",
      "capacity": 150,
      "current_capacity": 90,
      "distance": 5.8
    }
  ]
}
```

### Notes

- Ensure that the `X-Karma-Admin-Auth` header is included in the request to authorize the admin.
- Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).
- The `limit` parameter is optional; if not provided, the API may return all nearby stations or use a default limit.