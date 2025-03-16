const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const User = require('./models/user');
const Cart = require('./models/Cart');
const products = require('./data/products');

dotenv.config();

//connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

//Function to seek the data
const seedData = async () => {
    try{
        //clear existing data
        await Product.deleteMany();
        await User.deleteMany();
        await Cart.deleteMany();

        //create a default admin user
        const createdUser = await User.create({
            name: "Admin User",
            email: "admin@example.com",
            password: "123456",
            role: "admin",
        });

        // Assign the default userID to the products
        const userID = createdUser._id;

        const sampleProducts = products.map((product) => {
            return {...product, user: userID};
        });

        //insert the sample products
        await Product.insertMany(sampleProducts);

        console.log("Data Seeded Successfully!");
        process.exit();

    } catch (error) {
        console.error("Data Seeding Failed", error);
        process.exit(1);

    }
};

seedData();
