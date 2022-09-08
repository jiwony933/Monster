import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

import CardList from "./CardList";

const Monsters = () => {
    const [monsters, setMonsters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [copy, setCopy] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setMonsters(data);
            setCopy(data);
        };
        fetch();
    }, []);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        setMonsters(
            copy.filter((e) =>
                e.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    return (
        <Container>
            <Title>몬스터를 검색하세요!</Title>
            <Search placeholder="검색 ..." onChange={handleInputChange} />
            <CardList item={monsters} />
        </Container>
    );
};

export default Monsters;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aliceblue;
    width: 100vw;
    height: 100vh;
    text-align: center;
    padding: 10px;
`;

const Title = styled.h1`
    color: navy;
`;

const Search = styled.input`
    all: unset;
    background-color: white;
    width: 500px;
    height: 50px;
    margin-bottom: 40px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
