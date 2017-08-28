
import 'dotenv/config';

import express from 'express';
import helmet from 'helmet';
import http from 'http';
import bodyParser from 'body-parser';

const app = express();

let server;

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'static')));

console.log('>>>>>>>>>>>>>>> process.env.JWT_SECRET: ', process.env.JWT_SECRET);
console.log('>>>>>>>>>>>>>>> process.env.NODE_ENV: ', process.env.NODE_ENV);


export { app };


app.set('port', process.env.PORT || 3000)

server = http.createServer(app).listen(3000, '127.0.0.1', function () {
  console.log('Express server listening on port ' + server.address().port)
  console.log('Express server listening on port ' + server.address().address)
})
