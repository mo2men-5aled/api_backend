let restaurants;

export default class RestaurantsDAO {
  static async injectDB(conn) {
    if (restaurants) {
      return;
    }
    try {
      restaurants = await conn
        .db(process.env.RESTREVIEWS_NS)
        .collection("restaurants");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in restaurantDAO: ${e}`
      );
    }
  }

  static async getRestaurants({
    filters = null,
    page = 0,
    restaurantsPerPage = 10,
  } = {}) {
    let query;
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } };
      } else if ("cuisine" in filters) {
        query = { cuisine: { $eq: filters["cuisine"] } };
      } else if ("zipcode" in filters) {
        query = { "address.zipcode": { $eq: filters["zipcode"] } };
      }
    }

    let curser;
    try {
      curser = await restaurants.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
    }

    const displayCurser = curser
      .limit(restaurantsPerPage)
      .skip(restaurantsPerPage * page);
    try {
      const restaurantsList = await displayCurser.toArray();
      const totalNumRestaurants = await restaurants.countDocuments(query);
      return { restaurantsList, totalNumRestaurants };
    } catch (e) {
      console.error(
        `Unable to convert curser to array or problem counting documents, ${e}`
      );
      return { restaurantsList: [], totalNumRestaurants: 0 };
    }
  }
}
