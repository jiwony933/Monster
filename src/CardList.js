import styled from "@emotion/styled";
import React from "react";

import Card from "./Card";

const CardList = ({ item }) => {
    return (
        <CardListContainer>
            {item.map((monster) => (
                <Card
                    name={monster.name}
                    id={monster.id}
                    phone={monster.phone}
                    email={monster.email}
                    key={monster.id}
                />
            ))}
        </CardListContainer>
    );
};

export default CardList;

const CardListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    width: 100vw;
`;
// address: {street: 'Victor Plains', suite: 'Suite 879', city: 'Wisokyburgh', zipcode: '90566-7771', geo: {…}}
// company: {name: 'Deckow-Crist', catchPhrase: 'Proactive didactic contingency', bs: 'synergize scalable supply-chains'}
// email: "Shanna@melissa.tv"
// id: 2
// name: "Ervin Howell"
// phone: "010-692-6593 x09125"
// username: "Antonette"
// website: "anastasia.net"
