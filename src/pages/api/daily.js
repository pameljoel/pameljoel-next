import json from '../../../public/resources/daily.json';

export default (req, res) => {
  res.statusCode = 200;
  res.json(json);
}
