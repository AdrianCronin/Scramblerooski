const { AuthenticationError } = require("apollo-server-errors");
const { User} = require("../models")
const {signToken} = require("../utils/auth");
const { fetchMovie } = require("../utils/helpers");

const resolvers = {

    Query: {
        
    },

    Mutation: {
        
    }
}

module.exports = resolvers