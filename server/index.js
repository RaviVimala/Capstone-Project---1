
const express = require ('express');

const app = express()

const PORT = 3031 || 4041;

app.use(express.json());

const connectDB = require ('./Config/DB');
connectDB();

const routes = require('./routes');


app.use('/Movie_Review', routes);

app.listen(PORT, () => {
    console.log(`Listening 
        This Port number :${PORT}`);
});










