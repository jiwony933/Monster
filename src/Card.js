import React from "react";
import styled from "@emotion/styled";

const Card = ({ name, email, phone, id }) => {
    return (
        <CardContainer>
            <img
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                alt="이미지오류"
            />
            <Name>{name}</Name>
            <Info>{phone}</Info>
            <Info>{email}</Info>
        </CardContainer>
    );
};

export default Card;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    text-align: center;
    padding: 10px;

    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const Name = styled.span`
    font-size: 16px;
    font-weight: 600;
`;
const Info = styled.span`
    font-size: 14px;
`;
