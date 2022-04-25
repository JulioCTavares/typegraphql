import { buildSchema } from "type-graphql";
import { TaskResolver } from "../resolvers/Task";

const schema = async () => await buildSchema({
  resolvers: [TaskResolver],
  validate: false,
})

export default schema;