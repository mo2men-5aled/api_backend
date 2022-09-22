import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDAO from "./DAO/restaurantsDAO.js";

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.RESTREVIEWS_DB_URI)
  .catch((err) => {
    console.error(err.stack);
  })
  .then(async (client) => {
    await RestaurantsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`Listining on port ${port}`);
    });
  });
