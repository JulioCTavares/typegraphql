import 'reflect-metadata';
import express, { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import schemaFn from './schemas';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import createConnection from './typeorm';


const main = async () => {
  createConnection();
  const schema = await schemaFn();
  const apolloServer = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
  });

  await apolloServer.start()
  
  const app: Express = express();
  const PORT = process.env.PORT || 5000;

  apolloServer.applyMiddleware({ app });
  
  app.get('/', (_req, res) => {
    return res.json({msg: "Hello world"})
  })

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
}

main().catch((err) => console.error(err))