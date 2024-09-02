# Update Appointment

Allows authenticated users to update details of an existing appointment. The user must be authenticated and authorized to make changes.

## Endpoint

`POST /appointments/update`

## Authentication

This route requires user authentication. Ensure the request includes authentication credentials that the middleware can verify.

## Request Body

Fields are optional unless stated otherwise:

- **doctorPhone** (string, optional): The phone number of the doctor.
- **familyID** (string, optional): The identifier for the family.
- **status** (string, optional): The status of the appointment.
- **timestamp** (string, optional): The timestamp of the appointment.

## Success Response

- **Status Code:** 200 OK
- **Body:** 
  ```json
  {
    "data": {}
  }
  ```

## Error Responses

- **Status Code:** 401 Unauthorized
  - **Body:** `{ "error": "Unauthorized" }`
- **Status Code:** 500 Internal Server Error
  - **Body:** `{ "error": "errorDetails" }`