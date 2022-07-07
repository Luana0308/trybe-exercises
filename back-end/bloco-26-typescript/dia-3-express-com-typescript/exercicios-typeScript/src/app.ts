import express from 'express';
// import 'express-async-errors';
import routers from './routes/routes'

const app = express();

app.use(express.json());
app.use(routers);

export default app;