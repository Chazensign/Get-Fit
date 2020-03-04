import React from 'react'
import styled from 'styled-components'

function AppButton(props) {
 
  return ( 
    <Button disabled={props.disbled ? props.disbled : false} onClick={props.onClick}>{props.name}</Button>
   )
}
 
export default AppButton

const Button = styled.button`
  box-shadow: inset 0px 1px 3px 0px #91b8b3;
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  background-color: #768d87;
  border-radius: 5px;
  border: 1px solid #566963;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 15px;
  margin: 10px;
  text-decoration: none;
  text-shadow: 0px 0px 2px #000000;
  :hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }
  :active {
    position: relative;
    top: 1px;
  }
`