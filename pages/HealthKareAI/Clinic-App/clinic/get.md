# Get Clinic

Retrieves the details of a specific clinic by its unique identifier.

## Endpoint

`GET /clinic/get/:id`

## URL Parameters

- **id** (string): The unique identifier of the clinic to retrieve.

## Success Response

- **Status Code:** 200 OK
- **Body:** 
  ```json
  {
    "clinic": {
      "type": "clinicType",
      "socials": ["socialLink"],
      "name": "clinicName",
      "id": "clinicId",
      "doctors": ["doctorId"],
      "banners": ["bannerLink"],
      "departments": ["departmentName"]
    }
  }
  ```

## Error Response

- **Status Code:** 500 Internal Server Error
- **Body:**
  ```json
  {
    "error": "errorDescription"
  }
  ```