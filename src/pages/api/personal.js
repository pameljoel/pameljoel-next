import json from '../../../public/resources/education.json';

export default (req, res) => {
  res.statusCode = 200;
  res.json(json);
}
