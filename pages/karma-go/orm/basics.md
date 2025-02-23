# Karma ORM Documentation

Karma ORM is a lightweight, reflection-based ORM for Go that provides simple database operations with PostgreSQL. This documentation covers the main features and usage patterns.

## Table of Contents
- [Setup](#setup)
- [Basic Operations](#basic-operations)
- [Query Operations](#query-operations)
- [Delete Operations](#delete-operations)
- [Join Operations](#join-operations)

## Setup

### Defining Models

Models are defined as Go structs with appropriate tags:

```go
type User struct {
    TableName `karma_table:"users"` // Define table name
    ID        int    `json:"id" karma:"primary"` // Primary key
    Username  string `json:"username"`
    Email     string `json:"email"`
    Age       int    `json:"age"`
}
```

### Initializing ORM

```go
// Create a new instance of your model
user := &User{}

// Initialize ORM with the model
orm := orm.Load(user)
```

## Basic Operations

### Insert

Insert a new record into the database:

```go
newUser := &User{
    Username: "johndoe",
    Email:    "john@example.com",
    Age:      25,
}

err := orm.Insert(newUser)
if err != nil {
    log.Fatal(err)
}
```

### Update

Update an existing record by primary key:

```go
updatedUser := &User{
    Username: "johndoe_updated",
    Email:    "john_new@example.com",
    Age:      26,
}

err := orm.Update(updatedUser, "1") // "1" is the primary key value
if err != nil {
    log.Fatal(err)
}
```

### Get All Records

Retrieve all records from a table:

```go
results, err := orm.GetAll()
if err != nil {
    log.Fatal(err)
}

// Type assert the results
users := results.([]*User)
for _, user := range users {
    fmt.Printf("User: %s, Email: %s\n", user.Username, user.Email)
}
```

### Get By Primary Key

Retrieve a single record by its primary key:

```go
result, err := orm.GetByPrimaryKey("1")
if err != nil {
    log.Fatal(err)
}

user := result.(*User)
fmt.Printf("Found user: %s\n", user.Username)
```

## Query Operations

### Equality Queries

#### Single Field Equals

```go
result, err := orm.GetByFieldEquals("username", "johndoe")
if err != nil {
    log.Fatal(err)
}
```

#### Multiple Fields Equals

```go
filters := map[string]interface{}{
    "age": 25,
    "username": "johndoe",
}

results, err := orm.GetByFieldsEquals(filters)
if err != nil {
    log.Fatal(err)
}
```

### Comparison Queries

```go
// Greater than
results, err := orm.GetByFieldGreaterThan("age", 21)

// Less than
results, err := orm.GetByFieldLessThan("age", 65)

// Greater than or equal
results, err := orm.GetByFieldGreaterThanEquals("age", 18)

// Less than or equal
results, err := orm.GetByFieldLessThanEquals("age", 60)

// Generic comparison with custom operator
results, err := orm.GetByFieldCompare("age", 25, ">=")
```

### Pattern Matching

```go
// LIKE query
results, err := orm.GetByFieldLike("email", "%@gmail.com")
```

### IN Queries

```go
values := []any{1, 2, 3, 4, 5}
results, err := orm.GetByFieldIn("id", values)
```

### Count Queries

```go
count, err := orm.GetCount("age", 25, ">=")
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Found %d users age 25 or older\n", count)
```

### Raw Queries

Execute custom SQL queries:

```go
query := "SELECT * FROM users WHERE age > $1 AND email LIKE $2"
results, err := orm.QueryRaw(query, 18, "%@gmail.com")
```

## Delete Operations

### Delete by Primary Key

```go
rowsDeleted, err := orm.DeleteByPrimaryKey(1)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Deleted %d row(s)\n", rowsDeleted)
```

### Delete by Field

```go
// Delete by field equals
rowsDeleted, err := orm.DeleteByFieldEquals("username", "johndoe")

// Delete by field comparison
rowsDeleted, err := orm.DeleteByFieldCompare("age", 30, ">")

// Delete by field IN
ids := []any{1, 2, 3}
rowsDeleted, err := orm.DeleteByFieldIn("id", ids)
```

### Delete All Records

```go
rowsDeleted, err := orm.DeleteAll()
if err != nil {
    log.Fatal(err)
}
fmt.Printf("Deleted all %d rows from the table\n", rowsDeleted)
```

## Join Operations

### Simple Join

```go
// Define result struct
type UserOrderResult struct {
    UserID    int    `json:"user_id"`
    Username  string `json:"username"`
    OrderID   int    `json:"order_id"`
    OrderDate string `json:"order_date"`
}

// Create join condition
joinCond := JoinCondition{
    Target:      &Order{},
    OnField:     "id",
    TargetField: "user_id",
}

// Execute join
results, err := orm.Join(joinCond).
    Into(&UserOrderResult{}).
    Where("username", "johndoe").
    Execute()

if err != nil {
    log.Fatal(err)
}

// Process results
for _, result := range results {
    userOrder := result.(*UserOrderResult)
    fmt.Printf("User %s placed order %d on %s\n",
        userOrder.Username,
        userOrder.OrderID,
        userOrder.OrderDate)
}
```

## Error Handling

The ORM returns detailed errors for various scenarios:
- Database connection errors
- Query execution errors
- Invalid field names
- Invalid operators
- Parse errors
- No rows found

Always check returned errors and handle them appropriately in your application.
