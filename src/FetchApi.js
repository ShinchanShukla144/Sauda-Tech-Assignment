import React, { useEffect, useState } from "react";

const FetchApi = () => {
    const [characters, setCharacters] = useState([]);

    const getChar = async () =>{
        const response = await fetch('https://api.sampleapis.com/futurama/characters');
        setCharacters(await response.json());
    }

    useEffect(() => {
        getChar();
    },[]);
    return(
        <div>
            <h1>Welcome To Futurama characters</h1>
            <div>
                {
                    characters.map((char) => {
                        return(
                            <div className="container">
                                <img src={char.images.main} />
                                <h4>Name: {char.name.first} {char.name.middle} {char.name.last}</h4>
                                <div>
                                Gender: {char.gender}<br/>
                                Species: {char.species}<br/>
                                Home-Planet: {char.homePlanet}<br/>
                                Occupation: {char.occupation}<br/>
                                <p>Some Thought's: {char.sayings}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FetchApi