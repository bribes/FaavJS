# JSMC

## Changelog

- added player.stats.

This is a simple javascript package for getting minecraft user data.

## Installation

```html
<script src="https://withdrew.github.io/jsmc/jsmc@v1.8.min.js"></script>
<script>
  var name = "Seeped"; //Username Here
function code() {
//code here
}
jsmc(name);
</script>
```

## APIs used

https://playerdb.co/

https://crafatar.com/

https://visage.surgeplay.com/

https://api.gapple.pw/

https://api.hypixel.net/

## Usage

```javascript
//PLAYER INFO
player.username; //returns the players username. Ex. Seeped
player.uuid; //returns the players uuid with dashes. Ex. eb74d592-71f8-4b1e-a1b1-ba76a12d8858
player.id; //returns the players uuid without dashes. Ex. eb74d59271f84b1ea1b1ba76a12d8858
player.name_history; //returns the players name history.
player.status; //returns the status of the name. The response can be taken, available, blocked, or invalid.
player.type; //returns the account type of the player. The response can be mojang, msa, legacy, or nonexistent.
player.skin; //returns an image of the players skin. Ex. https://crafatar.com/skins/eb74d59271f84b1ea1b1ba76a12d8858

//PLAYER RENDERS
player.renders.icon; //returns an image of the players head. Ex. https://crafatar.com/avatars/eb74d59271f84b1ea1b1ba76a12d8858?overlay

player.renders.avatar_1; //returns a render of the players avatar. Ex. https://crafatar.com/renders/body/eb74d59271f84b1ea1b1ba76a12d8858?overlay
player.renders.avatar_2; //returns a render of the players avatar. Ex. https://visage.surgeplay.com/full/eb74d59271f84b1ea1b1ba76a12d8858
player.renders.avatar_3; //returns a render of the players avatar. Ex. https://visage.surgeplay.com/frontfull/eb74d59271f84b1ea1b1ba76a12d8858

player.renders.bust_1; //returns a render of the players bust. Ex. https://visage.surgeplay.com/front/eb74d59271f84b1ea1b1ba76a12d8858
player.renders.bust_2; //returns a render of the players bust. Ex. https://visage.surgeplay.com/bust/eb74d59271f84b1ea1b1ba76a12d8858

player.renders.head_1; //returns a render of the players head. Ex. https://crafatar.com/renders/head/eb74d59271f84b1ea1b1ba76a12d8858?overlay
player.renders.head_2; //returns a render of the players head. Ex. https://visage.surgeplay.com/head/eb74d59271f84b1ea1b1ba76a12d8858?overlay

//PLAYER COSMETICS

//CAPES
player.cosmetics.cape.official; //returns a image of the players official cape. Ex. https://crafatar.com/capes/403e6cb7a6ca440a80417fb1e579b5a5
player.cosmetics.cape.optifine; //returns a image of the players optifine cape. Ex. https://api.gapple.pw/cors/optifine/Seeped
player.cosmetics.cape.labymod; //returns a image of the players laby mod cape. Ex. https://api.gapple.pw/cors/labymod/cape/6a836b80-2488-4703-85a7-f130b2097ee0

//BANDANAS
player.cosmetics.bandana.labymod; //returns a image of the players laby mod bandana. Ex. https://api.gapple.pw/cors/labymod/bandana/65ec6b8e4d44439eaf64fe3b572f9b8b

//HYPIXEL
player.servers.hypixel.success; //returns true or false depending if getting the player data was successful.

//HYPIXEL RANKS
player.servers.hypixel.rank; //returns the players hypixel rank. Ex. YOUTUBER
player.servers.hypixel.newPackageRank; //returns the players new hypixel rank. Ex. VIP_PLUS
player.servers.hypixel.monthlyPackageRank; //returns the players monthly hypixel rank. Ex. SUPERSTAR (SUPERSTAR is MVP++)

//HYPIXEL PLAYER INFO
player.servers.hypixel.online; //returns true or false depending on if the player is online or offline.
player.servers.hypixel.firstLogin;  //returns the players first login on hypixel. (IN UNIX TIME)
player.servers.hypixel.lastLogin; //returns the players last login on hypixel. (IN UNIX TIME)
player.servers.hypixel.lastLogout; //returns the players last logout on hypixel. (IN UNIX TIME)
player.servers.hypixel.networkExp; //returns the players hypixel network experience.
player.servers.hypixel.networkLevel; //returns the players hypixel network level.
player.servers.hypixel.karma; //returns the players hypixel karma.

//HYPIXEL GUILDS
player.servers.hypixel.guild.name; //returns the guild name of the guild the player is currently in.
player.servers.hypixel.guild.createdAt; //returns the creation date of the guild that the player is in.
player.servers.hypixel.guild.members; //returns the members of the guild the player is currently in.
player.servers.hypixel.guild.coins; //returns the amount of coins the guild that the player is in currently has
player.servers.hypixel.guild.coinsEver; //returns the amount of coins the guild that the player is in has ever had
player.servers.hypixel.guild.success;  //returns true or false depending if getting the guild data was successful.

//HYPIXEL FRIENDS
player.servers.hypixel.friends.uuid //returns an array of the friends uuids from newest to oldest.
player.servers.hypixel.friends.uuid //returns an array of timestamps of when they became friends from newest to oldest. (IN UNIX TIME)

//SYSTEM
player.error; //returns if there is a error or not. The response can either be true or false.
```

