# 8. Get Bikes by Top Speed Range

## Description
The Get Bikes by Top Speed Range API is used to retrieve a list of all bikes with a top speed within a specified range. The range is defined by an upper and lower limit. Each bike's details, such as frame number, name, station, top speed, range, and estimated time to reach the station, will be included in the response.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/bikes/get/speed/:upper_limit/:lower_limit`
- **Method:** `GET`
- **Authentication:** Bearer token required

### Request Headers

- **Authorization:** `Bearer {{TOKEN}}`

### URL Parameters

- **upper_limit** (int): The upper limit of the speed range in km/h. In the example provided, `50` is the upper limit.
- **lower_limit** (int): The lower limit of the speed range in km/h. In the example provided, `47` is the lower limit.

### Request Body

- **Body:** None required for this request.

### Response

The API will return a list of all bikes with a top speed within the specified range, each with detailed information.

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
curl -X GET "{{BASE_URL}}/v1/bikes/get/speed/50/47" \
-H "Authorization: Bearer {{TOKEN}}"
```

### Example Response

```json
{
  "status": "success",
  "data": [
    {
      "id": "bike-4-id",
      "frame_number": "FR123457890",
      "name": "Stealth V4",
      "station_id": "2lb7k29s_8",
      "top_speed": 48,
      "range": 110,
      "time_to_station": 5
    },
    {
      "id": "bike-5-id",
      "frame_number": "FR098765432",
      "name": "Blaze V2",
      "station_id": "3xr7t1d4p_9",
      "top_speed": 49,
      "range": 115,
      "time_to_station": 6
    }
  ]
}
```

### Notes

- Ensure that the `Authorization` header is included in the request to authenticate the user with the provided bearer token.
- Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).
- Replace `{{TOKEN}}` with the actual bearer token to authorize the request.
- The endpoint `/v1/bikes/get/speed/50/47` will return bikes with a top speed greater than or equal to 47 km/h and less than or equal to 50 km/h.