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
