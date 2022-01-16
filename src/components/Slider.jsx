import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';



const Container = styled.div` 
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  position: relative;
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

const Slider = () => {
    return (
        <Container>
            <Arrow directionArrow="left">
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Arrow directionArrow="right">
                <ArrowRightOutlinedIcon/>
            </Arrow>
        </Container>
    )
}

export default Slider