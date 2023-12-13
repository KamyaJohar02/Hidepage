import PropTypes from 'prop-types'
import styled from 'styled-components';

const ComponentB = ({handleClick}) => {
  return (
    <BContainer>
      <p> This is component B</p>
      <button onClick={handleClick} >Component A</button>  
      </BContainer>
  )
}
ComponentB.propTypes = {
    handleClick: PropTypes.func.isRequired,
  };
export default ComponentB

const BContainer = styled.div `
 align-items:center;
 margin-top:200px;


button{
    display:flex;
    background-color:blue;
    color:white;
    transition:0.5s ease-in;
    border-radius:5px;

    font-size:24px;
    align-items:center;
    font-family: sans-serif;
    &:hover{
        background-color:red;
        color:white;
        
        
    }}
    `;