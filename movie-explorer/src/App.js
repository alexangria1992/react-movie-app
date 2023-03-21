import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./containers/MovieDetails";
import PopularMovies from "./containers/PopularMovies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopularMovies />}></Route>
        <Route path="/movie/:id" element={<MovieDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
