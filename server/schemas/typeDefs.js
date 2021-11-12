const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
        token: String
        success: Boolean
        message: String
    }

    type User {
        _id: ID
        username: String!
        admin: Boolean
    }

    # input HookQuestionFormat {
    #     questionText: String!
    #     userId: ID 
    # }

    type Query {
        me: User
    }   

    type Mutation {
        signup(username: String, password: String): Auth
        login(username: String, password: String): Auth
    }
`
module.exports = typeDefs;