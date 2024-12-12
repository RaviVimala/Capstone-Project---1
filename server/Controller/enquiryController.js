
//Creating Controller

const List_of_Movies = require ('../Model/enquirymodel');


const getAllEnquiries = async (req, res) => {
const MoviesList = await List_of_Movies.find({});
    res.status(200).json(MoviesList);
}; 

const getEnquiries = async (req, res) => {
    const {id} = req.params;
const MovieList = await List_of_Movies.findById(id);
    res.status(200).json(MovieList);
};

const createEnquiry = async (req, res) => {  
    const {MovieName, Hero, Timeing, MovieStatus} = req.body;  
    const MovieList = await List_of_Movies.create({ MovieName, Hero, Timeing, MovieStatus });  
    res.status(200).json(MovieList);  
};


module.exports = {
    getAllEnquiries,
    getEnquiries, createEnquiry
};