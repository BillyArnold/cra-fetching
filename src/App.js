import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Ducks from "./components/Ducks";
import DucksNoTanstack from "./components/DucksNoTanstack";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Ducks />
      <DucksNoTanstack />
    </QueryClientProvider>
  );
}

export default App;
