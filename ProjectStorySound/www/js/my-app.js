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
  constructor(id,imagePath,soundPath) {
    this.id = id;
    this.imagePath = imagePath;
    this.soundPath = soundPath;
  }
}

// Now we need to run the code that will be executed only for About page.
var sound;

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('whacky', function (page) {
    var whackySounds = [
      new SoundEffect( "Applause1", "img/Whacky/Applause1.svg", "sound/Whacky/Applause1.wav" ),
      new SoundEffect( "BabyLaughing1", "img/Whacky/BabyLaughing1.svg", "sound/Whacky/BabyLaughing1.mp3" ),
      new SoundEffect( "Belch1", "img/Whacky/Belch1.svg", "sound/Whacky/Belch1.wav" ),
      new SoundEffect( "Burp1", "img/Whacky/Burp1.svg", "sound/Whacky/Burp1.wav" ),
      new SoundEffect( "FemaleChuckle1", "img/Whacky/FemaleChuckle1.svg", "sound/Whacky/FemaleChuckle1.wav" ),
      new SoundEffect( "FemaleLaugh1", "img/Whacky/FemaleLaugh1.svg", "sound/Whacky/FemaleLaugh1.mp3" ),
      new SoundEffect( "FunnyLoop1", "img/Whacky/FunnyLoop1.svg", "sound/Whacky/FunnyLoop1.wav" ),
      new SoundEffect( "GirlLaugh1", "img/Whacky/GirlLaugh1.svg", "sound/Whacky/GirlLaugh1.wav" ),
      new SoundEffect( "Grunt1", "img/Whacky/Grunt1.svg", "sound/Whacky/Grunt1.wav" ),
      new SoundEffect( "Grunt2", "img/Whacky/Grunt2.svg", "sound/Whacky/Grunt2.wav" ),
      new SoundEffect( "KidsLaughing1", "img/Whacky/KidsLaughing1.svg", "sound/Whacky/KidsLaughing1.mp3" ),
      new SoundEffect( "OwOwOw1", "img/Whacky/OwOwOw1.svg", "sound/Whacky/OwOwOw1.mp3" ),
      new SoundEffect( "PartyHorn1", "img/Whacky/PartyHorn1.svg", "sound/Whacky/PartyHorn1.wav" ),
      new SoundEffect( "Plop1", "img/Whacky/Plop1.svg", "sound/Whacky/Plop1.wav" ),
      new SoundEffect( "Sneeze1", "img/Whacky/Sneeze1.svg", "sound/Whacky/Sneeze1.wav" ),
      new SoundEffect( "Snoring1", "img/Whacky/Snoring1.svg", "sound/Whacky/Snoring1.mp3" ),
      new SoundEffect( "Squeak1", "img/Whacky/Squeak1.svg", "sound/Whacky/Squeak1.wav" )
    ];

    // Do something here for "about" page
    loadSounds( whackySounds );
    $$('.circleimage').on('click', function() {
        var path = window.location.pathname;
        path = path.substr(path, path.length - 10);
        findSelectedSound( path, this.id, whackySounds );
    });
});

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('space', function (page) {
    var spaceStorySounds = [
      new SoundEffect( "Alien1", "img/SpaceStory/Alien1.svg", "sound/SpaceStory/Alien1.mp3" ),
      new SoundEffect( "Alien2", "img/SpaceStory/Alien2.svg", "sound/SpaceStory/Alien2.wav" ),
      new SoundEffect( "Alien3", "img/SpaceStory/Alien3.svg", "sound/SpaceStory/Alien3.wav" ),
      new SoundEffect( "Countdown1", "img/SpaceStory/Countdown1.svg", "sound/SpaceStory/Countdown1.wav" ),
      new SoundEffect( "DoorFuturistic1", "img/SpaceStory/DoorFuturistic1.svg", "sound/SpaceStory/DoorFuturistic1.wav" ),
      new SoundEffect( "EerieBackground1", "img/SpaceStory/EerieBackground1.svg", "sound/SpaceStory/EerieBackground1.mp3" ),
      new SoundEffect( "Explosion1", "img/SpaceStory/Explosion1.svg", "sound/SpaceStory/Explosion1.mp3" ),
      new SoundEffect( "FlyingCar1", "img/SpaceStory/FlyingCar1.svg", "sound/SpaceStory/FlyingCar1.wav" ),
      new SoundEffect( "Laser1", "img/SpaceStory/Laser1.svg", "sound/SpaceStory/Laser1.mp3" ),
      new SoundEffect( "Laser2", "img/SpaceStory/Laser2.svg", "sound/SpaceStory/Laser2.wav" ),
      new SoundEffect( "Launch1", "img/SpaceStory/Launch1.svg", "sound/SpaceStory/Launch1.wav" ),
      new SoundEffect( "LaunchSequence1", "img/SpaceStory/LaunchSequence1.svg", "sound/SpaceStory/LaunchSequence1.mp3" ),
      new SoundEffect( "Phaser1", "img/SpaceStory/Phaser1.svg", "sound/SpaceStory/Phaser1.wav" ),
      new SoundEffect( "Phaser2", "img/SpaceStory/Phaser2.svg", "sound/SpaceStory/Phaser2.wav" ),
      new SoundEffect( "PulseEcho1", "img/SpaceStory/PulseEcho1.svg", "sound/SpaceStory/PulseEcho1.mp3" ),
      new SoundEffect( "Robot1", "img/SpaceStory/Robot1.svg", "sound/SpaceStory/Robot1.wav" ),
      new SoundEffect( "Robot2", "img/SpaceStory/Robot2.svg", "sound/SpaceStory/Robot2.wav" ),
      new SoundEffect( "RobotCountdown1", "img/SpaceStory/RobotCountdown1.svg", "sound/SpaceStory/RobotCountdown1.wav" ),
      new SoundEffect( "RobotVoice1", "img/SpaceStory/RobotVoice1.svg", "sound/SpaceStory/RobotVoice1.wav" ),
      new SoundEffect( "RobotWow1", "img/SpaceStory/RobotWow1.svg", "sound/SpaceStory/RobotWow1.wav" ),
      new SoundEffect( "Space1", "img/SpaceStory/Space1.svg", "sound/SpaceStory/Space1.mp3" ),
      new SoundEffect( "UFO1", "img/SpaceStory/UFO1.svg", "sound/SpaceStory/UFO1.mp3" ),
      new SoundEffect( "UFOLanding1", "img/SpaceStory/UFOLanding1.svg", "sound/SpaceStory/UFOLanding1.wav" )
    ];

    // Do something here for "about" page
    loadSounds( spaceStorySounds );
    $$('.circleimage').on('click', function() {
        var path = window.location.pathname;
        path = path.substr(path, path.length - 10);
        findSelectedSound( path, this.id, spaceStorySounds );
    });
});

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('scary', function (page) {
    var scaryStorySounds = [
      new SoundEffect( "Cat1", "img/ScaryStory/Cat1.svg", "sound/ScaryStory/Cat1.wav" ),
      new SoundEffect( "Circus1", "img/ScaryStory/Circus1.svg", "sound/ScaryStory/Circus1.mp3" ),
      new SoundEffect( "Creaking1", "img/ScaryStory/Creaking1.svg", "sound/ScaryStory/Creaking1.flac" ),
      new SoundEffect( "CreakyDoor1", "img/ScaryStory/CreakyDoor1.svg", "sound/ScaryStory/CreakyDoor1.wav" ),
      new SoundEffect( "DogBarks1", "img/ScaryStory/DogBarks1.svg", "sound/ScaryStory/DogBarks1.mp3" ),
      new SoundEffect( "DoorClosing1", "img/ScaryStory/DoorClosing1.svg", "sound/ScaryStory/DoorClosing1.wav" ),
      new SoundEffect( "EerieBackground2", "img/ScaryStory/EerieBackground2.svg", "sound/ScaryStory/EerieBackground2.wav" ),
      new SoundEffect( "EvilLaugh1", "img/ScaryStory/EvilLaugh1.svg", "sound/ScaryStory/EvilLaugh1.flac" ),
      new SoundEffect( "EvilLaugh2", "img/ScaryStory/EvilLaugh2.svg", "sound/ScaryStory/EvilLaugh2.wav" ),
      new SoundEffect( "FireCrackling1", "img/ScaryStory/FireCrackling1.svg", "sound/ScaryStory/FireCrackling1.mp3" ),
      new SoundEffect( "Ghost1", "img/ScaryStory/Ghost1.svg", "sound/ScaryStory/Ghost1.mp3" ),
      new SoundEffect( "Ghost2", "img/ScaryStory/Ghost2.svg", "sound/ScaryStory/Ghost2.mp3" ),
      new SoundEffect( "GhostScream1", "img/ScaryStory/GhostScream1.svg", "sound/ScaryStory/GhostScream1.wav" ),
      new SoundEffect( "MonsterLaugh1", "img/ScaryStory/MonsterLaugh1.svg", "sound/ScaryStory/MonsterLaugh1.mp3" ),
      new SoundEffect( "MonsterRoar1", "img/ScaryStory/MonsterRoar1.svg", "sound/ScaryStory/MonsterRoar1.mp3" ),
      new SoundEffect( "Piano1", "img/ScaryStory/Piano1.svg", "sound/ScaryStory/Piano1.wav" ),
      new SoundEffect( "Rain1", "img/ScaryStory/Rain1.svg", "sound/ScaryStory/Rain1.mp3" ),
      new SoundEffect( "Scream1", "img/ScaryStory/Scream1.svg", "sound/ScaryStory/Scream1.mp3" ),
      new SoundEffect( "Storm1", "img/ScaryStory/Storm1.svg", "sound/ScaryStory/Storm1.mp3" ),
      new SoundEffect( "Suspense1", "img/ScaryStory/Suspense1.svg", "sound/ScaryStory/Suspense1.mp3" ),
      new SoundEffect( "Suspense2", "img/ScaryStory/Suspense2.svg", "sound/ScaryStory/Suspense2.mp3" ),
      new SoundEffect( "Suspense3", "img/ScaryStory/Suspense3.svg", "sound/ScaryStory/Suspense3.wav" ),
      new SoundEffect( "Suspense4", "img/ScaryStory/Suspense4.svg", "sound/ScaryStory/Suspense4.mp3" ),
      new SoundEffect( "Suspense5", "img/ScaryStory/Suspense5.svg", "sound/ScaryStory/Suspense5.mp3" ),
      new SoundEffect( "Thunder1", "img/ScaryStory/Thunder1.svg", "sound/ScaryStory/Thunder1.mp3" ),
      new SoundEffect( "TickTock1", "img/ScaryStory/TickTock1.svg", "sound/ScaryStory/TickTock1.wav" ),
      new SoundEffect( "Wind1", "img/ScaryStory/Wind1.svg", "sound/ScaryStory/Wind1.mp3" ),
      new SoundEffect( "WitchCackle1", "img/ScaryStory/WitchCackle1.svg", "sound/ScaryStory/WitchCackle1.wav" ),
      new SoundEffect( "WitchCackle2", "img/ScaryStory/WitchCackle2.svg", "sound/ScaryStory/WitchCackle2.mp3" ),
      new SoundEffect( "Wolf1", "img/ScaryStory/Wolf1.svg", "sound/ScaryStory/Wolf1.wav" )
    ];

    // Do something here for "about" page
    loadSounds( scaryStorySounds );
    $$('.circleimage').on('click', function() {
        var path = window.location.pathname;
        path = path.substr(path, path.length - 10);
        findSelectedSound( path, this.id, scaryStorySounds );
    });
});

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('old', function (page) {
    var oldFashionedSounds = [
      new SoundEffect( "AirRaidSiren1", "img/OldFashioned/AirRaidSiren1.svg", "sound/OldFashioned/AirRaidSiren1.mp3" ),
      new SoundEffect( "BellTower1", "img/OldFashioned/BellTower1.svg", "sound/OldFashioned/BellTower1.mp3" ),
      new SoundEffect( "BikeHorn1", "img/OldFashioned/BikeHorn1.svg", "sound/OldFashioned/BikeHorn1.wav" ),
      new SoundEffect( "BoatHorn1", "img/OldFashioned/BoatHorn1.svg", "sound/OldFashioned/BoatHorn1.wav" ),
      new SoundEffect( "CashRegister1", "img/OldFashioned/CashRegister1.svg", "sound/OldFashioned/CashRegister1.mp3" ),
      new SoundEffect( "CuckooClock1", "img/OldFashioned/CuckooClock1.svg", "sound/OldFashioned/CuckooClock1.mp3" ),
      new SoundEffect( "Dialing1", "img/OldFashioned/Dialing1.svg", "sound/OldFashioned/Dialing1.wav" ),
      new SoundEffect( "Doorbell1", "img/OldFashioned/Doorbell1.svg", "sound/OldFashioned/Doorbell1.wav" ),
      new SoundEffect( "HorseGalloping1", "img/OldFashioned/HorseGalloping1.svg", "sound/OldFashioned/HorseGalloping1.wav" ),
      new SoundEffect( "OldPhone1", "img/OldFashioned/OldPhone1.svg", "sound/OldFashioned/OldPhone1.mp3" ),
      new SoundEffect( "OldPoliceSiren1", "img/OldFashioned/OldPoliceSiren1.svg", "sound/OldFashioned/OldPoliceSiren1.mp3" ),
      new SoundEffect( "Projector1", "img/OldFashioned/Projector1.svg", "sound/OldFashioned/Projector1.mp3" ),
      new SoundEffect( "SchoolBell1", "img/OldFashioned/SchoolBell1.svg", "sound/OldFashioned/SchoolBell1.wav" ),
      new SoundEffect( "ScreenDoor1", "img/OldFashioned/ScreenDoor1.svg", "sound/OldFashioned/ScreenDoor1.wav" ),
      new SoundEffect( "SubmarinePing1", "img/OldFashioned/SubmarinePing1.svg", "sound/OldFashioned/SubmarinePing1.wav" ),
      new SoundEffect( "TickTock1", "img/OldFashioned/TickTock1.svg", "sound/OldFashioned/TickTock1.wav" ),
      new SoundEffect( "TrainWhistle1", "img/OldFashioned/TrainWhistle1.svg", "sound/OldFashioned/TrainWhistle1.mp3" ),
      new SoundEffect( "Typewriter1", "img/OldFashioned/Typewriter1.svg", "sound/OldFashioned/Typewriter1.mp3" ),
      new SoundEffect( "TypewriterBell1", "img/OldFashioned/TypewriterBell1.svg", "sound/OldFashioned/TypewriterBell1.wav" ),
      new SoundEffect( "Whip1", "img/OldFashioned/Whip1.svg", "sound/OldFashioned/Whip1.mp3" )
    ];

    // Do something here for "about" page
    loadSounds( oldFashionedSounds );
    $$('.circleimage').on('click', function() {
        var path = window.location.pathname;
        path = path.substr(path, path.length - 10);
        findSelectedSound( path, this.id, oldFashionedSounds );
    });
});

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('animals', function (page) {
    var animalSounds = [
      new SoundEffect( "BirdChirping1", "img/Animals/BirdChirping1.svg", "sound/Animals/BirdChirping1.mp3" ),
      new SoundEffect( "Cat1", "img/Animals/Cat1.svg", "sound/Animals/Cat1.wav" ),
      new SoundEffect( "Cow1", "img/Animals/Cow1.svg", "sound/Animals/Cow1.wav" ),
      new SoundEffect( "CoyotePlus1", "img/Animals/CoyotePlus1.svg", "sound/Animals/CoyotePlus1.mp3" ),
      new SoundEffect( "Crickets1", "img/Animals/Crickets1.svg", "sound/Animals/Crickets1.mp3" ),
      new SoundEffect( "Crow1", "img/Animals/Crow1.svg", "sound/Animals/Crow1.wav" ),
      new SoundEffect( "DogBarks1", "img/Animals/DogBarks1.svg", "sound/Animals/DogBarks1.mp3" ),
      new SoundEffect( "Ducks1", "img/Animals/Ducks1.svg", "sound/Animals/Ducks1.wav" ),
      new SoundEffect( "Elephant1", "img/Animals/Elephant1.svg", "sound/Animals/Elephant1.mp3" ),
      new SoundEffect( "Flies1", "img/Animals/Flies1.svg", "sound/Animals/Flies1.mp3" ),
      new SoundEffect( "Frog1", "img/Animals/Frog1.svg", "sound/Animals/Frog1.mp3" ),
      new SoundEffect( "Geese1", "img/Animals/Geese1.svg", "sound/Animals/Geese1.mp3" ),
      new SoundEffect( "Goat1", "img/Animals/Goat1.svg", "sound/Animals/Goat1.mp3" ),
      new SoundEffect( "Horse1", "img/Animals/Horse1.svg", "sound/Animals/Horse1.mp3" ),
      new SoundEffect( "Kitten1", "img/Animals/Kitten1.svg", "sound/Animals/Kitten1.wav" ),
      new SoundEffect( "Kitten2", "img/Animals/Kitten2.svg", "sound/Animals/Kitten2.mp3" ),
      new SoundEffect( "Lion1", "img/Animals/Lion1.svg", "sound/Animals/Lion1.mp3" ),
      new SoundEffect( "Monkeys1", "img/Animals/Monkeys1.svg", "sound/Animals/Monkeys1.mp3" ),
      new SoundEffect( "MouseSqueak1", "img/Animals/MouseSqueak1.svg", "sound/Animals/MouseSqueak1.wav" ),
      new SoundEffect( "PigGrunt1", "img/Animals/PigGrunt1.svg", "sound/Animals/PigGrunt1.wav" ),
      new SoundEffect( "PigSnort1", "img/Animals/PigSnort1.svg", "sound/Animals/PigSnort1.wav" ),
      new SoundEffect( "Rooster1", "img/Animals/Rooster1.svg", "sound/Animals/Rooster1.wav" ),
      new SoundEffect( "Sheep1", "img/Animals/Sheep1.svg", "sound/Animals/Sheep1.mp3" ),
      new SoundEffect( "Turkey1", "img/Animals/Turkey1.svg", "sound/Animals/Turkey1.wav" ),
      new SoundEffect( "Whales1", "img/Animals/Whales1.svg", "sound/Animals/Whales1.wav" ),
      new SoundEffect( "Wolf1", "img/Animals/Wolf1.svg", "sound/Animals/Wolf1.wav" )
    ];

    // Do something here for "about" page
    loadSounds( animalSounds );
    $$('.circleimage').on('click', function() {
        var path = window.location.pathname;
        path = path.substr(path, path.length - 10);
        findSelectedSound( path, this.id, animalSounds );
    });
});

