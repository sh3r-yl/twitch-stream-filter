var clientId = "gcev1q07pomapbs57dl58z2viwec0t";
var search = "https://api.twitch.tv/kraken/search/streams?query=sg/en&limit=100&offset=0";
var encoded = encodeURIComponent(search);
var streamlist;
let ignorelist = new Set();
ignorelist.add('SG_Batman');

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
            $('.game').append('<div class="col"><a href="' + streamlist[i].channel.url + '" target="_blank"><article class="card"><img src="' + streamlist[i].preview.medium + '"><div class="card__content"><h2>' + streamlist[i].channel.status + '</h2><p class="streamer"><strong>' + streamlist[i].channel.display_name + '</strong></p><p class="description"><i>' + streamlist[i].game + '</i></p><p class="viewers"><strong>Viewers: </strong>' + streamlist[i].viewers + '</p></article></a></div>');
          }
        }
      },
      error: function() {
          alert(search);
      }
  });
});
