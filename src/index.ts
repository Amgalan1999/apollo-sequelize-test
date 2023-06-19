import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import express, { Application } from "express"
import http from "http"
import cors from "cors"
import bodyParser from "body-parser";
import morgan from "morgan";
import "dotenv/config"

import typeDefs from "./schema/typeDefs";
import resolvers from "./schema/resolvers";
import { connectionDb } from "./database";
// import { getAuthorizedSchema, upperDirectiveTransformer } from "./directives";

const { PORT } = process.env;

(async () => {
    let schema = makeExecutableSchema({
        typeDefs,
        resolvers
    })

    const app: Application = express()
    const httpServer = http.createServer(app)

    // schema = getAuthorizedSchema(schema, "auth")
    // schema = upperDirectiveTransformer(schema, "auth")

    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    })

    await connectionDb()

    await server.start()

    app.use(morgan('dev'), cors(), bodyParser.json(), express.urlencoded({ extended: true }), bodyParser.urlencoded({ extended: true }), expressMiddleware(server, {
        context: async () => {
            return {
                "username": "hawkeye",
                "type": "employee",
                "roles": [],
                "iat": 1654104898,
                "exp": 1656696898
            }
        }
    }))


    await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
})();