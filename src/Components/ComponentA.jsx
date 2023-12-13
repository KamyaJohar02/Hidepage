import PropTypes from 'prop-types'
import styled from 'styled-components'

const ComponentA = ({handleClick}) => {
  return (
    <AContainer>
      <p> This is component A</p>
      <button onClick={handleClick}>Component B</button>
      </AContainer>
  )
}
ComponentA.propTypes = {
    handleClick: PropTypes.func.isRequired,
  };
export default ComponentA

const AContainer = styled.div `
 align-items:center;
 margin-top:200px;


button{
    display:flex;
    background-color:black;
    color:white;
    border:2px solid white;
    border-radius:5px;
    font-size:24px;
    align-items:center;
    font-family: sans-serif;
    transition:0.5s ease-in;
    &:hover{
        background-color:white;
        color:black;
        border:2px solid black;
        border-radius:5px;
        
    }

  
  
}



`;


