var React = require('react');

var CountdownForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;


        console.log('inputcount',$('input').length);

        if (strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = "";
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    },
    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time" />
                    <button className="button expanded">Start</button>


                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;