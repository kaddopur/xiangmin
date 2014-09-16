/** @jsx React.DOM */
var Avatar = React.createClass({displayName: 'Avatar',
  render: function(){
    var peopleGreetings = this.props.people.map(function(person){
      return (
        React.DOM.h1(null, "Hello, ", person, "!")
      );
    });
    return (
      React.DOM.div(null, peopleGreetings)
    );
  }
});