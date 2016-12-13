module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : '_Sure_ you are, ' + userName + '... ' + 'http://d.ibtimes.co.uk/en/full/1419893/orthodox-epiphany.jpg'
  };

  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
