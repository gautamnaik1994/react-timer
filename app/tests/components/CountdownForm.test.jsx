var expect = require('expect');
var React = require('react');
var reactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('shoulds call on setcoundaown if valid entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        var $el = $(reactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = "109";
        TestUtils.Simulate.submit($el.find('form')[0]);


        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onsetcoundaown if invalid entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        var $el = $(reactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = "109b";
        TestUtils.Simulate.submit($el.find('form')[0]);


        expect(spy).toNotHaveBeenCalled();
    });
});
