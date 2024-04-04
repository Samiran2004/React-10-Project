import styled from "styled-components";
function Totalscore(props) {
    return (
        <Container>
            <h1>{props.totalScore}</h1>
            <p>Total Score</p>
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    h1{
        font-size: 55px;
    }
`

export default Totalscore;