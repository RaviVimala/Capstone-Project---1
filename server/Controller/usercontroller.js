
const userscredentials = require('../Model/usermodel');

const createUser = async (req, res) => {
    const {UserName, Mail_ID, Password} = req.body;
    const userdetails = await userscredentials.create({ UserName, Mail_ID, Password });
    res.status(200).json(userdetails);
};

module.exports= { createUser };

