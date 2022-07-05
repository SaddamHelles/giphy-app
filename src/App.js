import React from "react";
import Giphy from "./components/Giphy";
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";
const queryClient = new QueryClient();

function App() {
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <Giphy />
      </QueryClientProvider>
    </div>
  );
}

export default App;
