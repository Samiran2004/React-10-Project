import styled from "styled-components";

function Selectnumber({ selectedNumber, handleNumberClick }) {
    const numberArr = [1, 2, 3, 4, 5, 6];

    return (
        <Selectnumbercontainer>
            {numberArr.map((value, index) => (
                <ButtonContainer key={index} onClick={() => handleNumberClick(value)} style={{ backgroundColor: selectedNumber === value ? "white" : "black", color: selectedNumber === value ? "black" : "white" }}>
                    <h2>{value}</h2>
                </ButtonContainer>
            ))}
        </Selectnumbercontainer>
    );
}

export default Selectnumber;

const Selectnumbercontainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const ButtonContainer = styled.div`
    border: 1.2px solid black;
    margin-top: 10px;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all .5s ease-in-out;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: black;
        transition: all .5s ease-in-out;
    }
`;
