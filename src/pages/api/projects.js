import json from '../../../public/resources/projects.json';

export default (req, res) => {
  res.statusCode = 200;
  res.json(json);
}
