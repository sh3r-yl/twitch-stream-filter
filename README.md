# twitch-stream-filter (SG Streams)

Twitch stream filter is a tool to filter specific subsets of streams (currently SG streamers) by using the Twitch search API.

## So what's this about?

Basically, ever since Twitch removed the communities functionality, people are having trouble finding other local (Singaporean/SG) streamers.

This page serves as a sort of directory listing of other SG streamers so that we can find other them (not sure why, but we SG people like to search out other SG people). Be aware that this is not an exhaustive list of SG streamers and some may be well hidden in the depths of twitchverse.

## So how do you find me?

We're just using what most people are already using: the 'SG/EN' or 'SG' tag in the stream titles. Without going into much detail, Twitch doesn't just search for SG/EN but they also search for SG somewhere in your title, name, etc. so there's bound to be false matches.

Should you find a false match, just drop us a message.

## How do I get included into the list?

Make sure you include 'SG/EN' or 'SG' as part of your stream title, 'SG' itself may work but with no guarantee. If you have the correct stream title but still can't get it to work, let me know.


## What about SG teams?

Thought about that and since Twitch API v5 doesn't really have a fast enough option to only grab live streams within a team, we should maybe await the new API for that functionality.

i.e. Team [Singapore Streamers](https://www.twitch.tv/team/sg) has about 230 channels, but usually less than 10 streams online at any point in time. Using the current API, we would have to loop through the users, get their ID, check for their streaming status using the ID and decide whether to display that stream. The issue here is that we will be wasting 220 iterations of API calls searching through dead and offline channels which doesn't really make sense.

If you have any suggestions, feel free to drop us a message.

## This stream doesn't belong here!

We are aware of false matches and streamers that don't necessarily be based in Singapore appearing from time to time. We are using Twitch API v5's Search API to gather results, which is rather limited by itself. This means that we will pick up streamers all over the world who title their stream 'SG' (mostly speedrunners), clan names, team names consisting of 'SG', and the list goes on.

An initial weeding process will be done to remove streams that are obviously not Singaporean and boost streams that are obviously Singaporean; this is a work in progress and do expect false entries.

Drop us a message if you notice a stream that doesn't belong here and we can add it to the "ignore list". It's a very naive way of doing things, but since the API v5 is deprecated, we'll see what the new Helix API has to offer before we explore further algorithmic changes!

## Disclaimer

We do not represent Twitch or aim to misguide users into thinking we are representing them. This is just a side project for ourselves that others may find useful. All images and assets are obtained from the Twitch API.

This is a constant work in progress so we kind of expect bugs and unexpected behaviour. Let us know of any bugs or suggestions to improve!

## Contact

Drop us a message by using the widget on the bottom right corner of the page. Optionally, if you would like to discuss stuff at length, hit me up on [robobooga@gmail.com](mailto:robobooga@gmail.com).

## Thanks

Please contribute to project and use it freely and support other local streamers! 
