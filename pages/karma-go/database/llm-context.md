# Karma Database Package Quick Reference

## Functions

### FetchColumnNames
```go
func FetchColumnNames(db *sqlx.DB, tableName string) ([]string, error)
```
Gets column names from table. Returns slice of column names and error.

### ParseRows
```go
func ParseRows(rows *sql.Rows, dest interface{}) error
```
Converts SQL rows to struct slice. Dest must be pointer to struct slice.

### InsertStruct
```go
func InsertStruct(db *sqlx.DB, tableName string, data interface{}) error
```
Inserts struct data into table. Data must be struct pointer.

### UpdateStruct
```go
func UpdateStruct(db *sqlx.DB, tableName string, data interface{}, conditionField string, conditionValue interface{}) error
```
Updates table record based on condition. Data must be struct pointer.

## Struct Rules

1. Fields must be CamelCase
2. Use snake_case in json tags: `json:"user_name"`
3. For complex types (arrays, maps, structs, interfaces), add `db:"json"` tag
4. If using Karma ORM, add `TableName string \`karma_table:"table_name" json:"-"\``

## Example
```go
type User struct {
    TableName string    `karma_table:"users" json:"-"` // For Karma ORM
    Id        int       `json:"id"`
    Username  string    `json:"username"`
    Email     string    `json:"email"`
    Tags      []string  `json:"tags" db:"json"` // Array needs db:"json"
    Metadata  map[string]interface{} `json:"metadata" db:"json"`
}

// Fetch columns
cols, _ := database.FetchColumnNames(db, "users")

// Parse query results
var users []User
rows, _ := db.Query("SELECT * FROM users")
database.ParseRows(rows, &users)

// Insert
user := User{Username: "john", Email: "j@ex.com", Tags: []string{"new"}}
database.InsertStruct(db, "users", &user)

// Update
database.UpdateStruct(db, "users", &user, "id", 1)
```

Import: `github.com/MelloB1989/karma/database`
