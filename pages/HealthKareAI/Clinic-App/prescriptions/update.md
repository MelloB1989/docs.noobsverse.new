# Update Prescription

Allows authenticated users to update details of an existing prescription. The user must be authenticated and authorized to make changes.

## Endpoint

`POST /prescriptions/update`

## Authentication

This route requires user authentication. Ensure the request includes authentication credentials that the middleware can verify.

## Request Body

Fields are optional unless stated otherwise:

- **date** (string, optional): The date of the prescription.
- **details** (string, optional): The details of the prescription.
- **doctorPhone** (string, optional): The phone number of the doctor.
- **documentUrl** (string, optional): The URL to the prescription document.
- **familyID** (string, optional): The identifier for the family.

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