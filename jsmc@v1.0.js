//Don't Edit
var API_URL = "https://playerdb.co/api/player/minecraft/"; //The API URL
var API = API_URL + username; //Full API URL .DONT EDIT
  fetch(API).then(response => response.json()).then((main) => {
player = new Object;
player.username = main.data.player.username;
player.uuid = main.data.player.id;
player.id = main.data.player.raw_id;
player.name_history = main.data.player.meta.name_history;
player.icon = `https://crafatar.com/avatars/${player.id}?overlay`;
player.avatar = `https://crafatar.com/renders/body/${player.id}?overlay`;
player.head = `https://crafatar.com/renders/head/${player.id}?overlay`;
player.skin = `https://crafatar.com/skins/${player.id}`;
player.cape = new Object;
player.cape.official = `https://crafatar.com/capes/${player.id}`;
player.cape.optifine = `https://api.gapple.pw/cors/optifine/${player.username}`;
player.cape.labymod = `https://api.gapple.pw/cors/labymod/cape/${player.id}`;
})
