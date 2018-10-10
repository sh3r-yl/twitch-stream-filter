var clientId = "gcev1q07pomapbs57dl58z2viwec0t";
var search = "https://api.twitch.tv/kraken/search/streams?query=sg/en&limit=100&offset=0";
var encoded = encodeURIComponent(search);
var streamlist;
let cardlist = [];
let ignorelist = new Set();

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
        populate();
        for (var i = 0; i < streamlist.length; i++){
          //if (!ignorelist.has(streamlist[i].channel.display_name.toLowerCase())) {
          if (judgement(streamlist[i])) {
            addCard(streamlist[i].preview.medium, streamlist[i].channel.display_name, streamlist[i].game, streamlist[i].channel.status, streamlist[i].channel.url, streamlist[i].viewers);
          }
        }
        if (cardlist.length > 0) { 
          $('.game').append(cardlist);
        }
        else {
          $('.game').append('<h2>No one streaming at the moment...</h2>');
        }
      },
      error: function() {
        console.log(search);
      }
  });
});

// score the stream
// community +5
// speedrun -1
// blacklist -10
// status has Singapore +100
// description has Singapore +100
// above 0, pass it
function judgement(stream) {
  var score = 1;
  //sgstreamers community
  var id = 'ed578a73-3b84-45a6-85a1-04f1ab739a0c';
  
  // blacklist
  if (ignorelist.has(stream.channel.display_name.toLowerCase())) {
    score = score - 10;
  }
  // community check - legacy reasons
  for (var i = 0; i < stream.community_ids.length; i++) {
    if (stream.community_ids[i] == id) {
      score = score + 5;
    }
  }
  
  // screen description
  if (stream.channel.description !== null) {
    // S omitted to prevent searching twice
    if (stream.channel.description.includes('ingapore')) {
      score = score + 100;
    }
    if (stream.channel.description.includes('speedrun')) {
      score = score - 1;
    }
  }
 
  // screen status
  if (stream.channel.status !== null) {
    // same omission
    if (stream.channel.status.includes('ingapore')) {
      score = score + 100;
    }
    if (stream.channel.status.includes('speedrun')) {
      score = score - 1;
    }
  }
 
  if (score > 0) {
    return true;
  }
  else {
    return false;
  }
}

function addCard(image, name, game, title, url, viewers) {
  cardlist.push('<div class="col"><article class="card"><a href="' + url + '" target="_blank"><img src="' + image + '"><div class="card__content"><h2>' + title + '</h2></a><div class="card__info"><a href="' + url + '" target="_blank"><span class="card__streamer"><i class="fab fa-twitch"></i> ' + name + '</span></a><span class="card__viewers">' + viewers +' <i class="far fa-user"></i></span></div><p class="card__game"><strong>Playing: </strong>' + game + '</p></div></article></div>');
}

function blacklist(name) {
    ignorelist.add(name.toLowerCase());
}

function populate() {
  blacklist('SG_Batman');
  blacklist('Luckyluciano901');
  blacklist('sG_erniie');
  blacklist('Bern_The_Witch');
  blacklist('CliffordTBRD');
  blacklist('Edge0fHeaven');
  blacklist('AUS_SG_117');
  blacklist('sgkekster');
  blacklist('sg_twist');
  blacklist('LittleMasky');
  blacklist('Zer0rush'); 
  blacklist('SharpiePlays');
  blacklist('apathyduck07');
  blacklist('WorryPlaysGames');
  blacklist('psykotixx');
  blacklist('sgdelacour');
  blacklist('Arrow_Fodder');
  blacklist('SG_Jash');
  blacklist('sg_unlocky');
  blacklist('jacobyyy18');
  blacklist('SG_Meezus');
  blacklist('yggutta500');
  blacklist('jeffery_murphy');
  blacklist('sg_electric');
  blacklist('almightykingsav');
  blacklist('sgingravity');
  blacklist('jasminemorte');
  blacklist('dotatv247');
}
