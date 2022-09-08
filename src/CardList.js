import styled from "@emotion/styled";
import React, { useState } from "react";

import Card from "./Card";
import Detail from "./Detail";

const CardList = ({ item }) => {
    const [clicked, setClicked] = useState();
    const handleCardClick = (id) => {
        setClicked(item.find((el) => el.id === id));
    };
    return (
        <CardListContainer>
            {item.map((monster) => (
                <Card
                    name={monster.name}
                    id={monster.id}
                    phone={monster.phone}
                    email={monster.email}
                    key={monster.id}
                    image={monster.image}
                    onClick={() => handleCardClick(monster.id)}
                    clicked={clicked}
                    setClicked={setClicked}
                />
            ))}
            {clicked && <Detail clicked={clicked} setClicked={setClicked} />}
        </CardListContainer>
    );
};

export default CardList;

const CardListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 160px;
    gap: 10px;
    width: 100%;
`;
// address: {street: 'Victor Plains', suite: 'Suite 879', city: 'Wisokyburgh', zipcode: '90566-7771', geo: {…}}
// company: {name: 'Deckow-Crist', catchPhrase: 'Proactive didactic contingency', bs: 'synergize scalable supply-chains'}
// email: "Shanna@melissa.tv"
// id: 2
// name: "Ervin Howell"
// phone: "010-692-6593 x09125"
// username: "Antonette"
// website: "anastasia.net"
