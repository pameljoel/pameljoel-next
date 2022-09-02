import categoriesJson from '../../../public/resources/categories.json';

export default (req, res) => {
  res.statusCode = 200
  res.json(categoriesJson)
}
