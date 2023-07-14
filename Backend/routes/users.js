var express = require('express');
var router = express.Router();
const user = require("../model/users")
var cors = require("cors");
const mongoose = require("mongoose");
/* GET users listing. */
router.post('/createuser', async function(req, res, next) {
try {
  var body = req.body
  console.log(body,"body");
  await user.findOne({username : body.username}).exec(async (data, err) => {
    res.json({data:[err,data]})
    if (data == null) {
      var creation = await user.create(body);
      console.log(err,data)
      console.log(creation);
      res.send(creation)
    } else {
      res.send("err")
    }
    
  })
} catch (error) {
  res.send(error);
}
  
});

module.exports = router;
