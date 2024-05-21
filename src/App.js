import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Ducks from "./components/Ducks";
import DucksNoTanstack from "./components/DucksNoTanstack";
import DucksHook from "./components/DucksHook";
import DucksSWR from "./components/DucksSWR";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchBar />
      <ProductList />
    </QueryClientProvider>
  );
}

export default App;
