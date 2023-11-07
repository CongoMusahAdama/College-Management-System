const {gql}= require("apollo-server");

const typeDefs= gql`
  type Student{
      id:ID!
      email: String!
      fullName: String!
      dept: String!
      enrolled: Boolean
 }

  type Query{
      enrollment: [Student!]
      students:[Student!]! # MAKING THE TYPE STUDENT REQUIRED
      student(id:ID!):Student
 }


  type Mutation{
   registerStudent(email:String!, fullName:String!, dept: String!): Student! #INSERTING A NEW DB
   enrolled(id:ID!):Student
   deleteStudent(id:ID!):Student!
 },

 type UserSuccessfulResult{
            users:[User!]!
   }
    
  type UserErrorResult{
            message: String!
   }
     
   Union UserResult= UserSuccessfulResult | UserErrorResult

 `
 module.exports={typeDefs};
   