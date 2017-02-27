var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');


var Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: 'paused'
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                   // console.log("case started");
                    this.startTimer();
                    break;
                case 'stopped':
                   // console.log("case stopped");
                     this.setState({ count: 0 });
                case 'paused':
                    //console.log("case paused");
                     clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
     componentWillUnmount: function () {

        clearInterval(this.timer);
        this.timer = undefined;
    },

    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount,
            });
        }, 1000);
    },

    // getDefaultProps: function () {
    //     return {
    //         count: 10,
    //         countdownStatus: 'paused'
    //     };
    // },

    handleStatusChange: function (newStatus) {
        this.setState({ countdownStatus: newStatus });
    },


    render() {
        var {count, countdownStatus} = this.state;
        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count} />
                <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
            </div>
        );
    }
});

module.exports = Timer;