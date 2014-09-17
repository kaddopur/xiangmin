/** @jsx React.DOM */
var Episode = React.createClass({displayName: 'Episode',
  render: function(){
    var pageNodes = this.props.episode.pages.map(function(page){
      return (
        Page({page: page})
      );
    });
    return (
      React.DOM.div(null, 
        React.DOM.h1(null, this.props.episode.comic.name, " ", this.props.episode.name), 
        React.DOM.div({className: "episode"}, 
          pageNodes
        )
      )
    );
  }
});

var Page = React.createClass({displayName: 'Page',
  render: function(){
    return (
      React.DOM.img({src: this.props.page})
    );
  }
});