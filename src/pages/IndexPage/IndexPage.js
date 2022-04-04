import React from 'react';
import { Link } from 'react-router-dom';
const IndexPage = () => {
    return (
       <main>
           <h1>index</h1>
           <Link to="/galeria">ver galeria</Link>
       </main>
    )
}

export default IndexPage;