import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CollectionPage.css'

const CollectionPage = () => {

    const [coleccion, setColeccion] = useState([])

    useEffect(() => {
        fetch('http://localhost:5005/api/colection')
        .then(res => 
            res.json())
        .then(allCollections => setColeccion(allCollections))
        .catch(err => {
            console.log(err);
        })
    }, [])
    
    return (
       <main>
           <h1>lista de Coleccion</h1>
           {
               coleccion.map(eachColeccion => {
                   return (
                       <Link key={eachColeccion._id} to={`/detalles/${eachColeccion._id}`}>
                        <article className='colecion-card'>
                            <h1>{eachColeccion.nombre}</h1>
                            <h1>{eachColeccion.apellidos}</h1>
                        </article>
                       </Link>
                   )
               })
           }
           <Link to="/">volver al inicio</Link>
       </main>
    )
}

export default CollectionPage;