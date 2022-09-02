import json from '../../../public/resources/months.json';

export default (req, res) => {
  res.statusCode = 200;
  res.json(json);
}
