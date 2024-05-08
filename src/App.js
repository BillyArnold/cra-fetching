import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import fetchDucks from "./actions/fetchDucks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Ducks from "./components/Ducks";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Ducks />
    </QueryClientProvider>
  );
}

export default App;
