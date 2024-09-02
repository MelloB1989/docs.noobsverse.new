# 3. Signup

## Description
The Signup API is used to create a new user account by providing required details such as phone number, OTP, email, personal information, and additional details depending on the user's type (e.g., student, employee).

### Endpoint

- **URL:** `{{BASE_URL}}/v1/auth/signup`
- **Method:** `POST`
- **Authentication:** None required

### Request Headers

No specific headers are required for this request.

### Request Body

The body of the request should be sent in JSON format and includes the following fields:

#### JSON Parameters:

| Parameter     | Type   | Description                                              | Required |
|---------------|--------|----------------------------------------------------------|----------|
| phone         | string | The user's phone number. Example: `"+919812940706"`      | Yes      |
| otp           | string | The OTP (One-Time Password) received by the user. Example: `"316892"` | Yes      |
| email         | string | The user's email address. Example: `"mellob.mailer@gmail.com"` | Yes      |
| first_name    | string | The user's first name. Example: `"Kartik"`               | Yes      |
| last_name     | string | The user's last name. Example: `"Deshmukh"`              | Yes      |
| date_of_birth | string | The user's date of birth in `dd/mm/yyyy` format. Example: `"27/11/2004"` | Yes      |
| password      | string | The user's chosen password. Example: `"password"`        | Yes      |
| type          | string | The user's type, such as `"student"` or `"employee"`. Example: `"student"` | Yes      |
| employee_id   | string | The employee ID (if applicable). Example: `""`           | No       |
| company       | string | The company name (if applicable). Example: `""`          | No       |
| college       | string | The college name (if applicable). Example: `"AU"`        | No       |
| student_id    | string | The student ID (if applicable). Example: `"34"`          | No       |

Example JSON body:

```json
{
  "phone": "+919812940706",
  "otp": "316892",
  "email": "mellob.mailer@gmail.com",
  "first_name": "Kartik",
  "last_name": "Deshmukh",
  "date_of_birth": "27/11/2004",
  "password": "password",
  "type": "student",
  "employee_id": "",
  "company": "",
  "college": "AU",
  "student_id": "34"
}
```

### Response

The API will return a response based on the success or failure of the signup attempt. The response format and content will depend on the specific implementation.

### Example Request

```bash
curl -X POST "{{BASE_URL}}/v1/auth/signup" \
-H "Content-Type: application/json" \
-d '{
  "phone": "+919812940706",
  "otp": "316892",
  "email": "mellob.mailer@gmail.com",
  "first_name": "Kartik",
  "last_name": "Deshmukh",
  "date_of_birth": "27/11/2004",
  "password": "password",
  "type": "student",
  "employee_id": "",
  "company": "",
  "college": "AU",
  "student_id": "34"
}'
```

### Example Response

```json
{
  "status": "success",
  "user_id": "unique-user-id-here",
  "message": "User successfully registered."
}
```

### Notes

- Ensure that all required fields are provided in the request body.
- Replace `{{BASE_URL}}` with the actual base URL of your API server (e.g., `http://localhost:3000`).
