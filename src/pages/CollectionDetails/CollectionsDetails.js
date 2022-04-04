import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CollectionDetails = () => {

    const {collection_id} = useParams();

    const [collection, setColection] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5005/api/colection/detail/${collection_id}`)
        .then(res => res.json())
        .then(collection => setColection(collection))
        .catch(err => {
            console.log(err);
        })
    }, [])
    
    return (
       <main>
           <h1>detalle de Coleccion {collection.nombre}</h1>
           <Link to="/galeria">volver a la galeria</Link>
       </main>
    )
}

export default CollectionDetails;