import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import {ChatController} from './ExampleChatController';

const app = express();
app.use(bodyParser.json()); 

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from express-anthropic-starter!');
});

app.post('/chat', ChatController);

app.listen(port, () => {
  const address = `http://localhost:${port}`; // Construct the full address
  console.log(`Server is listening on: ${address}`); 
});