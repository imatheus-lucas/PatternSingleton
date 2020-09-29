import express from 'express';

import Logger from "./Logger";

Logger.setConfig({
  appName: 'Meu App'
})
const app = express();
const port = 3333;
app.use(express.json());

app.listen(port, () => Logger.log("Server Started", port));
