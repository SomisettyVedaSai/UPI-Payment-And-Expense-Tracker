const { use } = require('bcrypt/promises');
const model = require('../model/schema.js');
const bcrypt = require('bcrypt');
const path = require('path');

function signuphandler2(req, res) {
  res.sendFile(path.join(__dirname, '../views/signup.html'));
}
async function signuphandler(req, res) {
  const { Accountholder, Email, Password, Accountnumber, Phonenumber, amount } = req.body;
  const originalpassword = Password;
  const user = await model.findOne({ Email: Email });
  if (!(user == null)) {
    res.send("User already present ")
  }
  else {

    try {
      const hashedPassword = await bcrypt.hash(originalpassword, 10);
      await model.create({
        Accountholder,
        Email,
        Password: hashedPassword,
        Accountnumber,
        Phonenumber,
        deposit: amount,
      });
      res.redirect("/pay/signin");
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).send("Error creating user");
    }
  }
}

module.exports = { signuphandler, signuphandler2 }; 