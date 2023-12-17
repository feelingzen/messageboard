var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'IM GONNA BE RICHHHHHH',
    user: 'Kayden',
    added: new Date()
  },
  {
    text: 'I\'m gonna be sooooo hott soon',
    user: 'Kayden',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form')
})

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.text, user: req.body.author, added: new Date()});
  res.redirect('/')
})

module.exports = router;
