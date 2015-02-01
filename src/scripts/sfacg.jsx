/** @jsx React.DOM */
var episodeStub = {
  comic: {
    coverUrl: 'http://mh.sfacg.com/Logo/201106/95d05ee5-d61f-4432-a58f-eca64cf9be95.jpg',
    name: '逆转监督',
    url: 'http://comic.sfacg.com/HTML/NZJD/'
  },
  name: '308话',
  nextEpisode: null,
  pages: [
    'http://coldpic.sfacg.com/Pic/OnlineComic4/NZJD/308/001_0498.png',
    'http://coldpic.sfacg.com/Pic/OnlineComic4/NZJD/308/002_1536.png',
    'http://coldpic.sfacg.com/Pic/OnlineComic4/NZJD/308/003_1013.png'    
  ],
  prevEpisode: {
    name: '307话',
    url: 'http://comic.sfacg.com/HTML/NZJD/307/'
  },
  url: 'http://comic.sfacg.com/HTML/NZJD/308/'
};


utilityUrl = $($("script[src^='/Util']")[1]).attr('src');
hostName = 'http://comic.sfacg.com';

$.get(hostName + utilityUrl, function(data){
  eval(data);

  episode = {
    comic: {
      coverUrl: '',
      name: comicName,
      url: $($('.redfont_input')[0]).attr('href')
    },
    name: $('.Reduction_left').text().match(/>\w*([^>]*)$/)[1].trim(),
    nextEpisode: {
      name: '',
      url: hostName + nextVolume
    },
    pages: picAy,
    prevEpisode: {
      name: '',
      url: preVolume
    },
    url: location.href
  }

  React.renderComponent(
    <Viewer episode={episode} />,
    document.querySelectorAll('body')[0]
  );
});

var fa = document.createElement('style');
    fa.type = 'text/css';
    fa.textContent = '@font-face { font-family: FontAwesome; src: url("'
        + chrome.extension.getURL('bower_components/components-font-awesome/fonts/fontawesome-webfont.woff')
        + '"); }';
document.head.appendChild(fa);
