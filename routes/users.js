import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a list of all users');
});

router.get('/time', function(req, res) {
  res.send(new Date().toString());
});

router.get('/info', function(req, res) {
  res.type('json');
  res.send({ id: 1, name: 'me' });
});

router.get('/broken', function(req, res) {
  res.status(500).send('Oh no! Cat got into my server');
});

router.get('/1', function(req, res, next) {
  res.send('respond with info about user 1');
});

export default router;
