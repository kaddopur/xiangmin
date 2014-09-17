/** @jsx React.DOM */
var Viewer = React.createClass({displayName: 'Viewer',
  render: function() {
    return (
      React.DOM.div({className: "viewer"}, 
        ActionBar({episode: this.props.episode}), 
        Episode({episode: this.props.episode})
      )
    );
  }
});

var ActionBar = React.createClass({displayName: 'ActionBar',
  render: function() {
    return (
      React.DOM.div({className: "action-bar"}, 
        React.DOM.span({className: "action-icon action-icon-nav"}, React.DOM.i({className: "fa fa-navicon"})), 
        React.DOM.span({className: "text-title"}, this.props.episode.comic.name, " ", this.props.episode.name)
      )
    );
  }
});

var Episode = React.createClass({displayName: 'Episode',
  render: function(){
    var pageNodes = this.props.episode.pages.map(function(page){
      return (
        Page({page: page})
      );
    });
    return (
      React.DOM.div({className: "episode"}, 
        pageNodes
      )
    );
  }
});

var Page = React.createClass({displayName: 'Page',
  render: function(){
    return (
      React.DOM.div({className: "page"}, 
        React.DOM.img({src: this.props.page})
      )
    );
  }
});