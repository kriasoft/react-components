/**
 * @jsx React.DOM
 */

var React = require('react');

var Input = React.createClass({
  render() {
    return (
      <div className="input">
        <input type="text" />
      </div>
    );
  }
});

module.exports = Input;
