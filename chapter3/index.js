const { format } = require("date-fns");
const { v4: uuid } = require("uuid"); //import uuid version 4

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));

console.log(uuid());