myApp.onPageInit('fairy', function(page) {
    var fairyTaleSounds = [
      new SoundEffect( "BirdsWoodpecker1", "img/FairyTale/BirdsWoodpecker1.svg", "sound/FairyTale/BirdsWoodpecker1.mp3" ),
      new SoundEffect( "CastSpell1", "img/FairyTale/CastSpell1.svg", "sound/FairyTale/CastSpell1.wav" ),
      new SoundEffect( "CastSpell2", "img/FairyTale/CastSpell2.svg", "sound/FairyTale/CastSpell2.wav" ),
      new SoundEffect( "ClockTower1", "img/FairyTale/ClockTower1.svg", "sound/FairyTale/ClockTower1.mp3" ),
      new SoundEffect( "Dragon1", "img/FairyTale/Dragon1.svg", "sound/FairyTale/Dragon1.mp3" ),
      new SoundEffect( "Fanfare1", "img/FairyTale/Fanfare1.svg", "sound/FairyTale/Fanfare1.mp3" ),
      new SoundEffect( "FanfareFlourish1", "img/FairyTale/FanfareFlourish1.svg", "sound/FairyTale/FanfareFlourish1.mp3" ),
      new SoundEffect( "FireCrackling1", "img/FairyTale/FireCrackling1.svg", "sound/FairyTale/FireCrackling1.wav" ),
      new SoundEffect( "Flourish1", "img/FairyTale/Flourish1.svg", "sound/FairyTale/Flourish1.mp3" ),
      new SoundEffect( "GrandfatherClock1", "img/FairyTale/GrandfatherClock1.svg", "sound/FairyTale/GrandfatherClock1.mp3" ),
      new SoundEffect( "Harp1", "img/FairyTale/Harp1.svg", "sound/FairyTale/Harp1.mp3" ),
      new SoundEffect( "MagicTwinkle1", "img/FairyTale/MagicTwinkle1.svg", "sound/FairyTale/MagicTwinkle1.wav" ),
      new SoundEffect( "OrchestralString1", "img/FairyTale/OrchestralString1.svg", "sound/FairyTale/OrchestralString1.wav" ),
      new SoundEffect( "River1", "img/FairyTale/River1.svg", "sound/FairyTale/River1.mp3" ),
      new SoundEffect( "Rooster1", "img/FairyTale/Rooster1.svg", "sound/FairyTale/Rooster1.wav" ),
      new SoundEffect( "SwordFight1", "img/FairyTale/SwordFight1.svg", "sound/FairyTale/SwordFight1.mp3" ),
      new SoundEffect( "WitchCackle1", "img/FairyTale/WitchCackle1.svg", "sound/FairyTale/WitchCackle1.wav" ),
      new SoundEffect( "WitchCackle2", "img/FairyTale/WitchCackle2.svg", "sound/FairyTale/WitchCackle2.mp3" ),
      new SoundEffect( "Wizard1", "img/FairyTale/Wizard1.svg", "sound/FairyTale/Wizard1.mp3" )
    ];

    loadSounds( fairyTaleSounds );
    $$('.circleimage').on('click', function() {
        var path = window.location.pathname;
        path = path.substr(path, path.length - 10);
        findSelectedSound( path, this.id, fairyTaleSounds );
    });
}).trigger();


