const pool = require("../../config/bd");







































































































































































































const getDisablesUser = async (req, res) => {
    try {
      const dbData = await pool.query(
        `select profile.id_profile, profile.name, profile.lastname, profile.phone, profile.email, profile.state,  from profile`
        // inner join products_category ON products_category.id_product = products.id_products
        // inner join category on category.id_category = products_category.id_categorie WHERE stock = False`
      );
      return res.json(allData);
    } catch (error) {
      res.json(error.message);
    }
  }


module.exports = {
  
  };