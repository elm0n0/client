import React from "react";
import "./css/App.css";
import "./css/form.css";
import { Routes, Route } from "react-router-dom";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import ColectionDetails from "./pages/CollectionDetails/CollectionsDetails";
import IndexPage from "./pages/IndexPage/IndexPage";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/galeria" element={<CollectionPage />} />
        <Route path="/detalles/:collection_id" element={<ColectionDetails />} />
      </Routes>
    </div>
  );
}

export default App;
