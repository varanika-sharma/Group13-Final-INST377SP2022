/* eslint-disable no-console */
import express from 'express';
import apiRoutes from './server/routes/apiRoutes.js';

const app = express();

const PORT = process.env.PORT || 3000;
const staticFolder = 'client/public';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));
app.use('/api', apiRoutes);

async function bootServer() {
  try {
    // const mysql = await db.sequelizeDB;
    // await mysql.sync();
    app.listen(PORT, () => {
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();
