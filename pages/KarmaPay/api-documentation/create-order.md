# Create Order API

The Create Order API allows developers to create a new payment order through KarmaPay. This section details the request requirements, including HTTP method, headers, body parameters, and the handling of responses.

## HTTP Method

- **POST**

## Endpoint

### API Endpoint URL : `https://karmapay-backend.app.k8s.coffeecodes.in/v1/orders/create`

- `/create` (replace with the actual endpoint URL)

## Headers

- **Content-Type:** `application/json`
- **Authorization:** `Bearer <Your_KPAPI_Key>`

  The Authorization header must include the KPAPI Key prefixed by `Bearer `.

## Request Body

The request body must be a JSON object containing the following fields:

- `order_amt`: The amount for the order (must be greater than 0).
- `order_currency`: The three-letter currency code (e.g., USD, INR).
- `order_description`: A brief description of the order.
- `order_mode`: The payment gateway to use (supported modes: RAZORPAY, PAYPAL, PHONEPE, UPI, STRIPE, CASHFREE, PAYTM).
- `webhook_url`: The URL to which the payment notification will be sent.
- `redirect_url`: The URL to redirect the user after payment completion.
- `registration`: Additional registration data or flags as required.

### Example Request Body

```json
{
  "order_amt": 100,
  "order_currency": "USD",
  "order_description": "Example order",
  "order_mode": "RAZORPAY",
  "webhook_url": "https://yourdomain.com/webhook",
  "redirect_url": "https://yourdomain.com/redirect",
  "registration": {"customer_id": "12345"}
}
```

## Responses

### Successful Request

- **Status Code:** 200 OK
- **Body:**
  ```json
  {
    "oid": "<order_id>"
  }
  ```

### Error Responses

- **Invalid Request Method**
  - **Status Code:** 400 Bad Request
  - **Body:** `{"error": "Invalid request method"}`
- **Missing API Key**
  - **Status Code:** 400 Bad Request
  - **Body:** `{"error": "Missing API Key"}`
- **Missing Required Fields**
  - **Status Code:** 400 Bad Request
  - **Body:** `{"error": "Missing required fields"}`
- **Invalid Order Amount**
  - **Status Code:** 400 Bad Request
  - **Body:** `{"error": "Invalid order amount"}`
- **Invalid Order Currency**
  - **Status Code:** 400 Bad Request
  - **Body:** `{"error": "Invalid order currency"}`
- **Unsupported Order Mode**
  - **Status Code:** 400 Bad Request
  - **Body:** `{"error": "Unsupported order mode"}`
- **Invalid API Key**
  - **Status Code:** 400 Bad Request
  - **Body:** `{"error": "Invalid API Key"}`

## Notes

- Ensure that all required fields are included in the request body to avoid `400 Bad Request` errors.
- The `oid` returned in a successful response is the unique identifier for the created order, which will be used in the payment page URL.

For more detailed information on handling responses and implementing the Create Order API in your application, refer to the [KarmaPay API Documentation](#).
