import React, { useState } from 'react';
import Header from "./Header";
import Welcome from "./Welcome";
import Location from "./Location";
import Formulario from './Formulario';
import Cards from './Cards';

function Home() {
    const [usuarios, setUsuarios] = useState([]);

    const handleCadastro = (usuario) => {
        setUsuarios([...usuarios, usuario]);
    };

    return (
        <div>
            <Header />
            <Welcome name={"Larissa"} />
            <Location />

            <div className="home-container">
                <div className="cards-container">
                    <Cards usuarios={usuarios} />
                </div>
                <div className="forms-container">
                    <Formulario onCadastro={handleCadastro} />
                </div>
            </div>
        </div>
    );
}

export default Home;