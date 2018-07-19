// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

class SoundEffect {
  constructor(id,imagePath,soundPath, color) {
    this.id = id;
    this.imagePath = imagePath;
    this.soundPath = soundPath;
    this.color = color;
  }
}

var bull = new SoundEffect( "bull", "img/animals/Bull.svg", "sound/animals/HardTimes.mp3", "5dc3ef" );
var bee = new SoundEffect( "bee", "img/animals/Bumblebee.svg", "sound/animals/26.mp3", "5dc3ef" );
var butterfly = new SoundEffect( "butterfly", "img/animals/Butterfly.svg", "sound/animals/Caught In The Middle.mp3", "5dc3ef" );
var cat = new SoundEffect( "cat", "img/animals/Cat.svg", "sound/animals/Fake Happy.mp3", "5dc3ef" );
var chicken = new SoundEffect( "chicken", "img/animals/Chicken.svg", "sound/animals/Forgiveness.mp3" );
var dog = new SoundEffect( "dog", "img/animals/Corgi.svg", "sound/animals/Grudges.mp3", "5dc3ef" );
var cow = new SoundEffect( "cow", "img/animals/Cow.svg", "sound/animals/Pool.mp3", "5dc3ef" );
var deer = new SoundEffect( "deer", "img/animals/Deer.svg", "sound/animals/Told You So.mp3", "5dc3ef" );
var dino = new SoundEffect( "dino", "img/animals/Dinosaur.svg", "sound/animals/Rose-Colored Boy.mp3", "5dc3ef" );

var mainSounds = [
  bull,
  bee,
  butterfly,
  cat,
  chicken,
  dog,
  cow,
  deer,
  dino
];

var animalSounds = [
  dino,
  deer,
  cow,
  dog,
  chicken,
  cat,
  butterfly,
  bee,
  bull
];

// Now we need to run the code that will be executed only for About page.
var sound;
// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('animals', function (page) {
    // Do something here for "about" page
    loadSounds( animalSounds );
    $$('.circleimage').on('click', function() {
        var path = window.location.pathname;
        path = path.substr(path, path.length - 10);
        findSelectedSound( path, this.id, animalSounds );
    });
});

myApp.onPageInit('index', function(page) {
    loadSounds( mainSounds );
    $$('.circleimage').on('click', function() {
        var path = window.location.pathname;
        path = path.substr(path, path.length - 10);
        findSelectedSound( path, this.id, mainSounds );
    });
}).trigger();

function playAudio(src) {
    myApp.alert(src);
    if( sound )
      sound.stop();
    sound = new Media( src );
    sound.play();
}

function findSelectedSound(basepath, id, soundList) {
    for( var i = 0; i < soundList.length; i++ ) {
        if( soundList[i].id == id )
        {
            var path = basepath + soundList[i].soundPath;
            playAudio( path );
        }
    }
}

function loadImage(sound, target) {
  var $imgTag = $$("<img src='" + sound.imagePath + "' class='circleimage lazy' id='" + sound.id + "'>");
  $imgTag.css('background-color', sound.color );
  $imgTag.appendTo(target);
}

function loadSounds( sounds ) {
  console.log( sounds[0].id );
  var $contentblock = $$('.sound-block');
  $contentblock.html('');
  for( var i = 0; i < sounds.length; i +=3 )
  {
    var $divRow = $$( "<div class='row'>" );
    if( i < sounds.length ) {
      var $songDiv = $$("<div class='col-33'>");
      loadImage( sounds[i], $songDiv );
      $songDiv.appendTo($divRow);
    }
    if( i + 1 < sounds.length ) {
      var $songDiv = $$("<div class='col-33'>");
      loadImage( sounds[i + 1], $songDiv );
      $songDiv.appendTo($divRow);
    }
    if( i + 2 < sounds.length ) {
      var $songDiv = $$("<div class='col-33'>");
      loadImage( sounds[i + 2], $songDiv );
      $songDiv.appendTo($divRow);
    }
    $divRow.appendTo($contentblock);
  }
}
