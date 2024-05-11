import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectContext } from "@/provider/Project";
import { ProviderState } from "@/types/provider.interface";
import Login from "@/pages/Login";
import Main from "@/pages/Main";
import Favorites from "@/components/Cards/CardFavorite";
import Header from "@/components/Header/Header";

function App() {
  const { isValid } = useContext(ProjectContext) as ProviderState;
  return (
    <BrowserRouter>
      {isValid && <Header />}
      <Routes>
        <Route path="/" element={isValid ? <Main /> : <Login />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
