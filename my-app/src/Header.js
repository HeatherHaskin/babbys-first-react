import React from 'react';
import './Header.css';

const HeaderNavItem = props => {
    let label = props.label
    return (
      <li>
        <a href="#">{label}</a>
      </li>
    )
}
const HeaderContainer = props => {
  let listitems = []
  console.log(props.num)
  for (let i=0; i<props.num.length; i++) {
    console.log(props.num[i])
    listitems.push(<HeaderNavItem label={props.num[i]} />)
  }
  return (
    <ul className="header-container">
      {listitems}
    </ul>
  )
}



export default HeaderContainer;
