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

React.renderComponent(
  Viewer({episode: episodeStub}),
  document.querySelectorAll('body')[0]
);
