# Karma Database Package Documentation

This documentation covers the `database` package from `github.com/MelloB1989/karma/database`, which provides utility functions for database operations with Go structs.

## Table of Contents
- [Installation](#installation)
- [Function Reference](#function-reference)
  - [FetchColumnNames](#fetchcolumnnames)
  - [ParseRows](#parserows)
  - [InsertStruct](#insertstruct)
  - [UpdateStruct](#updatestruct)
- [Working with Structs](#working-with-structs)
  - [Naming Conventions](#naming-conventions)
  - [Special Field Types](#special-field-types)
  - [Compatibility with Karma ORM](#compatibility-with-karma-orm)
- [Utility Functions](#utility-functions)

## Installation

```bash
go get github.com/MelloB1989/karma/database
```

## Function Reference

### FetchColumnNames

Retrieves all column names from a database table.

```go
func FetchColumnNames(db *sqlx.DB, tableName string) ([]string, error)
```

**Parameters:**
- `db` - A connected sqlx database instance
- `tableName` - Name of the table to query

**Returns:**
- A slice of column names
- An error, if any occurred

**Example:**
```go
columns, err := database.FetchColumnNames(db, "users")
if err != nil {
    log.Fatal(err)
}
fmt.Println(columns) // ["id", "username", "email", ...]
```

### ParseRows

Parses SQL rows into a slice of structs.

```go
func ParseRows(rows *sql.Rows, dest interface{}) error
```

**Parameters:**
- `rows` - SQL rows from a query
- `dest` - Pointer to a slice of structs where results will be stored

**Returns:**
- An error, if any occurred

**Example:**
```go
type User struct {
    ID       int    `json:"id"`
    Username string `json:"username"`
    Email    string `json:"email"`
    Tags     []string `json:"tags" db:"json"`
}

var users []User
rows, _ := db.Query("SELECT * FROM users")
err := database.ParseRows(rows, &users)
if err != nil {
    log.Fatal(err)
}
```

### InsertStruct

Inserts a struct's fields into a database table.

```go
func InsertStruct(db *sqlx.DB, tableName string, data interface{}) error
```

**Parameters:**
- `db` - A connected sqlx database instance
- `tableName` - Name of the table to insert into
- `data` - Pointer to a struct containing data to insert

**Returns:**
- An error, if any occurred

**Example:**
```go
user := User{
    Username: "johndoe",
    Email:    "john@example.com",
    Tags:     []string{"new", "customer"},
}
err := database.InsertStruct(db, "users", &user)
if err != nil {
    log.Fatal(err)
}
```

### UpdateStruct

Updates a record in a database table based on a condition field.

```go
func UpdateStruct(db *sqlx.DB, tableName string, data interface{}, conditionField string, conditionValue interface{}) error
```

**Parameters:**
- `db` - A connected sqlx database instance
- `tableName` - Name of the table to update
- `data` - Pointer to a struct containing updated data
- `conditionField` - Field name for the WHERE condition
- `conditionValue` - Value for the WHERE condition

**Returns:**
- An error, if any occurred

**Example:**
```go
user := User{
    ID:       42,
    Username: "johndoe_updated",
    Email:    "new_email@example.com",
    Tags:     []string{"updated", "customer"},
}
err := database.UpdateStruct(db, "users", &user, "id", user.ID)
if err != nil {
    log.Fatal(err)
}
```

## Working with Structs

### Naming Conventions

1. **Struct Fields**: Must be in CamelCase
   ```go
   type Product struct {
       ProductID   int     `json:"product_id"`
       ProductName string  `json:"product_name"`
       Price       float64 `json:"price"`
   }
   ```

2. **JSON Tags**: Must be in snake_case (lowercase with underscores)
   ```go
   `json:"user_name"`
   ```

3. **DB Tags**: Used for special handling or custom column names
   ```go
   `db:"json"` or `db:"custom_column_name"`
   ```

### Special Field Types

For complex field types like arrays, maps, structs, or interfaces, you must add the `db:"json"` tag:

```go
type Post struct {
    ID        int       `json:"id"`
    Title     string    `json:"title"`
    Tags      []string  `json:"tags" db:"json"`     // Array
    Metadata  map[string]interface{} `json:"metadata" db:"json"`  // Map
    Author    Author    `json:"author" db:"json"`   // Struct
    Content   interface{} `json:"content" db:"json"` // Interface
}
```

This instructs the package to serialize and deserialize these fields as JSON when interacting with the database.

### Compatibility with Karma ORM

If you're using the Karma ORM (`github.com/MelloB1989/karma/orm`), add a `TableName` field with the `karma_table` tag to specify the table name:

```go
type User struct {
    TableName string  `karma_table:"users" json:"-"` // Marks this struct as mapping to "users" table
    ID        int     `json:"id"`
    Username  string  `json:"username"`
    Email     string  `json:"email"`
    Metadata  map[string]interface{} `json:"metadata" db:"json"`
}
```

This annotation is necessary for the proper functionality of Karma ORM. Add `json:"-"` to exclude this field from JSON serialization.

## Utility Functions

The package also includes several utility functions:

- `snakeToCamel` - Converts snake_case to CamelCase
- `camelToSnake` - Converts CamelCase to snake_case
- `stringToFloat32` - Converts a string to float32
- `placeholders` - Generates SQL placeholder strings

These functions are used internally but may be useful in your own code.

For more information on Karma ORM, visit the [official documentation](https://docs.coffeecodes.in/karma-go/orm).
