const {ApolloServer}= require("apollo-server");

const{typeDefs}= require("../SCHEMA/type-defs");
const{resolvers}= require("../SCHEMA/resolvers");
const{resolvers}= require("../SCHEMA/database");



const server= new ApolloServer ({typeDefs, resolvers});


server.listen().then(({url})=>{
    console.log("YOUR API IS RUNING AT: ${url}:)");
});

