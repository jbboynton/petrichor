(function() {
  var data = {
    "@context": "http://schema.org",
    "@type": "MusicGroup",
    "@id": "https://www.landoffires.com",
    "name": "Land of Fires",
    "description": "Land of Fires is an instrumental rock band from Rhode Island that delivers a melodic sound that ranges from roaring, powerful, and thunderous to emotional, expressive, and euphonic.",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.landoffires.com/images/logo.png"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://www.landoffires.com/images/band.jpg"
    },
    "url": "https://www.landoffires.com",
    "genre": [
      "Post Rock",
      "Instrumental Rock"
    ],
    "sameAs": [
      "https://instagram.com/landoffires",
      "https://itunes.apple.com/us/artist/land-of-fires/1262063264"
      "https://landoffires.bandcamp.com",
      "https://open.spotify.com/artist/78hn6dX6DEFy5qMuQ7Sgio",
      "https://soundcloud.com/landoffiresband",
      "https://twitter.com/landoffiresband",
      "https://www.facebook.com/landoffiresband",
    ]
  };

  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify(data);

  document.getElementsByTagName('head')[0].appendChild(script);
})(document);
