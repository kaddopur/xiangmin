/** @jsx React.DOM */
var Episode = React.createClass({
  render: function(){
    var pageNodes = this.props.episode.pages.map(function(page){
      return (
        <Page page={page} />
      );
    });
    return (
      <div>
        <h1>{this.props.episode.comic.name} {this.props.episode.name}</h1>
        <div className="episode">
          {pageNodes}
        </div>
      </div>
    );
  }
});

var Page = React.createClass({
  render: function(){
    return (
      <img src={this.props.page} />
    );
  }
});