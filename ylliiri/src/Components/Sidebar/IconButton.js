import React from "react";

import { FaBars } from "react-icons/fa";
import { CloseIcon, SidebarRoutee } from "./SidebarElements";

class IconButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardView: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      button: !this.state.button,
    });
  }

  render() {
    return (
      <SidebarRoutee
        className="Changeforside"
        onClick={() => this.setState({ isCardView: !this.state.isCardView })}
      >
        {this.state.isCardView ? <CloseIcon /> : <FaBars />}
        &nbsp;&nbsp;
      </SidebarRoutee>
    );
  }
}
export default IconButton;

// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <IconButton />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App/>,document.getElementById('root'));
