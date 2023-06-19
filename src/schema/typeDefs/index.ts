export default `#graphql
    type User {
        id: ID
        email: String
    }

    type Response {
        success: Boolean
        message: String
    }

    type Query {
        get_user: User
    }

    type Mutation {
        create_user(email: String!, password: String!): Response
        
        create_category(title: String!, description: String!, icon: String!): Response
        update_category(id: ID!, title: String, description: String, icon: String): Response
        delete_category(id: ID!): Response
    }
`