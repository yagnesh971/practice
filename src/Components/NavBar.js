import React from 'react';
import ReactDOM from 'react-dom';
function NavBar(user) {
    return user.firstName + '' + user.lastName;
}
const user = {
    firstName: "Yagnesh",
    lastName: "Vullam"
};
const element = (
    <h1>
        Hello, {NavBar(user)}!
  </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);
export default NavBar;
