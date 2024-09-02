# Create Clinic

Creates a new clinic entry in the system.

## Endpoint

`POST /clinic/create`

## Request Body

- **type** (string): The type of clinic.
- **socials** (string[]): An array of social media links associated with the clinic.
- **name** (string): The name of the clinic.
- **id** (string): A unique identifier for the clinic.
- **doctors** (string[]): An array of doctor identifiers associated with the clinic.
- **banners** (string[]): An array of banner images or links for the clinic.
- **departments** (string[]): An array of department names within the clinic.

## Success Response

- **Status Code:** 201 Created
- **Body:** 
  ```json
  {
    "id": "uniqueClinicId"
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