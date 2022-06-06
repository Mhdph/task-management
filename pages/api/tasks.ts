import { ApolloServer } from "apollo-server-micro";
import { resolvers } from "../../graphql/resolvers";
import { schema } from "../../graphql/schema";
import Cors from "micro-cors";
import { createContext } from "../../graphql/context";

const cors = Cors();

const apolloServer = new ApolloServer({
  resolvers,
  schema,
  context: createContext,
});

const startServer = apolloServer.start();

export default cors(async function handler(req: any, res: any) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({ path: "/api/tasks" })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
