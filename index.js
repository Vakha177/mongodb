const express = require("express");

const app = express();

app.use(require("./router/products.router"));
app.use(require('./router/brans.router'))

app.listen(3000, () => console.log('Сервер успешно запущен') );