require('dotenv').config();
const {ApolloServer} = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone");
const { Schema } = require("./graphql/Schema");
const connectDB = require('./db');
const userModel = require("./models/users");

const port = 8000;
connectDB();
const server = new ApolloServer({
    typeDefs:Schema,
    resolvers:{
        Query:{
            hello : () => "Hello World!",
            users: async () => {
                const users = await userModel.find();
                console.log(users);
                return users
                
            }
        }
    }
});


startStandaloneServer(server, {listen:port}).then(()=>{
    console.log(`Apollo Server is start at port ${port}`);
}).catch((err)=>{
    console.log(err);
})

