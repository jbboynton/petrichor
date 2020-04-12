(function(){
  var data = {
    "@context": "http://schema.org",
    "@type": "MusicGroup",
    "@id": "https://www.landoffires.com",
    "name": "Land of Fires",
    "description": "Land of Fires is an instrumental rock band from Rhode Island that delivers a melodic sound that ranges from roaring, powerful, and thunderous to emotional, expressive, and euphonic.",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.landoffires.com/images/logo-v1.jpg"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://www.landoffires.com/images/band-v1.jpg"
    },
    "url": "https://www.landoffires.com",
    "genre": [
      "Post Rock",
      "Instrumental Rock"
    ],
    "sameAs": [
      "https://www.facebook.com/landoffiresband",
      "https://twitter.com/landoffiresband",
      "https://instagram.com/landoffires",
      "https://soundcloud.com/landoffiresband",
      "https://landoffires.bandcamp.com",
      "https://open.spotify.com/artist/78hn6dX6DEFy5qMuQ7Sgio"
    ]
  };

  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify(data);

  document.getElementsByTagName('head')[0].appendChild(script);
})(document);
