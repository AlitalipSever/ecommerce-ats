import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {blue, blueGrey} from "@mui/material/colors";

const Container = styled.div` 
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.directionArrow === "left" && "10px"};
  right: ${props => props.directionArrow === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`

const Wrapper = styled.div`
    height: 100%;
  display: flex;
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%; 
  flex: 1;
`;

const Image98 = styled.img`
    height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
    return (
        <Container>
            <Arrow directionArrow="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper>
                <Slide bg="f5fafd">
                <ImgContainer>
                    <Image98 src="https://www.carhartt-wip.com/binaries/content/gallery/pagetypes/looks/detail/women/2022ss/ss22-lookbook-women-01.jpg/ss22-lookbook-women-01.jpg/carhartt%3Alooksbigimage" />
                </ImgContainer>
                <InfoContainer>
                    <Title>WINTER SALE</Title>
                    <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                </Slide>
                <Slide bg="fcf1ed">
                    <ImgContainer>
                        <Image98 src="https://www.carhartt-wip.com/binaries/content/gallery/pagetypes/looks/detail/women/2022ss/ss22-lookbook-women-02.jpg/ss22-lookbook-women-02.jpg/carhartt%3Alooksbigimage" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>WINTER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="fbf0f4">
                    <ImgContainer>
                        <Image98 src="https://www.carhartt-wip.com/binaries/content/gallery/pagetypes/looks/detail/women/2022ss/ss22-lookbook-women-03.jpg/ss22-lookbook-women-03.jpg/carhartt%3Alooksbigimage" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>WINTER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper> 
            <Arrow directionArrow="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon/>
            </Arrow>
        </Container>
    )
}

export default Slider