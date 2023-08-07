import express, { Request, Response } from "express";
import { Variables } from "./config/variables";
import { MessageBroker } from "./service/rabbitmq";

const app = express()
const messageGetter = new MessageBroker()
messageGetter.getMessage('mainQueue')
app.get('/', (_req: Request, res: Response)=> res.send('Hai there, i was Consumer'))
app.listen(Variables.APP_PORT, ()=> console.log(`App running on port ${Variables.APP_PORT}`))