/** @jsx React.DOM */
var people = ['Jason', 'David'];

React.renderComponent(
  Avatar({people: people}),
  document.getElementById('cbleft')
);
