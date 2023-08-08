## about
This is an Apollo Server implementation integrated with a MongoDB database and Express.js middleware for authentication. The entire project is written using TypeScript, which provides strong typing and enhanced developer experience.

Apollo Server serves as a powerful GraphQL server that facilitates the communication between clients and the server through a well-defined schema. The integration with MongoDB, a widely-used NoSQL database, enables efficient data storage and retrieval for your application.

Express.js, a popular web application framework for Node.js, is employed as middleware to handle authentication. This ensures that incoming requests are properly authenticated before they reach the GraphQL layer. This security layer is essential for maintaining the integrity of your application and protecting sensitive data.

By utilizing TypeScript, the development process becomes more robust and maintainable. TypeScript introduces static typing to JavaScript, catching potential errors during development and enhancing code readability. With the power of Apollo Server, MongoDB, Express.js, and TypeScript combined, you can create a scalable, secure, and well-structured backend for your application.

## how to run 

1. first you need to setup all dependencies, for this use npm or yarn (all instructions will be shown with yarn)
```cmd
yarn
```
2. run the docker compose file for mongo cluster
```cmd
docker compose up
```
4. copy and create new `.env` file from `.env.example`
5. open new terminal and run the application 
```cmd
yarn dev
```
6. go to browser and open url `http://localhost:4000/graphql`
7. have a good day ) 

## aditional info 
1.if you want to check commands look at `package.json` file `scripts section`
2. if you want to use this setup just fork but don't forget to mention my github username into your repositpry 
