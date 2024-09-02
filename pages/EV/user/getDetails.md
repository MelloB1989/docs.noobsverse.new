# API Documentation: Get User Details API

## 1. Get User Details

### Description
The Get User Details API is used to retrieve the details of the authenticated user. The user must be authenticated using a bearer token to perform this operation.

### Endpoint

- **URL:** `{{BASE_URL}}/v1/user/get`
- **Method:** `GET`
- **Authentication:** Bearer token required

### Request Headers

- **Authorization:** `Bearer {{TOKEN}}`

### Request Body

- **Body:** None required for this request.

### Response

The API will return the details of the authenticated user.

#### JSON Response:

| Parameter     | Type   | Description                                  |
|---------------|--------|----------------------------------------------|
| status        | string | The status of the request. Example: `"success"` or `"error"` |
| user_id       | string | The unique identifier of the user.           |
| phone         | string | The phone number associated with the user.   |
| email         | string | The email address of the user.               |
| first_name    | string | The first name of the user.                  |
| last_name     | string | The last name of the user.                   |
| date_of_birth | string | The date of birth of the user in `dd/mm/yyyy` format. |
| type          | string | The type of user (e.g., `"student"` or `"employee"`). |
| student_id    | string | The student ID (if applicable).              |
| employee_id   | string | The employee ID (if applicable).             |
| college       | string | The name of the college (if applicable).     |
| company       | string | The name of the company (if applicable).     |

### Example Request

```bash
curl -X GET "{{BASE_URL}}/v1/user/get" \
-H "Authorization: Bearer {{TOKEN}}"
```

### Example Response

**Successful User Details Retrieval:**

```json
{
  "status": "success",
  "user_id": "user_1_id",
  "phone": "+919812940706",
  "email": "mellob.mailer@gmail.com",
  "first_name": "Kartik",
  "last_name": "Deshmukh",
  "date_of_birth": "27/11/2004",
  "type": "student",
  "student_id": "34",
  "employee_id": "",
  "college": "AU",
  "company": ""
}
```

**Error Response (e.g., Unauthorized Access):**

```json
{
  "status": "error",
  "message": "Unauthorized access. Please provide a valid token."
}
```

### Notes

- **Authentication:** Ensure that the `Authorization` header is included in the request to authenticate the user with the provided bearer token.

- **Replace Placeholders:**
  - Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).
  - Replace `{{TOKEN}}` with the actual bearer token to authorize the request.

- **Handling Responses:** Be prepared to handle both success and error responses, particularly in cases of invalid or expired tokens.
