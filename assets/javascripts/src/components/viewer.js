/** @jsx React.DOM */
var Avatar = React.createClass({
  render: function(){
    var peopleGreetings = this.props.people.map(function(person){
      return (
        <h1>Hello, {person}!</h1>
      );
    });
    return (
      <div>{peopleGreetings}</div>
    );
  }
});