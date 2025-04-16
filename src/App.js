import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes"; // Import the routes configuration
import "./App.css"; // Keep global styles if needed
import "./components/NoHorizontalScroll.css"; // Global fix for horizontal scrolling
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
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
