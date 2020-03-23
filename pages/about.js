import React from 'react';

export default () => (
    
        <>
        <img src="/logo-nobg.png" alt="TuTendero.com"></img>
        <h2>Creado por </h2>
        <p>Proyecto Emprendimieto </p>
        <style jsx>{`
               
            img {
                max-width: 50%;
                display: block;
                margin: 0 auto;
            }
            p, h2 {
                color: white;
                text-align:center
            }
            `}</style>


        <style jsx global>{`
            body {
                background: #938D8B;
            }
            `}</style>
        </>
);