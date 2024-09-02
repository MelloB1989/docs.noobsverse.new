# Update Clinic Details

Updates the details of an existing clinic entry.

## Endpoint

`POST /clinic/update`

## Request Body

- **type** (string, optional): The type of clinic.
- **socials** (string[], optional): An array of social media links associated with the clinic.
- **name** (string, optional): The name of the clinic.
- **id** (string): A unique identifier for the clinic (required for identifying which clinic to update).
- **doctors** (string[], optional): An array of doctor identifiers associated with the clinic.
- **banners** (string[], optional): An array of banner images or links for the clinic.
- **departments** (string[], optional): An array of department names within the clinic.

## Success Response

- **Status Code:** 200 OK
- **Body:** 
  ```json
  {
    "data": "UpdatedClinicDetails"
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