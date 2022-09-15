## Built-in URL module

> parse an address to the url.parse() method ,and it will return an object with each part of address as a property

### for installing any package in your project use

```
    npm install "module_name"
```

## mySQL

> install mysql driver
> include mysql in project

```
    var mysql = require('mysql');
```

> make a connection to database using mysql.createConnection function

```
    var connection = mysql.createConnection({
        host:"hostname",
        user:"username",
        pass:"this user password"
    })
```

> after making connection you can handel your database by passing the database name as a property to the object that passed to the createConnection function

```
    var connection = mysql.createConnection({
        host:"hostname",
        user:"username",
        pass:"this user password",
        database:"database name"
    })
```

> the connect function takes a function that performes the query you passed in the .query() function

```
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query(
            //any query you want to perform
            "CREATE DATABASE mydb",
            function (err, result) {
            if (err) throw err;
        console.log("Database created");
        });
    });
```

## MongoDB

> In MongoDB, a database is not created until it gets content!
> A collection in MongoDB is the same as a table in MySQL
> In MongoDB, a collection is not created until it gets content!
> A document in MongoDB is the same as a record in MySQL
> If you try to insert documents in a collection that do not exist, MongoDB will create the collection automatically.
> In MongoDB we use the find and findOne methods to find data in a collection like SELECT in mySQL

### Find all documents

> No parameters in the find() method gives you the same result as SELECT \* in MySQL.

```
    dbo.collection("customers").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
```

### Find Some documents

> The second parameter of the find() method is the projection object that describes which fields to include in the result

```
     { projection: { _id: 0, name: 1, address: 1 } }
```

> You are not allowed to specify both 0 and 1 values in the same object (except if one of the fields is the \_id field). If you specify a field with the value 0, all other fields get the value 1, and vice versa:

> id:0 means not to return the id , name = 1 means to return the name in the result also the address

> if we don't want any other columns you don't want to return other than the id don't set it with 0 that will return error , you have just to delete this property

> if you deleted the id coulmn from the projection it will automatically take the value 1

#### filter the result

> When finding documents in a collection, you can filter the result by using a query object.

```
     var query = { address: "Park Lane 38" };
    dbo.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
```

#### filter with regular expressions

> Regular expressions can only be used to query strings.

```
    var query = { address: /^S/ };
    dbo.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
```

> sort the result

```
    var mysort = { name: 1 };
    //sort ascending
```

```
    var mysort = {name: -1 };
    //sort descending
```

#### Deleting a document

> To delete a record, or document as it is called in MongoDB, we use the deleteOne() method.
> If the query finds more than one document, only the first occurrence is deleted.

#### Deleting more than one document

> To delete more than one document, use the deleteMany() method.
