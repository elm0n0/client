import React from 'react';
import './App.css'
import {Routes, Route} from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage'
import CollectionPage from './pages/CollectionPage/CollectionPage'
import ColectionDetails from './pages/CollectionDetails/CollectionsDetails'


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/galeria" element={<CollectionPage/>} />
        <Route path="/detalles/:collection_id" element={ <ColectionDetails/>} />
      </Routes>
    </div>
  );
}


export default App;
