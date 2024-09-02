# 1. Create Station

## Description
The Create Station API is used to create multiple station records in the system. Each station includes details such as the station's name, location (latitude and longitude), total capacity, and current capacity.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/stations/create`
- **Method:** `POST`
- **Authentication:** None required

### Request Headers

- **X-Karma-Admin-Auth:** `CoffeeCodesMelloBxAparnaEewqjbdkwqbkdjoehui3r7328grehjvdjvchjiuiudhsjkhkjsadab`

### Request Body

The body of the request should be sent in JSON format and contains an array of station objects.

#### JSON Parameters:

Each station object should contain the following fields:

| Parameter          | Type   | Description                                           | Required |
|--------------------|--------|-------------------------------------------------------|----------|
| name               | string | The name of the station. Example: `"Central Station"` | Yes      |
| location_latitude  | string | The latitude of the station's location. Example: `"40.712776"` | Yes      |
| location_longitude | string | The longitude of the station's location. Example: `"-74.005974"` | Yes      |
| capacity           | int    | The total capacity of the station. Example: `100`     | Yes      |
| current_capacity   | int    | The current number of occupants at the station. Example: `75` | Yes      |

Example JSON body:

```json
[
    {
        "name": "Central Station",
        "location_latitude": "40.712776",
        "location_longitude": "-74.005974",
        "capacity": 100,
        "current_capacity": 75
    },
    {
        "name": "Downtown Station",
        "location_latitude": "34.052235",
        "location_longitude": "-118.243683",
        "capacity": 150,
        "current_capacity": 90
    },
    {
        "name": "Uptown Station",
        "location_latitude": "51.507351",
        "location_longitude": "-0.127758",
        "capacity": 200,
        "current_capacity": 120
    },
    {
        "name": "Westside Station",
        "location_latitude": "35.689487",
        "location_longitude": "139.691711",
        "capacity": 180,
        "current_capacity": 160
    },
    {
        "name": "Eastside Station",
        "location_latitude": "48.856613",
        "location_longitude": "2.352222",
        "capacity": 250,
        "current_capacity": 200
    }
]
```

### Response

The API will return a response based on the success or failure of the station creation request. The response format and content will depend on the specific implementation.

### Example Request

```bash
curl -X POST "{{BASE_URL}}/v1/stations/create" \
-H "Content-Type: application/json" \
-H "X-Karma-Admin-Auth: CoffeeCodesMelloBxAparnaEewqjbdkwqbkdjoehui3r7328grehjvdjvchjiuiudhsjkhkjsadab" \
-d '[
    {
        "name": "Central Station",
        "location_latitude": "40.712776",
        "location_longitude": "-74.005974",
        "capacity": 100,
        "current_capacity": 75
    },
    {
        "name": "Downtown Station",
        "location_latitude": "34.052235",
        "location_longitude": "-118.243683",
        "capacity": 150,
        "current_capacity": 90
    },
    {
        "name": "Uptown Station",
        "location_latitude": "51.507351",
        "location_longitude": "-0.127758",
        "capacity": 200,
        "current_capacity": 120
    },
    {
        "name": "Westside Station",
        "location_latitude": "35.689487",
        "location_longitude": "139.691711",
        "capacity": 180,
        "current_capacity": 160
    },
    {
        "name": "Eastside Station",
        "location_latitude": "48.856613",
        "location_longitude": "2.352222",
        "capacity": 250,
        "current_capacity": 200
    }
]'
```

### Example Response

```json
{
  "status": "success",
  "message": "Stations created successfully.",
  "data": [
    {
      "id": "station-1-id",
      "name": "Central Station"
    },
    {
      "id": "station-2-id",
      "name": "Downtown Station"
    },
    {
      "id": "station-3-id",
      "name": "Uptown Station"
    },
    {
      "id": "station-4-id",
      "name": "Westside Station"
    },
    {
      "id": "station-5-id",
      "name": "Eastside Station"
    }
  ]
}
```

### Notes

- Ensure that the `X-Karma-Admin-Auth` header is included in the request to authorize the admin.
- Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).