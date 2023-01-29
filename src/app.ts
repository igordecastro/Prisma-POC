import express from 'express';
import cors from 'cors';

import { charactersRouter, actorsRouter, speciesRouter } from "./routers";

const app = express();

app
  .use(cors())
  .use(express.json())
  .use(charactersRouter)
  .use(actorsRouter)
  .use(speciesRouter)

app.listen(4000, () => {
    console.log("Running in port 4000")
})