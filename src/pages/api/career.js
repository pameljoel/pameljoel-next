import json from '../../../public/resources/career.json';

export default (req, res) => {
  res.statusCode = 200;
  res.json(json);
}
