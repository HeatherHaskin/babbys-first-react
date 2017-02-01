import React /*, { Component }*/ from 'react';
import './Header.css';

// class HeaderContainer extends Component {
//   render() {
//     return (
//       <div className="header-container">
//         <h1>Hello, I'm a header!</h1>
//         <h3>{this.props.children}</h3>
//       </div>
//     );
//   }
// }

const HeaderNavItem = props => {
    return (
      <li>
        <a href="#">Link</a>
      </li>
    )
}
const HeaderContainer = props => {
  let listitems = []
  for (let i=0; i<props.num; i++) {
    listitems.push(<HeaderNavItem name="name"/>)
  }
  console.log(listitems)
  return (
    <ul className="header-container">
      {listitems}
    </ul>
  )
}



export default HeaderContainer;
