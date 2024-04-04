import React, { useState } from "react";
import styled from "styled-components";

function Dice({ diceNumber ,rollDice}) {


    const diceObj = {
        1: "https://static.thenounproject.com/png/1194695-200.png",
        2: "https://static.thenounproject.com/png/1194703-200.png",
        3: "https://www.svgrepo.com/show/320121/inverted-dice-3.svg",
        4: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
        5: "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
        6: "https://cdn.pixabay.com/photo/2014/04/03/10/24/dice-310333_1280.png"
    }
    return (
        <MainBox>
            <h1>Dice</h1>
            <img src={diceObj[diceNumber]} alt={`Dice ${diceNumber}`} />
            <Button onClick={rollDice}>Roll Dice</Button>
        </MainBox>
    );
}

export default Dice;

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 200px;
        height: 200px;
    }
`;
const Button = styled.button`
    margin-top: 30px;
    width: 150px;
    height: 50px;
    background-color: black;
    color: white;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
`