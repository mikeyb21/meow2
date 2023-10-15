// to understand how to use app id and image keys, follow https://github.com/slowwdev/Discord-Selfbot-RPC/wiki/Installation

module.exports = {
    // spotify/game/twitch
    "mode": "",
    // dnd/online/idle
    "status": "",

    "game": {
        "applicationID": "",

        "name": "", // title
        "details": "", // first row below title
        "state": "", // row below first row

        "largeImageKey": "", // Large Image
        "largeImageText": "", // the text when img surrounded (default is largeimage name in dev portal)

        "smallImageKey": "", // Small Image
        "smallImageText": "",
        
        // Date.now() Epoch timestamps
        "startTimestamp": "", // time elapsed since this timestamp (increase ++)
        "endTimestamp": "" // time left since this timestamp (decrease --)
  