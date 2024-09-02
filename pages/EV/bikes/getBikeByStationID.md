# 4. Get Bikes by Station ID

## Description
The Get Bikes by Station ID API is used to retrieve a list of all bikes associated with a specific station, identified by the station's unique ID. Each bike's details, such as frame number, name, top speed, range, and estimated time to reach the station, will be included in the response.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/bikes/get/station/e6j_2fyc23`
- **Method:** `GET`
- **Authentication:** Bearer token required

### Request Headers

- **Authorization:** `Bearer {{TOKEN}}`

### URL Parameters

- **station_id** (string): The unique identifier of the station. In the example provided, `e6j_2fyc23` is the station ID.

### Request Body

- **Body:** None required for this request.

### Response

The API will return a list of all bikes associated with the specified station ID, each with detailed information.

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
curl -X GET "{{BASE_URL}}/v1/bikes/get/station/e6j_2fyc23" \
-H "Authorization: Bearer {{TOKEN}}"
```

### Example Response

```json
{
  "status": "success",
  "data": [
    {
      "id": "bike-1-id",
      "frame_number": "FR123456789",
      "name": "Speedster X1",
      "station_id": "e6j_2fyc23",
      "top_speed": 45,
      "range": 100,
      "time_to_station": 5
    },
    {
      "id": "bike-2-id",
      "frame_number": "FR987654321",
      "name": "Roadster Y2",
      "station_id": "e6j_2fyc23",
      "top_speed": 50,
      "range": 120,
      "time_to_station": 7
    }
  ]
}
```

### Notes

- Ensure that the `Authorization` header is included in the request to authenticate the user with the provided bearer token.
- Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).
- Replace `{{TOKEN}}` with the actual bearer token to authorize the request.