myApp.onPageInit('index', function(page) {
    var mainSounds = [
      new SoundEffect( "Ambulance1", "img/Main/Ambulance1.svg", "sound/Main/Ambulance1.mp3" ),
      new SoundEffect( "Applause1", "img/Main/Applause1.svg", "sound/Main/Applause1.wav" ),
      new SoundEffect( "Bell1", "img/Main/Bell1.svg", "sound/Main/Bell1.mp3" ),
      new SoundEffect( "BirdChirping1", "img/Main/BirdChirping1.svg", "sound/Main/BirdChirping1.mp3" ),
      new SoundEffect( "BirdsWoodpecker1", "img/Main/BirdsWoodpecker1.svg", "sound/Main/BirdsWoodpecker1.mp3" ),
      new SoundEffect( "BoatHorn1", "img/Main/BoatHorn1.svg", "sound/Main/BoatHorn1.wav" ),
      new SoundEffect( "BoatHorn2", "img/Main/BoatHorn2.svg", "sound/Main/BoatHorn2.mp3" ),
      new SoundEffect( "CarHorn1", "img/Main/CarHorn1.svg", "sound/Main/CarHorn1.mp3" ),
      new SoundEffect( "Cat1", "img/Main/Cat1.svg", "sound/Main/Cat1.wav" ),
      new SoundEffect( "Chimes1", "img/Main/Chimes1.svg", "sound/Main/Chimes1.mp3" ),
      new SoundEffect( "DogBarks1", "img/Main/DogBarks1.svg", "sound/Main/DogBarks1.mp3" ),
      new SoundEffect( "Doorbell1", "img/Main/Doorbell1.svg", "sound/Main/Doorbell1.wav" ),
      new SoundEffect( "EvilLaugh1", "img/Main/EvilLaugh1.svg", "sound/Main/EvilLaugh1.flac" ),
      new SoundEffect( "Fail1", "img/Main/Fail1.svg", "sound/Main/Fail1.mp3" ),
      new SoundEffect( "MagicTwinkle1", "img/Main/MagicTwinkle1.svg", "sound/Main/MagicTwinkle1.wav" ),
      new SoundEffect( "PhoneRinging1", "img/Main/PhoneRinging1.svg", "sound/Main/PhoneRinging1.wav" ),
      new SoundEffect( "PoliceSiren1", "img/Main/PoliceSiren1.svg", "sound/Main/PoliceSiren1.wav" ),
      new SoundEffect( "Success1", "img/Main/Success1.svg", "sound/Main/Success1.wav" ),
      new SoundEffect( "SuccessTaDa1", "img/Main/SuccessTaDa1.svg", "sound/Main/SuccessTaDa1.flac" ),
      new SoundEffect( "Suspense1", "img/Main/Suspense1.svg", "sound/Main/Suspense1.wav" ),
      new SoundEffect( "Thunder1", "img/Main/Thunder1.svg", "sound/Main/Thunder1.flac" ),
      new SoundEffect( "TrainWhistle1", "img/Main/TrainWhistle1.svg", "sound/Main/TrainWhistle1.wav" ),
      new SoundEffect( "Wind1", "img/Main/Wind1.svg", "sound/Main/Wind1.mp3" )
    ];

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
  var $id = $$("<center><h1>" + sound.id + "</h1></center>");
  $imgTag.appendTo(target);
  $id.appendTo(target);
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
    else {
      var $songDiv = $$("<div class='col-33'>");
      $songDiv.appendTo($divRow);
    }
    if( i + 2 < sounds.length ) {
      var $songDiv = $$("<div class='col-33'>");
      loadImage( sounds[i + 2], $songDiv );
      $songDiv.appendTo($divRow);
    }
    else {
      var $songDiv = $$("<div class='col-33'>");
      $songDiv.appendTo($divRow);
    }
    $divRow.appendTo($contentblock);
  }
}
