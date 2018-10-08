var clientId = "gcev1q07pomapbs57dl58z2viwec0t";
var search = "https://api.twitch.tv/kraken/search/streams?query=sg/en&limit=25&offset=0";
var encoded = encodeURIComponent(search);
var streamlist;

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
        $('#blurb').html(JSON.stringify(data));
        streamlist = data.streams;
        for (var i = 0; i < streamlist.length; i++){
          $('.game').append('<div class="col"><a href="' + streamlist[i].channel.url + '" target="_blank"><article class="card"><img src="' + streamlist[i].preview.medium + '"><div class="card__content"><h2>' + streamlist[i].channel.status + '</h2><p class="streamer">' + streamlist[i].channel.display_name + '</p><p class="description"><strong>Game: </strong>' + streamlist[i].game + '</p><p class="viewers"><strong>Viewers: </strong>' + streamlist[i].viewers + '</p></article></a></div>');
        }
      },
      error: function() {
          alert(search);
      }
  });
});