
const { default: mongoose } = require("mongoose");

//DataBase Connections

const CONNECT_STR = 
"mongodb+srv://saravanaravi95:wi2iSD2aj5oLsZEQ@cluster0.f4oom.mongodb.net/Movie_Review&Rateings?retryWrites=true&w=majority&appName=Cluster0";

//Connection Function

const connectDB = () => {
mongoose.connect(CONNECT_STR)
.then(() => {
    console.log("Successfully Connected to DataBase");
})
.catch((error) => {
    console.log(`Error Occured: ${error}`);
});
};

module.exports = connectDB;