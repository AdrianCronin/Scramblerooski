const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
        # token: String
        # success: Boolean
        # message: String
    }

    type User {
        # _id: ID
        # username: String!
    }

    # input HookQuestionFormat {
    #     questionText: String!
    #     userId: ID 
    # }

    type Query {
        # me: User
    }   

    type Mutation {

    }
`
module.exports = typeDefs;