# 1. Create Bikes

## Description
The Create Bikes API is used to add new bikes to the system. This endpoint accepts a list of bike objects, each containing details such as frame number, name, associated station, top speed, range, estimated time to reach the station, and images. This operation requires administrative authorization through a special header.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/bikes/create`
- **Method:** `POST`
- **Authentication:** Special Admin Authorization Header required

### Request Headers

- **X-Karma-Admin-Auth:** `{{X_KARMA_ADMIN_AUTH_TOKEN}}`

  - **Description:** A special admin authorization token required to authenticate the request. Replace `{{X_KARMA_ADMIN_AUTH_TOKEN}}` with the actual admin token.

### Request Body

The body of the request should be sent in JSON format and must contain an array of bike objects. Each bike object includes the following fields:

#### JSON Parameters:

| Parameter        | Type     | Description                                                                 | Required |
|------------------|----------|-----------------------------------------------------------------------------|----------|
| frame_number     | string   | The unique frame number of the bike. Example: `"FR123456789"`               | Yes      |
| name             | string   | The name or model of the bike. Example: `"Speedster X1"`                    | Yes      |
| station_id       | string   | The unique identifier of the station where the bike is located. Example: `"1ub1d98p_5"` | Yes      |
| top_speed        | integer  | The top speed of the bike in km/h. Example: `45`                             | Yes      |
| range            | integer  | The range of the bike in kilometers. Example: `100`                          | Yes      |
| time_to_station  | integer  | The estimated time in minutes to reach the station. Example: `5`             | Yes      |
| images           | array    | A list of URLs pointing to images of the bike. Example: `["https://example.com/image.jpg"]` | No       |

Example JSON body:

```json
[
    {
        "frame_number": "FR123456789",
        "name": "Speedster X1",
        "station_id": "1ub1d98p_5",
        "top_speed": 45,
        "range": 100,
        "time_to_station": 5,
        "images": [
            "https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg"
        ]
    }
]
```

### Response

The API will return a response indicating the success or failure of the bike creation process. The response format and content will depend on the specific implementation.

#### JSON Response:

| Parameter     | Type   | Description                                            |
|---------------|--------|--------------------------------------------------------|
| status        | string | The status of the request. Example: `"success"` or `"error"` |
| message       | string | A message describing the result of the request.         |
| created_bikes | array  | (Optional) An array of objects representing the bikes that were successfully created. Each object contains the details of the created bike. |

**Note:** The `created_bikes` field is included only if the bikes are successfully created.

### Example Request

```bash
curl -X POST "{{BASE_URL}}/v1/bikes/create" \
-H "Content-Type: application/json" \
-H "X-Karma-Admin-Auth: {{X_KARMA_ADMIN_AUTH_TOKEN}}" \
-d '[
    {
        "frame_number": "FR123456789",
        "name": "Speedster X1",
        "station_id": "1ub1d98p_5",
        "top_speed": 45,
        "range": 100,
        "time_to_station": 5,
        "images": [
            "https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg"
        ]
    }
]'
```

### Example Response

**Successful Creation:**

```json
{
  "status": "success",
  "message": "Bikes successfully created.",
  "created_bikes": [
    {
      "id": "bike-1-id",
      "frame_number": "FR123456789",
      "name": "Speedster X1",
      "station_id": "1ub1d98p_5",
      "top_speed": 45,
      "range": 100,
      "time_to_station": 5,
      "images": [
        "https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-06613f885e681c.jpg"
      ]
    }
  ]
}
```

**Error Response (e.g., Missing Required Field):**

```json
{
  "status": "error",
  "message": "Missing required field: frame_number."
}
```

### Notes

- **Admin Authorization:** This endpoint requires a special admin authorization token to be included in the `X-Karma-Admin-Auth` header. Ensure that this token is kept secure and is not exposed publicly.

- **Content-Type Header:** The `Content-Type` header must be set to `application/json` to indicate that the request body is in JSON format.

- **Replace Placeholders:**
  - Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).
  - Replace `{{X_KARMA_ADMIN_AUTH_TOKEN}}` with the actual admin authorization token.

- **Multiple Bikes:** To create multiple bikes in a single request, include multiple bike objects within the JSON array in the request body.

- **Validation:** Ensure that all required fields are provided and adhere to the expected data types to avoid errors during the bike creation process.
