# Getting Started with Create Node.js

> in node.js files are modules by default

## streams

> reads the data from the file in chunks
> the default chunk(buffer) size is 64 kb

#### for controling the size of the chunks

> use "highWaterMark" as an property its value is the size you want in bytes in object as a second parameter passed to the creatReadStream method

```
    const stream = createReadStream("./bigData.txt",{highWaterMark:90000});
```

#### for printing the content of the file

> for printing the text in that file add another property tho the object it is called encoding and it's value is the encoding method

```
    const stream = createReadStream("./bigData.txt",{highWaterMark:90000, encoding:"utf8"});
```

---

> the pipe() methode: used to attach a Writable stream to the readable stream so that it consequently switches into flowing mode and then pushes all the data that it has to the attached Writable.

### MiddleWare

> req -> middleware -> res
> when working with middleware you must must must must must pass the next() methode into that middleware to end the request-response cycle and head to the next middleware

- middleware example

```
        const logger = (req, res, next) => {
        const method = req.method;
        const url = req.url;
        const time = new Date().getFullYear();
        console.log(method, url, time);
        next();
    };
```

> when the middleware passed to the method it is automatically takes the res and the req tha's belongs to that method

```
    app.get("/", logger, (req, res) => {
        res.send("Home Page");
    });
```

>
