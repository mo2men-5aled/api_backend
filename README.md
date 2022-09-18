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
