var React = require("react");
var {IndexLink,Link}=require('react-router');


var Nav = React.createClass({
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer</li>
                        <li><IndexLink to="/" activeClassName="active-link" >Timer</IndexLink></li>
                        <li> <Link to="/countdown" activeClassName="active-link" > Countdown</Link> </li>
                
                    </ul>
                </div>
                <div className="top-bar-right">

                </div>
            </div>
        );
    }
});

module.exports = Nav;
