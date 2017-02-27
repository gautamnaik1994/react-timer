var React = require('react');
var Nav=require('Nav');

var Main = (props) => {
    return (
        <div>
         <Nav/>
            <div className="row">
                <div className="colums small-centered medium-6 large-4">
                    {props.children}
                </div>
            </div>
        </div>

    );

};

module.exports = Main;