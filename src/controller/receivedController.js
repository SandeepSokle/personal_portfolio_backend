const receivedMessage = require("../Models/receiveMessageModel");

const getMessage = async (req, res, next) => {
  try {
    const message = await receivedMessage.find();
    if (!message) {
      throw "Resume not found!!";
    }
    res.status(200).send(message);
  } catch (err) {
    res.status(400).send(err);
  }
};

const sendMessage = async (req, res, next) => {
  const data = req.body.data;
  try {
    // console.log(data);
    const message = await receivedMessage.create(data);
    if (!message) {
      throw "Resume not found!!";
    }
    console.log("message !!", message);
    res.status(200).send(message);
  } catch (err) {
    res.status(400).send(err);
  }
};

const deleteMessage = async (req, res, next) => {
  const id = req.params.id;
  // const { userData, userSecret } = req.body.secret;
  // const existUser = await users.findOne({ email: "sandeepsokle12@gmail.com" });
  // const secretData = await secretKey.findOne();

  try {
    //   if (
    //     userData.name !== existUser.displayName ||
    //     userData.uid !== existUser.uid ||
    //     userData.email !== existUser.email
    //   ) {
    //     if (secretData.secretKey !== userSecret) {
    //       console.log("secret Key not match!!");
    //       throw { message: "Unauthorized User!!" };
    //     } else {
    //       console.log("secretKey match!!");
    //     }
    //   } else {
    //     console.log("name match!!");
    //   }
    const message = await receivedMessage.findOneAndDelete({ _id: id });
    if (!message) {
      throw { message: "Message not found!!" };
    }
    res.status(200).send(message);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { getMessage, sendMessage, deleteMessage };
