/** @jsx React.DOM */
var Viewer = React.createClass({
  componentDidMount: function(){
    $("img.lazy").lazyload({         
      effect : "fadeIn",
      threshold : 3000
    });
  },
  render: function() {
    return (
      <div className="viewer">
        <ActionBar episode={this.props.episode} />
        <Episode episode={this.props.episode} />
        <Fab nextEpisode={this.props.episode.nextEpisode} />
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
        <img className="lazy" data-original={this.props.page}/>
      </div>
    );
  }
});

var Fab = React.createClass({
  render: function(){
    return (
      <a href={this.props.nextEpisode.url} className="fab"><i className="fa fa-arrow-right"></i></a>
    );
  }
});