# 9. Get Fastest Bike

## Description
The Get Fastest Bike API is used to retrieve the details of the fastest bike available in the system. The response will include information such as the bike's frame number, name, station, top speed, range, and estimated time to reach the station.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/bikes/get/speed/fastest`
- **Method:** `GET`
- **Authentication:** Bearer token required

### Request Headers

- **Authorization:** `Bearer {{TOKEN}}`

### Request Body

- **Body:** None required for this request.

### Response

The API will return the details of the fastest bike in the system, with detailed information.

#### JSON Response:

| Parameter          | Type   | Description                                                |
|--------------------|--------|------------------------------------------------------------|
| id                 | string | The unique identifier of the bike.                         |
| frame_number       | string | The unique frame number of the bike.                       |
| name               | string | The name or model of the bike.                             |
| station_id         | string | The ID of the station where the bike is located.           |
| top_speed          | int    | The top speed of the bike in km/h.                         |
| range              | int    | The range of the bike in kilometers.                       |
| time_to_station    | int    | The estimated time in minutes to reach the station.        |

### Example Request

```bash
curl -X GET "{{BASE_URL}}/v1/bikes/get/speed/fastest" \
-H "Authorization: Bearer {{TOKEN}}"
```

### Example Response

```json
{
  "status": "success",
  "data": {
    "id": "bike-3-id",
    "frame_number": "FR111213141",
    "name": "Lightning Z3",
    "station_id": "3xr7t1d4p_9",
    "top_speed": 60,
    "range": 130,
    "time_to_station": 6
  }
}
```

### Notes

- Ensure that the `Authorization` header is included in the request to authenticate the user with the provided bearer token.
- Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).
- Replace `{{TOKEN}}` with the actual bearer token to authorize the request.
- This endpoint returns the bike with the highest top speed in the system.