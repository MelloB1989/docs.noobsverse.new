# 3. Get Bike by Frame Number

## Description
The Get Bike by Frame Number API is used to retrieve details of a specific bike identified by its unique frame number. The response will include information such as the bike's name, associated station, top speed, range, and estimated time to reach the station.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/bikes/get/frame/FR123456789`
- **Method:** `GET`
- **Authentication:** Bearer token required

### Request Headers

- **Authorization:** `Bearer {{TOKEN}}`

### URL Parameters

- **frame_number** (string): The unique frame number of the bike. In the example provided, `FR123456789` is the frame number.

### Request Body

- **Body:** None required for this request.

### Response

The API will return detailed information about the bike with the specified frame number.

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
curl -X GET "{{BASE_URL}}/v1/bikes/get/frame/FR123456789" \
-H "Authorization: Bearer {{TOKEN}}"
```

### Example Response

```json
{
  "status": "success",
  "data": {
    "id": "bike-1-id",
    "frame_number": "FR123456789",
    "name": "Speedster X1",
    "station_id": "1ub1d98p_5",
    "top_speed": 45,
    "range": 100,
    "time_to_station": 5
  }
}
```

### Notes

- Ensure that the `Authorization` header is included in the request to authenticate the user with the provided bearer token.
- Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).
- Replace `{{TOKEN}}` with the actual bearer token to authorize the request.