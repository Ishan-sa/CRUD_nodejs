/* const mongoose = require('mongoose');

// Connect to the database
const DATABASE_URL = process.env.DATABASE_URL;
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

// establish connection
const dbConnect = () => {
    mongoose.connect(DATABASE_URL, config)
}

// events for connections
mongoose.connection
    .on('open', () => console.log('Connected to Mongoose💀💀💀'))
    .on('close', () => console.log('Disconnected from Mongoose💀💀💀'))
    .on('error', (error) => console.log(error))

// export connection
module.exports = { dbConnect }; */