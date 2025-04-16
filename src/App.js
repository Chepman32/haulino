import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes"; // Import the routes configuration
import "./App.css"; // Keep global styles if needed
import "./components/NoHorizontalScroll.css"; // Global fix for horizontal scrolling
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";

const client = generateClient();

function App() {
  useEffect(() => {
    const createUserRecord = async () => {
      try {
        const { username, userId, signInDetails } = await getCurrentUser();
        if (userId) {
          // Check if user record exists
          const query = `
            query GetUser($id: ID!) {
              getUser(id: $id) {
                id
                email
              }
            }
          `;

          const variables = {
            id: userId,
          };

          const response = await client.graphql({
            query: query,
            variables: variables,
          });

          if (!response.data.getUser) {
            // Create user record if it doesn't exist
            const mutation = `
              mutation CreateUser($input: {id: ID!, email: String!}) {
                createUser(input: $input) {
                  id
                  email
                }
              }
            `;

            const createVariables = {
              input: {
                id: userId,
                email: signInDetails.loginId,
              }
            };

            await client.graphql({
              query: mutation,
              variables: createVariables,
            });

            console.log("User record created:", userId);
          } else {
            console.log("User record already exists:", userId);
          }
        }
      } catch (error) {
        console.error("Error creating user record:", error);
      }
    };

    createUserRecord();
  }, []);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <BrowserRouter>
          {/* You might want a Layout component here later */}
          <AppRoutes />
        </BrowserRouter>
      )}
    </Authenticator>
  );
}

export default App;
