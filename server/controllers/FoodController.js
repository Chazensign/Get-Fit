module.exports = {
  addFood: async (req, res) => {
    const {
      meal,
      brand_name,
      serving_unit,
      serving_qty,
      serving_weight_grams,
      nf_calories,
      nf_total_fat,
      nf_saturated_fat,
      nf_cholesterol,
      nf_sodium,
      nf_total_carbohydrate,
      nf_dietary_fiber,
      nf_sugars,
      nf_protein
    } = req.body
  }
}