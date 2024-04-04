import styled from "styled-components";
const Home = (props) => {
    return (
        <Container>
            <div>
                <img src="https://pngimg.com/d/dice_PNG74.png" alt="reload" />
            </div>
            <div className="content">
                <h1>DICE GAME</h1>
                <Button onClick={props.toggle}>Start Game</Button>
            </div>
        </Container>
    )
}
export default Home;

const Container = styled.div`
    max-width: 1000px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    gap: 80px;
    img{
        width: 90%;
        height: 50vh;
        padding: 20px;
    }
    .content h1{
        font-size: 80px;
        white-space: nowrap;
        font-family: Arial, Helvetica, sans-serif;
    }
`
const Button = styled.button`
    background-color: black;
    color: white;
    width: 200px;
    height: 40px;
    border: transparent;
    border-radius: 10px;
    font-size: 18px;
    transition: all ease-in-out 1s;
    box-shadow: 10px 10px 5px gray;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: all ease-in-out 1s;
        box-shadow: 10px 10px 20px black;
    }
`