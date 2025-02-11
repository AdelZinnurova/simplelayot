import './App.css'
import styled from "styled-components";
import myImage from './assets/Rectangle 1.png';


function App() {
    return (
        <div>
            <Box>
                <Picture src={myImage} alt="My Picture"/>
                <PageTitle>Headline</PageTitle>
                <PageText>Faucibus. Faucibus. Sit sit sapien sit <br/> tempusrisu ut. Sit molestie ornare in venen.</PageText>
                <BoxForBtn>
                    <SeeMoreBtn>See more</SeeMoreBtn>
                    <SaveBtn>Save</SaveBtn>
                </BoxForBtn>
            </Box>
        </div>
    )
}

export default App

const Box = styled.div`
    border-radius: 15px;
    width: 300px;
    height: 350px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: #fff;
    display: flex;
    flex-direction: column;
`

const Picture = styled.img`
    border-radius: 10px;
    width: 280px;
    height: 170px;
    margin: 10px;
`
const PageTitle = styled.h1`
    font-family: sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #000;
    margin: 10px 0 20px 20px;
`

const PageText = styled.p`
    font-family: sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 167%;
    color: #abb3ba;
    margin-left: 20px;
`

const BoxForBtn = styled.div`
    display: flex;
    gap: 12px;
`

const SeeMoreBtn = styled.button`
    border-radius: 5px;
    width: 86px;
    height: 30px;
    background-color: #4E71FE;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 10px;
    line-height: 200%;
    color: #fff;
    border: none;
    margin-left: 20px;
`

const SaveBtn = styled.button`
    border: 2px solid #4e71fe;
    border-radius: 5px;
    width: 86px;
    height: 30px;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 10px;
    line-height: 200%;
    color: #4e71fe;
`