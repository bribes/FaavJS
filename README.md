# JSMC

## Installation
```html 
<script src="./jsmc@v1.0.js"></script>
<script>
  var name = "Seeped"; //Username Here
function code() {
//code here
}
jsmc(name);
</script>
```

## Usage

```javascript
player.username; //returns the players username. Ex. Seeped
player.uuid; //returns the players uuid with dashes. Ex. eb74d592-71f8-4b1e-a1b1-ba76a12d8858
player.id; //returns the players uuid without dashes. Ex. eb74d59271f84b1ea1b1ba76a12d8858
player.name_history; //returns the players name history.
player.skin; //returns an image of the players skin. Ex. https://crafatar.com/skins/eb74d59271f84b1ea1b1ba76a12d8858
player.cape.official; //returns a image of the players official cape. Ex. https://crafatar.com/capes/403e6cb7a6ca440a80417fb1e579b5a5
player.cape.optifine; //returns a image of the players optifine cape. Ex. https://api.gapple.pw/cors/optifine/Seeped
player.cape.labymod; //returns a image of the players laby mod cape. Ex. https://api.gapple.pw/cors/labymod/cape/6a836b80-2488-4703-85a7-f130b2097ee0
player.icon; //return an image of the players head. Ex. https://crafatar.com/avatars/eb74d59271f84b1ea1b1ba76a12d8858?overlay
player.avatar; //returns a render of the players avatar. Ex. https://crafatar.com/renders/body/eb74d59271f84b1ea1b1ba76a12d8858?overlay
player.head; //return a render of the players head. Ex. https://crafatar.com/renders/head/eb74d59271f84b1ea1b1ba76a12d8858?overlay

```
