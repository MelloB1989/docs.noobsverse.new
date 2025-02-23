# Karma ORM Minimal Reference

Define struct with `karma_table` and `json` tags. Primary key needs `karma:"primary"`:
```go
type User struct {
    TableName `karma_table:"users"`
    ID int    `json:"id" karma:"primary"`
    Name str  `json:"name"`
}
```

Init: `orm := orm.Load(&User{})`

Basic ops:
```go
// Create
orm.Insert(&User{Name:"john"})

// Read
all := orm.GetAll()
one := orm.GetByPrimaryKey("1")

// Update 
orm.Update(&User{Name:"new"}, "1") // 1=PK

// Delete
orm.DeleteByPrimaryKey(1)
orm.DeleteAll()
```

Field queries (replace op with: =,>,<,>=,<=,LIKE):
```go
// Single field
orm.GetByFieldEquals("name", "john")
orm.GetByFieldCompare("age", 25, op)
orm.GetByFieldGreaterThan("age", 25)
orm.GetByFieldLessThan("age", 25)
orm.GetByFieldGreaterThanEquals("age", 25) 
orm.GetByFieldLessThanEquals("age", 25)
orm.GetByFieldLike("email", "%@gmail.com")

// Multiple fields
orm.GetByFieldsEquals(map[string]interface{}{
    "name": "john",
    "age": 25,
})

// IN queries
orm.GetByFieldIn("id", []any{1,2,3})

// Count
orm.GetCount("age", 25, op)
```

Delete ops:
```go
orm.DeleteByFieldEquals("name", "john")
orm.DeleteByFieldCompare("age", 25, op)
orm.DeleteByFieldIn("id", []any{1,2,3})
```

Join:
```go
type Result struct {
    UserID int `json:"user_id"`
    OrderID int `json:"order_id"`
}

results := orm.Join(JoinCondition{
    Target: &Order{},
    OnField: "id",
    TargetField: "user_id",
}).Into(&Result{}).
  Where("name", "john").
  Execute()
```

Raw SQL: `orm.QueryRaw("SELECT * FROM users WHERE age > $1", 25)`

Returns: 
- Single record ops return `(any, error)`
- Bulk ops return `([]any, error)` 
- Delete ops return `(int64, error)` showing rows affected
- All errors include details about failure

All ops handle NULL fields and proper type conversion. Functions sanitize inputs for SQL injection protection.
