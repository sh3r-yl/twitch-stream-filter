var clientId = "gcev1q07pomapbs57dl58z2viwec0t";
var search = "https://api.twitch.tv/kraken/search/streams?query=sg/en&limit=100&offset=0";
var encoded = encodeURIComponent(search);
var streamlist;
let cardlist = [];
let ignorelist = new Set();
ignorelist.add('SG_Batman');
ignorelist.add('Luckyluciano901');
ignorelist.add('sG_erniie');

$(document).ready(function() {
  $.ajax({
    url: search,
    type: 'GET',
    dataType: 'json',
    headers: {
      'Accept': 'application/vnd.twitchtv.v5+json',
      'Client-ID': 'gcev1q07pomapbs57dl58z2viwec0t'
      },
      success: function (data) {
        streamlist = data.streams;
        for (var i = 0; i < streamlist.length; i++){
          if (!ignorelist.has(streamlist[i].channel.display_name)) {
            addCard(streamlist[i].preview.medium, streamlist[i].channel.display_name, streamlist[i].game, streamlist[i].channel.status, streamlist[i].channel.url, streamlist[i].viewers);
          }
        }

        $('.game').append(cardlist);
      },
      error: function() {
        console.log(search);
      }
  });
});

function addCard(image, name, game, title, url, viewers) {
  cardlist.push('<div class="col"><article class="card"><img src="' + image + '"><div class="card__content"><a href="' + url + '" target="_blank"><h2>' + title + '</h2></a><div class="card__info"><a href="' + url + '" target="_blank"><span class="card__streamer"><i class="fab fa-twitch"></i> ' + name + '</span></a><span class="card__viewers">' + viewers +' <i class="far fa-user"></i></span></div><p class="card__game"><strong>Playing: </strong>' + game + '</p></div></article></div>');
}
