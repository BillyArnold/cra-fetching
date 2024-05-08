import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Ducks from "./components/Ducks";
import DucksNoTanstack from "./components/DucksNoTanstack";
import DucksHook from "./components/DucksHook";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Ducks />
      <DucksNoTanstack />
      <DucksHook />
    </QueryClientProvider>
  );
}

export default App;