## Usage Example

[See it in action](https://withdrew.github.io/jsmc/)

```html
<html>
   <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://withdrew.github.io/jsmc/jsmc@v1.7.min.js"></script>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
      <link href="https://unpkg.com/purecss@2.0.5/build/pure-min.css" rel="stylesheet">
      <script>
         var name = "Seeped"; //Username Here
                  function code() {
                     var type = null;
                     if (player.type == "msa") {
                     type = "Microsoft";
                     } else if (player.type == "mojang") {
                     type = "Mojang";
                     } else if (player.type == "legacy") {
                     type = "Legacy";
                     }
                     if (player.servers.hypixel.newPackageRank != undefined) {
                                         if (player.servers.hypixel.rank != undefined) {
                                             if (player.servers.hypixel.rank == "YOUTUBER")
                                             {
                                                document.getElementById("hypixelRank").innerHTML += "Hypixel Rank: ";
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #AA0000;'>" + "YOU" + "</span>" + "<span style='color: #FFFFFF;'>" + "TUBER" + "</span>";
                                             }
                                             else {
                                                document.getElementById("hypixelRank").innerHTML += "Hypixel Rank: ";
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #FFAA00;'>" + player.servers.hypixel.rank + "</span>";
                                             }
                                         }
                                         else {
                                            document.getElementById("hypixelRank").innerHTML += "Hypixel Rank: ";
                                             if (player.servers.hypixel.newPackageRank == "VIP")
                                             {
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #55FF55;'>" + "VIP" + "</span>";
                                             }
                                             else if (player.servers.hypixel.newPackageRank== "VIP_PLUS")
                                             {
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #55FF55;'>" + "VIP" + "</span>" + "<span style='color: #FFAA00;'>" + "+" + "</span>";
                                             }
                                             else if (player.servers.hypixel.newPackageRank == "MVP")
                                             {
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #55FFFF;'>" + "MVP" + "</span>";
                                             }
                                             else if (player.servers.hypixel.newPackageRank == "MVP_PLUS")
                                             {
                                                 if (player.servers.hypixel.monthlyPackageRank != undefined && player.servers.hypixel.monthlyPackageRank == "SUPERSTAR")
                                                 {
                                                     document.getElementById('hypixelRank').innerHTML += "<span style='color: #55FFFF;'>" + "MVP" + "</span>" + "<span style='color: #FF5555;'>" + "++" + "</span>";
                                                 }
                                                 else {
                                                     document.getElementById('hypixelRank').innerHTML += "<span style='color: #55FFFF;'>" + "MVP" + "</span>" + "<span style='color: #FF5555;'>" + "+" + "</span>";
                                                 }
                                             }
                                             else if (player.servers.hypixel.newPackageRank == "BUILDTEAM")
                                             {
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #00AAAA;'>" + "BUILDTEAM" + "</span>";
                                             }
                                             else if (player.servers.hypixel.newPackageRank == "BUILDTEAM_PLUS")
                                             {
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #00AAAA;'>" + "BUILDTEAM" + "</span>" + "<span style='color: #FF5555;'>" + "+" + "</span>";
                                             }
                                             else if (player.servers.hypixel.newPackageRank == "APPLE")
                                             {
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #FFAA00;'>" + "APPLE" + "</span>";
                                             }
                                             else if (player.servers.hypixel.newPackageRank == "MOJANG")
                                             {
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #FFAA00;'>" + "MOJANG" + "</span>";
                                             }
                                             else if (player.servers.hypixel.newPackageRank == "YT")
                                             {
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #FFAA00;'>" + "YT" + "</span>";
                                             }
                                             else if (player.servers.hypixel.newPackageRank == "HELPER")
                                             {
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #0000AA;'>" + "HELPER" + "</span>";
                                             }
                                             else if (player.servers.hypixel.newPackageRank == "MOD")
                                             {
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #00AA00;'>" + "MOD" + "</span>";
                                             }
                                             else if (player.servers.hypixel.newPackageRank == "SLOTH")
                                             {
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #FF5555;'>" + "SLOTH" + "</span>";
                                             }
                                             else if (player.servers.hypixel.newPackageRank == "MCPROHOSTING")
                                             {
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #FF5555;'>" + "MCPROHOSTING" + "</span>";
                                             }
                                             else if (player.servers.hypixel.newPackageRank == "ADMIN")
                                             {
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #FF5555;'>" + "ADMIN" + "</span>";
                                             }
                                             else if (player.servers.hypixel.newPackageRank == "OWNER")
                                             {
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #FF5555;'>" + "OWNER" + "</span>";
                                             }
                                             else {
                                                 document.getElementById('hypixelRank').innerHTML += "<span style='color: #FFFFFF;'>" + "None" + "</span>";
                                             }
                                         }
                                     }
                                     else {
                                         document.getElementById('hypixelRank').innerHTML += "No data found";
                                     }
                  document.getElementById("title").innerHTML = player.username;
                  document.getElementById("uuid").innerHTML = `UUID: ${player.id}`;
                  document.getElementById("type").innerHTML = `Account Type: ${type}`;
                  document.getElementById("img").src = player.renders.avatar_1;
                  document.getElementById("namehistory").innerHTML = `Original Name: ${player.name_history[0].name}`;
                 if (player.servers.hypixel.online == true) {
         var status = "Online";
         } else {
         var status = "Offline";
         }
                  document.getElementById("status").innerHTML = `Hypixel Player Status: ${status}`;
         document.getElementById("level").innerHTML = `Hypixel Level: ${player.servers.hypixel.networkLevel}`
         document.getElementById("skylevel").innerHTML = `Hypixel SkyWars Level: ${player.servers.hypixel.skywars.level}`
                  }
                  jsmc(name);

      </script>
      <title>Usage Example</title>
   </head>
   <center>
      <body>
         <h1 id="title"></h1>
         <span id="uuid"></span><br>
         <span id="type"></span><br>
         <span id="level"></span><br>
         <span id="skylevel"></span><br>
         <span id="status"></span><br>
         <div id="hypixelRank"></div>
         <span id="namehistory"></span><br>
         <img id="img" src="">
      </body>
   </center>
</html>
```
