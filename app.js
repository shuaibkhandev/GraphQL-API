const {ApolloServer} = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone");

const port = 8000;

const server = new ApolloServer({
    typeDefs:`type Query{hello:String!, age:String!}`,
    resolvers:{
        Query:{
            hello : () => "Hello World!",
            age : () => "24"
        }
    }
});


startStandaloneServer(server, {listen:port}).then(()=>{
    console.log(`Apollo Server is start at port ${port}`);
}).catch((err)=>{
    console.log(err);
})

