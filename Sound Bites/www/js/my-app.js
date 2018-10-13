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
  constructor(id,name,imagePath,soundPath) {
    this.id = id;
    this.name = name;
    this.imagePath = imagePath;
    this.soundPath = soundPath;
  }
}

// Now we need to run the code that will be executed only for About page.
var sound;

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('whacky', function (page) {
    var whackySounds = [
      new SoundEffect( "Applause1", "Applause", "img/Whacky/Applause1.svg", "sound/Whacky/Applause1.mp3" ),
      new SoundEffect( "BabyLaughing1", "Baby Laughing", "img/Whacky/BabyLaughing1.svg", "sound/Whacky/BabyLaughing1.mp3" ),
      new SoundEffect( "Belch1", "Belch", "img/Whacky/Belch1.svg", "sound/Whacky/Belch1.mp3" ),
      new SoundEffect( "Burp1", "Burp", "img/Whacky/Burp1.svg", "sound/Whacky/Burp1.mp3" ),
      new SoundEffect( "FemaleChuckle1", "Female Chuckle", "img/Whacky/FemaleChuckle1.svg", "sound/Whacky/FemaleChuckle1.mp3" ),
      new SoundEffect( "FemaleLaugh1", "Female Laugh", "img/Whacky/FemaleLaugh1.svg", "sound/Whacky/FemaleLaugh1.mp3" ),
      new SoundEffect( "FunnyLoop1", "Funny Loop", "img/Whacky/FunnyLoop1.svg", "sound/Whacky/FunnyLoop1.mp3" ),
      new SoundEffect( "GirlLaugh1", "Girl Laugh", "img/Whacky/GirlLaugh1.svg", "sound/Whacky/GirlLaugh1.mp3" ),
      new SoundEffect( "Grunt1", "Grunt 1", "img/Whacky/Grunt1.svg", "sound/Whacky/Grunt1.mp3" ),
      new SoundEffect( "Grunt2", "Grunt 2", "img/Whacky/Grunt2.svg", "sound/Whacky/Grunt2.mp3" ),
      new SoundEffect( "KidsLaughing1", "Kids Laughing", "img/Whacky/KidsLaughing1.svg", "sound/Whacky/KidsLaughing1.mp3" ),
      new SoundEffect( "OwOwOw1", "Ow Ow Ow", "img/Whacky/OwOwOw1.svg", "sound/Whacky/OwOwOw1.mp3" ),
      new SoundEffect( "PartyHorn1", "Party Horn", "img/Whacky/PartyHorn1.svg", "sound/Whacky/PartyHorn1.mp3" ),
      new SoundEffect( "Plop1", "Plop", "img/Whacky/Plop1.svg", "sound/Whacky/Plop1.mp3" ),
      new SoundEffect( "Sneeze1", "Sneeze", "img/Whacky/Sneeze1.svg", "sound/Whacky/Sneeze1.mp3" ),
      new SoundEffect( "Snoring1", "Snoring", "img/Whacky/Snoring1.svg", "sound/Whacky/Snoring1.mp3" ),
      new SoundEffect( "Squeak1", "Squeak", "img/Whacky/Squeak1.svg", "sound/Whacky/Squeak1.mp3" )
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
      new SoundEffect( "Alien1", "Alien 1", "img/SpaceStory/Alien1.svg", "sound/SpaceStory/Alien1.mp3" ),
      new SoundEffect( "Alien2", "Alien 2", "img/SpaceStory/Alien2.svg", "sound/SpaceStory/Alien2.mp3" ),
      new SoundEffect( "Alien3", "Alien 3", "img/SpaceStory/Alien3.svg", "sound/SpaceStory/Alien3.mp3" ),
      new SoundEffect( "Countdown1", "Countdown", "img/SpaceStory/Countdown1.svg", "sound/SpaceStory/Countdown1.mp3" ),
      new SoundEffect( "DoorFuturistic1", "Door Futuristic", "img/SpaceStory/DoorFuturistic1.svg", "sound/SpaceStory/DoorFuturistic1.mp3" ),
      new SoundEffect( "EerieBackground1", "Eerie Background", "img/SpaceStory/EerieBackground1.svg", "sound/SpaceStory/EerieBackground1.mp3" ),
      new SoundEffect( "Explosion1", "Explosion", "img/SpaceStory/Explosion1.svg", "sound/SpaceStory/Explosion1.mp3" ),
      new SoundEffect( "FlyingCar1", "Flying Car", "img/SpaceStory/FlyingCar1.svg", "sound/SpaceStory/FlyingCar1.mp3" ),
      new SoundEffect( "Laser1", "Laser 1", "img/SpaceStory/Laser1.svg", "sound/SpaceStory/Laser1.mp3" ),
      new SoundEffect( "Laser2", "Laser 2", "img/SpaceStory/Laser2.svg", "sound/SpaceStory/Laser2.mp3" ),
      new SoundEffect( "Launch1", "Launch", "img/SpaceStory/Launch1.svg", "sound/SpaceStory/Launch1.mp3" ),
      new SoundEffect( "LaunchSequence1", "Launch Sequence", "img/SpaceStory/LaunchSequence1.svg", "sound/SpaceStory/LaunchSequence1.mp3" ),
      new SoundEffect( "Phaser1", "Phaser 1", "img/SpaceStory/Phaser1.svg", "sound/SpaceStory/Phaser1.mp3" ),
      new SoundEffect( "Phaser2", "Phaser 2", "img/SpaceStory/Phaser2.svg", "sound/SpaceStory/Phaser2.mp3" ),
      new SoundEffect( "PulseEcho1", "Pulse Echo", "img/SpaceStory/PulseEcho1.svg", "sound/SpaceStory/PulseEcho1.mp3" ),
      new SoundEffect( "Robot1", "Robot 1", "img/SpaceStory/Robot1.svg", "sound/SpaceStory/Robot1.mp3" ),
      new SoundEffect( "Robot2", "Robot 2", "img/SpaceStory/Robot2.svg", "sound/SpaceStory/Robot2.mp3" ),
      new SoundEffect( "RobotCountdown1", "Robot Countdown", "img/SpaceStory/RobotCountdown1.svg", "sound/SpaceStory/RobotCountdown1.mp3" ),
      new SoundEffect( "RobotVoice1", "Robot Voice", "img/SpaceStory/RobotVoice1.svg", "sound/SpaceStory/RobotVoice1.mp3" ),
      new SoundEffect( "RobotWow1", "Robot Wow", "img/SpaceStory/RobotWow1.svg", "sound/SpaceStory/RobotWow1.mp3" ),
      new SoundEffect( "Space1", "Space", "img/SpaceStory/Space1.svg", "sound/SpaceStory/Space1.mp3" ),
      new SoundEffect( "UFO1", "U.F.O.", "img/SpaceStory/UFO1.svg", "sound/SpaceStory/UFO1.mp3" ),
      new SoundEffect( "UFOLanding1", "U.F.O. Landing", "img/SpaceStory/UFOLanding1.svg", "sound/SpaceStory/UFOLanding1.mp3" )
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
      new SoundEffect( "Cat1", "Cat", "img/ScaryStory/Cat1.svg", "sound/ScaryStory/Cat1.mp3" ),
      new SoundEffect( "Circus1", "Circus", "img/ScaryStory/Circus1.svg", "sound/ScaryStory/Circus1.mp3" ),
      new SoundEffect( "Creaking1", "Creaking", "img/ScaryStory/Creaking1.svg", "sound/ScaryStory/Creaking1.mp3" ),
      new SoundEffect( "CreakyDoor1", "Creaky Door", "img/ScaryStory/CreakyDoor1.svg", "sound/ScaryStory/CreakyDoor1.mp3" ),
      new SoundEffect( "DogBarks1", "Dog Barks", "img/ScaryStory/DogBarks1.svg", "sound/ScaryStory/DogBarks1.mp3" ),
      new SoundEffect( "DoorClosing1", "Door Closing", "img/ScaryStory/DoorClosing1.svg", "sound/ScaryStory/DoorClosing1.mp3" ),
      new SoundEffect( "EerieBackground2", "Eerie Background", "img/ScaryStory/EerieBackground2.svg", "sound/ScaryStory/EerieBackground2.mp3" ),
      new SoundEffect( "EvilLaugh1", "Evil Laugh 1", "img/ScaryStory/EvilLaugh1.svg", "sound/ScaryStory/EvilLaugh1.mp3" ),
      new SoundEffect( "EvilLaugh2", "Evil Laugh 2", "img/ScaryStory/EvilLaugh2.svg", "sound/ScaryStory/EvilLaugh2.mp3" ),
      new SoundEffect( "FireCrackling1", "Fire Crackling", "img/ScaryStory/FireCrackling1.svg", "sound/ScaryStory/FireCrackling1.mp3" ),
      new SoundEffect( "Ghost1", "Ghost 1", "img/ScaryStory/Ghost1.svg", "sound/ScaryStory/Ghost1.mp3" ),
      new SoundEffect( "Ghost2", "Ghost 2", "img/ScaryStory/Ghost2.svg", "sound/ScaryStory/Ghost2.mp3" ),
      new SoundEffect( "GhostScream1", "Ghost Scream", "img/ScaryStory/GhostScream1.svg", "sound/ScaryStory/GhostScream1.mp3" ),
      new SoundEffect( "MonsterLaugh1", "Monster Laugh", "img/ScaryStory/MonsterLaugh1.svg", "sound/ScaryStory/MonsterLaugh1.mp3" ),
      new SoundEffect( "MonsterRoar1", "Monster Roar", "img/ScaryStory/MonsterRoar1.svg", "sound/ScaryStory/MonsterRoar1.mp3" ),
      new SoundEffect( "Piano1", "Piano", "img/ScaryStory/Piano1.svg", "sound/ScaryStory/Piano1.mp3" ),
      new SoundEffect( "Rain1", "Rain", "img/ScaryStory/Rain1.svg", "sound/ScaryStory/Rain1.mp3" ),
      new SoundEffect( "Scream1", "Scream", "img/ScaryStory/Scream1.svg", "sound/ScaryStory/Scream1.mp3" ),
      new SoundEffect( "Storm1", "Storm", "img/ScaryStory/Storm1.svg", "sound/ScaryStory/Storm1.mp3" ),
      new SoundEffect( "Suspense1", "Suspense 1", "img/ScaryStory/Suspense1.svg", "sound/ScaryStory/Suspense1.mp3" ),
      new SoundEffect( "Suspense2", "Suspense 2", "img/ScaryStory/Suspense2.svg", "sound/ScaryStory/Suspense2.mp3" ),
      new SoundEffect( "Suspense3", "Suspense 3", "img/ScaryStory/Suspense3.svg", "sound/ScaryStory/Suspense3.mp3" ),
      new SoundEffect( "Suspense4", "Suspense 4", "img/ScaryStory/Suspense4.svg", "sound/ScaryStory/Suspense4.mp3" ),
      new SoundEffect( "Suspense5", "Suspense 5", "img/ScaryStory/Suspense5.svg", "sound/ScaryStory/Suspense5.mp3" ),
      new SoundEffect( "Thunder1", "Thunder", "img/ScaryStory/Thunder1.svg", "sound/ScaryStory/Thunder1.mp3" ),
      new SoundEffect( "TickTock1", "Tick Tock", "img/ScaryStory/TickTock1.svg", "sound/ScaryStory/TickTock1.mp3" ),
      new SoundEffect( "Wind1", "Wind", "img/ScaryStory/Wind1.svg", "sound/ScaryStory/Wind1.mp3" ),
      new SoundEffect( "WitchCackle1", "Witch Cackle 1", "img/ScaryStory/WitchCackle1.svg", "sound/ScaryStory/WitchCackle1.mp3" ),
      new SoundEffect( "WitchCackle2", "Witch Cackle 2", "img/ScaryStory/WitchCackle2.svg", "sound/ScaryStory/WitchCackle2.mp3" ),
      new SoundEffect( "Wolf1", "Wolf", "img/ScaryStory/Wolf1.svg", "sound/ScaryStory/Wolf1.mp3" )
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
      new SoundEffect( "AirRaidSiren1", "Air Raid Siren", "img/OldFashioned/AirRaidSiren1.svg", "sound/OldFashioned/AirRaidSiren1.mp3" ),
      new SoundEffect( "BellTower1", "Bell Tower", "img/OldFashioned/BellTower1.svg", "sound/OldFashioned/BellTower1.mp3" ),
      new SoundEffect( "BikeHorn1", "Bike Horn", "img/OldFashioned/BikeHorn1.svg", "sound/OldFashioned/BikeHorn1.mp3" ),
      new SoundEffect( "BoatHorn1", "Boat Horn", "img/OldFashioned/BoatHorn1.svg", "sound/OldFashioned/BoatHorn1.mp3" ),
      new SoundEffect( "CashRegister1", "Cash Register", "img/OldFashioned/CashRegister1.svg", "sound/OldFashioned/CashRegister1.mp3" ),
      new SoundEffect( "CuckooClock1", "Cuckoo Clock", "img/OldFashioned/CuckooClock1.svg", "sound/OldFashioned/CuckooClock1.mp3" ),
      new SoundEffect( "Dialing1", "Dialing", "img/OldFashioned/Dialing1.svg", "sound/OldFashioned/Dialing1.mp3" ),
      new SoundEffect( "Doorbell1", "Doorbell", "img/OldFashioned/Doorbell1.svg", "sound/OldFashioned/Doorbell1.mp3" ),
      new SoundEffect( "HorseGalloping1", "Horse Galloping", "img/OldFashioned/HorseGalloping1.svg", "sound/OldFashioned/HorseGalloping1.mp3" ),
      new SoundEffect( "OldPhone1", "Old Phone", "img/OldFashioned/OldPhone1.svg", "sound/OldFashioned/OldPhone1.mp3" ),
      new SoundEffect( "OldPoliceSiren1", "Old Police Siren", "img/OldFashioned/OldPoliceSiren1.svg", "sound/OldFashioned/OldPoliceSiren1.mp3" ),
      new SoundEffect( "Projector1", "Projector", "img/OldFashioned/Projector1.svg", "sound/OldFashioned/Projector1.mp3" ),
      new SoundEffect( "SchoolBell1", "School Bell", "img/OldFashioned/SchoolBell1.svg", "sound/OldFashioned/SchoolBell1.mp3" ),
      new SoundEffect( "ScreenDoor1", "Screen Door", "img/OldFashioned/ScreenDoor1.svg", "sound/OldFashioned/ScreenDoor1.mp3" ),
      new SoundEffect( "SubmarinePing1", "Submarine Ping", "img/OldFashioned/SubmarinePing1.svg", "sound/OldFashioned/SubmarinePing1.mp3" ),
      new SoundEffect( "TickTock1", "Tick Tock", "img/OldFashioned/TickTock1.svg", "sound/OldFashioned/TickTock1.mp3" ),
      new SoundEffect( "TrainWhistle1", "Train Whistle", "img/OldFashioned/TrainWhistle1.svg", "sound/OldFashioned/TrainWhistle1.mp3" ),
      new SoundEffect( "Typewriter1", "Typewriter", "img/OldFashioned/Typewriter1.svg", "sound/OldFashioned/Typewriter1.mp3" ),
      new SoundEffect( "TypewriterBell1", "Typewriter Bell", "img/OldFashioned/TypewriterBell1.svg", "sound/OldFashioned/TypewriterBell1.mp3" ),
      new SoundEffect( "Whip1", "Whip", "img/OldFashioned/Whip1.svg", "sound/OldFashioned/Whip1.mp3" )
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
      new SoundEffect( "BirdChirping1", "Bird Chirping", "img/Animals/BirdChirping1.svg", "sound/Animals/BirdChirping1.mp3" ),
      new SoundEffect( "Cat1", "Cat", "img/Animals/Cat1.svg", "sound/Animals/Cat1.mp3" ),
      new SoundEffect( "Cow1", "Cow", "img/Animals/Cow1.svg", "sound/Animals/Cow1.mp3" ),
      new SoundEffect( "CoyotePlus1", "Coyote Plus", "img/Animals/CoyotePlus1.svg", "sound/Animals/CoyotePlus1.mp3" ),
      new SoundEffect( "Crickets1", "Crickets", "img/Animals/Crickets1.svg", "sound/Animals/Crickets1.mp3" ),
      new SoundEffect( "Crow1", "Crow", "img/Animals/Crow1.svg", "sound/Animals/Crow1.mp3" ),
      new SoundEffect( "DogBarks1", "Dog Barks", "img/Animals/DogBarks1.svg", "sound/Animals/DogBarks1.mp3" ),
      new SoundEffect( "Ducks1", "Ducks", "img/Animals/Ducks1.svg", "sound/Animals/Ducks1.mp3" ),
      new SoundEffect( "Elephant1", "Elephant", "img/Animals/Elephant1.svg", "sound/Animals/Elephant1.mp3" ),
      new SoundEffect( "Flies1", "Flies", "img/Animals/Flies1.svg", "sound/Animals/Flies1.mp3" ),
      new SoundEffect( "Frog1", "Frog", "img/Animals/Frog1.svg", "sound/Animals/Frog1.mp3" ),
      new SoundEffect( "Geese1", "Geese", "img/Animals/Geese1.svg", "sound/Animals/Geese1.mp3" ),
      new SoundEffect( "Goat1", "Goat", "img/Animals/Goat1.svg", "sound/Animals/Goat1.mp3" ),
      new SoundEffect( "Horse1", "Horse", "img/Animals/Horse1.svg", "sound/Animals/Horse1.mp3" ),
      new SoundEffect( "Kitten1", "Kitten 1", "img/Animals/Kitten1.svg", "sound/Animals/Kitten1.mp3" ),
      new SoundEffect( "Kitten2", "Kitten 2", "img/Animals/Kitten2.svg", "sound/Animals/Kitten2.mp3" ),
      new SoundEffect( "Lion1", "Lion", "img/Animals/Lion1.svg", "sound/Animals/Lion1.mp3" ),
      new SoundEffect( "Monkeys1", "Monkeys", "img/Animals/Monkeys1.svg", "sound/Animals/Monkeys1.mp3" ),
      new SoundEffect( "MouseSqueak1", "Mouse Squeak", "img/Animals/MouseSqueak1.svg", "sound/Animals/MouseSqueak1.mp3" ),
      new SoundEffect( "PigGrunt1", "Pig Grunt", "img/Animals/PigGrunt1.svg", "sound/Animals/PigGrunt1.mp3" ),
      new SoundEffect( "PigSnort1", "Pig Snort", "img/Animals/PigSnort1.svg", "sound/Animals/PigSnort1.mp3" ),
      new SoundEffect( "Rooster1", "Rooster", "img/Animals/Rooster1.svg", "sound/Animals/Rooster1.mp3" ),
      new SoundEffect( "Sheep1", "Sheep", "img/Animals/Sheep1.svg", "sound/Animals/Sheep1.mp3" ),
      new SoundEffect( "Turkey1", "Turkey", "img/Animals/Turkey1.svg", "sound/Animals/Turkey1.mp3" ),
      new SoundEffect( "Whales1", "Whales", "img/Animals/Whales1.svg", "sound/Animals/Whales1.mp3" ),
      new SoundEffect( "Wolf1", "Wolf", "img/Animals/Wolf1.svg", "sound/Animals/Wolf1.mp3" )
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
      new SoundEffect( "BirdsWoodpecker1", "Birds Woodpecker", "img/FairyTale/BirdsWoodpecker1.svg", "sound/FairyTale/BirdsWoodpecker1.mp3" ),
      new SoundEffect( "CastSpell1", "Cast Spell 1", "img/FairyTale/CastSpell1.svg", "sound/FairyTale/CastSpell1.mp3" ),
      new SoundEffect( "CastSpell2", "Cast Spell 2", "img/FairyTale/CastSpell2.svg", "sound/FairyTale/CastSpell2.mp3" ),
      new SoundEffect( "ClockTower1", "Clock Tower", "img/FairyTale/ClockTower1.svg", "sound/FairyTale/ClockTower1.mp3" ),
      new SoundEffect( "Dragon1", "Dragon", "img/FairyTale/Dragon1.svg", "sound/FairyTale/Dragon1.mp3" ),
      new SoundEffect( "Fanfare1", "Fanfare", "img/FairyTale/Fanfare1.svg", "sound/FairyTale/Fanfare1.mp3" ),
      new SoundEffect( "FanfareFlourish1", "Fanfare Flourish", "img/FairyTale/FanfareFlourish1.svg", "sound/FairyTale/FanfareFlourish1.mp3" ),
      new SoundEffect( "FireCrackling1", "Fire Crackling", "img/FairyTale/FireCrackling1.svg", "sound/FairyTale/FireCrackling1.mp3" ),
      new SoundEffect( "Flourish1", "Flourish", "img/FairyTale/Flourish1.svg", "sound/FairyTale/Flourish1.mp3" ),
      new SoundEffect( "GrandfatherClock1", "Grandfather Clock", "img/FairyTale/GrandfatherClock1.svg", "sound/FairyTale/GrandfatherClock1.mp3" ),
      new SoundEffect( "Harp1", "Harp", "img/FairyTale/Harp1.svg", "sound/FairyTale/Harp1.mp3" ),
      new SoundEffect( "MagicTwinkle1", "Magic Twinkle", "img/FairyTale/MagicTwinkle1.svg", "sound/FairyTale/MagicTwinkle1.mp3" ),
      new SoundEffect( "OrchestralString1", "Orchestral String", "img/FairyTale/OrchestralString1.svg", "sound/FairyTale/OrchestralString1.mp3" ),
      new SoundEffect( "River1", "River", "img/FairyTale/River1.svg", "sound/FairyTale/River1.mp3" ),
      new SoundEffect( "Rooster1", "Rooster", "img/FairyTale/Rooster1.svg", "sound/FairyTale/Rooster1.mp3" ),
      new SoundEffect( "SwordFight1", "Sword Fight", "img/FairyTale/SwordFight1.svg", "sound/FairyTale/SwordFight1.mp3" ),
      new SoundEffect( "WitchCackle1", "Witch Cackle 1", "img/FairyTale/WitchCackle1.svg", "sound/FairyTale/WitchCackle1.mp3" ),
      new SoundEffect( "WitchCackle2", "Witch Cackle 2", "img/FairyTale/WitchCackle2.svg", "sound/FairyTale/WitchCackle2.mp3" ),
      new SoundEffect( "Wizard1", "Wizard", "img/FairyTale/Wizard1.svg", "sound/FairyTale/Wizard1.mp3" )
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
      new SoundEffect( "Ambulance1", "Ambulance", "img/Main/Ambulance1.svg", "sound/Main/Ambulance1.mp3" ),
      new SoundEffect( "Applause1", "Applause", "img/Main/Applause1.svg", "sound/Main/Applause1.mp3" ),
      new SoundEffect( "Bell1", "Bell", "img/Main/Bell1.svg", "sound/Main/Bell1.mp3" ),
      new SoundEffect( "BirdChirping1", "Bird Chirping", "img/Main/BirdChirping1.svg", "sound/Main/BirdChirping1.mp3" ),
      new SoundEffect( "BirdsWoodpecker1", "Birds Woodpecker", "img/Main/BirdsWoodpecker1.svg", "sound/Main/BirdsWoodpecker1.mp3" ),
      new SoundEffect( "BoatHorn1", "Boat Horn 1", "img/Main/BoatHorn1.svg", "sound/Main/BoatHorn1.mp3" ),
      new SoundEffect( "BoatHorn2", "Boat Horn 2", "img/Main/BoatHorn2.svg", "sound/Main/BoatHorn2.mp3" ),
      new SoundEffect( "CarHorn1", "Car Horn", "img/Main/CarHorn1.svg", "sound/Main/CarHorn1.mp3" ),
      new SoundEffect( "Cat1", "Cat", "img/Main/Cat1.svg", "sound/Main/Cat1.mp3" ),
      new SoundEffect( "Chimes1", "Chimes", "img/Main/Chimes1.svg", "sound/Main/Chimes1.mp3" ),
      new SoundEffect( "DogBarks1", "Dog Barks", "img/Main/DogBarks1.svg", "sound/Main/DogBarks1.mp3" ),
      new SoundEffect( "Doorbell1", "Doorbell", "img/Main/Doorbell1.svg", "sound/Main/Doorbell1.mp3" ),
      new SoundEffect( "EvilLaugh1", "Evil Laugh", "img/Main/EvilLaugh1.svg", "sound/Main/EvilLaugh1.mp3" ),
      new SoundEffect( "Fail1", "Fail", "img/Main/Fail1.svg", "sound/Main/Fail1.mp3" ),
      new SoundEffect( "MagicTwinkle1", "Magic Twinkle", "img/Main/MagicTwinkle1.svg", "sound/Main/MagicTwinkle1.mp3" ),
      new SoundEffect( "PhoneRinging1", "Phone Ringing", "img/Main/PhoneRinging1.svg", "sound/Main/PhoneRinging1.mp3" ),
      new SoundEffect( "PoliceSiren1", "Police Siren", "img/Main/PoliceSiren1.svg", "sound/Main/PoliceSiren1.mp3" ),
      new SoundEffect( "Success1", "Success", "img/Main/Success1.svg", "sound/Main/Success1.mp3" ),
      new SoundEffect( "SuccessTaDa1", "Success Ta Da", "img/Main/SuccessTaDa1.svg", "sound/Main/SuccessTaDa1.mp3" ),
      new SoundEffect( "Suspense1", "Suspense", "img/Main/Suspense1.svg", "sound/Main/Suspense1.mp3" ),
      new SoundEffect( "Thunder1", "Thunder", "img/Main/Thunder1.svg", "sound/Main/Thunder1.mp3" ),
      new SoundEffect( "TrainWhistle1", "Train Whistle", "img/Main/TrainWhistle1.svg", "sound/Main/TrainWhistle1.mp3" ),
      new SoundEffect( "Wind1", "Wind", "img/Main/Wind1.svg", "sound/Main/Wind1.mp3" )
    ];

    loadSounds( mainSounds );
    $$('.circleimage').on('click', function() {
        var path = window.location.pathname;
        path = path.substr(path, path.length - 10);
        findSelectedSound( path, this.id, mainSounds );
    });
}).trigger();


function playAudio(src) {
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
  var $id = $$("<center><h3>" + sound.name + "</h3></center>");
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
