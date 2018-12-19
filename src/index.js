const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Query {
    info: String!
  }
`;

const resolvers = {
  Query: {
    info: () => 'Yay! Just made my first GraphQL API!!',
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server running on localhost: 4000' ));
