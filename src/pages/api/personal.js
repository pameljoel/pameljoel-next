import json from '../../../public/resources/personal.json';

export default (req, res) => {
  res.statusCode = 200;
  res.json(json);
}
