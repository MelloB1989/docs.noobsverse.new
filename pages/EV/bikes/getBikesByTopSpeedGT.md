# 6. Get Bikes by Top Speed Greater Than

## Description
The Get Bikes by Top Speed Greater Than API is used to retrieve a list of all bikes with a top speed greater than a specified value. Each bike's details, such as frame number, name, station, top speed, range, and estimated time to reach the station, will be included in the response.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/bikes/get/speed_gt/50`
- **Method:** `GET`
- **Authentication:** Bearer token required

### Request Headers

- **Authorization:** `Bearer {{TOKEN}}`

### URL Parameters

- **speed_gt** (int): The speed threshold in km/h. In the example provided, `50` is the threshold, meaning the API will return all bikes with a top speed greater than 50 km/h.

### Request Body

- **Body:** None required for this request.

### Response

The API will return a list of all bikes with a top speed greater than the specified threshold, each with detailed information.

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
curl -X GET "{{BASE_URL}}/v1/bikes/get/speed_gt/50" \
-H "Authorization: Bearer {{TOKEN}}"
```

### Example Response

```json
{
  "status": "success",
  "data": [
    {
      "id": "bike-2-id",
      "frame_number": "FR987654321",
      "name": "Roadster Y2",
      "station_id": "1ub1d98p_6",
      "top_speed": 55,
      "range": 120,
      "time_to_station": 7
    },
    {
      "id": "bike-3-id",
      "frame_number": "FR111213141",
      "name": "Lightning Z3",
      "station_id": "3xr7t1d4p_9",
      "top_speed": 60,
      "range": 130,
      "time_to_station": 6
    }
  ]
}
```

### Notes

- Ensure that the `Authorization` header is included in the request to authenticate the user with the provided bearer token.
- Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).
- Replace `{{TOKEN}}` with the actual bearer token to authorize the request.