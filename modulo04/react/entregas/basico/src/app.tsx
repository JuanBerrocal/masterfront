import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListContext, ListContextProvider } from "./list-context";
import {ListPage} from "./list";
import { DetailPage } from "./detail";
import { RickMortyPage } from "./rickmorty";
import { RickMortyDetailPage } from "./rickmorty-detail";

export const App = () => {
  return (
    <Router>
      <ListContextProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/rickmorty" element={<RickMortyPage />} />
        <Route path="/rickmortydetail/:id" element={<RickMortyDetailPage />} />
      </Routes>
      </ListContextProvider>
    </Router>
  );
};
