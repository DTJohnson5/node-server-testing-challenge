require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT || 4006;
server.listen(port, () => console.log(`\n**We are live with the Captain at pier ${port} **\n`));