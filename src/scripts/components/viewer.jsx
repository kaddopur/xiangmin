/** @jsx React.DOM */
var Viewer = React.createClass({
  render: function() {
    return (
      <div className="viewer">
        <ActionBar episode={this.props.episode} />
        <Episode episode={this.props.episode} />
      </div>
    );
  }
});

var ActionBar = React.createClass({
  render: function() {
    return (
      <div className="action-bar">
        <span className="action-icon action-icon-nav"><i className="fa fa-navicon"></i></span>
        <span className="text-title">{this.props.episode.comic.name} {this.props.episode.name}</span>
      </div>
    );
  }
});

var Episode = React.createClass({
  render: function(){
    var pageNodes = this.props.episode.pages.map(function(page){
      return (
        <Page page={page} />
      );
    });
    return (
      <div className="episode">
        {pageNodes}
      </div>
    );
  }
});

var Page = React.createClass({
  render: function(){
    return (
      <div className="page">
        <img src={this.props.page} />
      </div>
    );
  }
});