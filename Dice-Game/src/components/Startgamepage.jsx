import { useState } from "react";
import styled from "styled-components";
import Totalscore from "./Totalscore";
import Selectnumber from "./Selectnumber";
import Dice from "./Dice";

const Startgame = (props) => {
    const [selectedNumber, setSelectedNumber] = useState(1);
    const [totalScore, setTotalScore] = useState(0);
    const [diceNumber, setDiceNumber] = useState(1);
    const handleNumberClick = (value) => {
        setSelectedNumber(value);
    };
    const rollDice = () => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(randomNumber);
        if (randomNumber == selectedNumber) {
            setTotalScore(totalScore + selectedNumber);
        } else {
            setTotalScore(totalScore - selectedNumber);
        }
    };

    return (
        <MainBox>
            <Container>
                <Totalscore totalScore={totalScore} />
                <div className="content">
                    <Selectnumber selectedNumber={selectedNumber} handleNumberClick={handleNumberClick} />
                    <h1>Selected Number: {selectedNumber}</h1>
                </div>
            </Container>
            <div className="diceContainer">
                <Dice diceNumber={diceNumber} rollDice={rollDice} />
            </div>
        </MainBox>
    );
};

const Container = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    /* flex-direction: column; */
    .content{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const MainBox = styled.div`
    .diceContainer{
        margin-top: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default Startgame;
