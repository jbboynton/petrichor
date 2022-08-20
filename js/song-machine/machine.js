var articles = ["The", "Some", "One", "All"];
var punctuationA = [","];
var punctuationB = ["...", "!", "."];
var punctuationC = [",", "...", "!", ":"];
var conjunctions = [
  "Or", "But", "And", "Yet", "With", "Without"
];
var nouns = [
  "Forest", "Grove", "Quiet", "Grace", "Child", "Despair", "Hollow",
  "Flight", "Emptiness", "Retreat", "Fear", "Hunger", "Yawl", "Salt",
  "Gesture", "Ransom", "Dark", "Wilds", "Port", "Cask", "Hunt", "Tides",
  "Shallows", "Flame", "Ancestors", "Truth", "Verity", "Horse", "Rider",
  "Trains", "Tracks", "Tree", "Hawk", "Mind", "Body", "Time", "Gem",
  "Bloom", "Titan", "Crane", "Pond", "Greatness", "Hearse", "Home",
  "Here", "Hand", "Hammer", "Life", "Shelter", "Hunter", "Prey", "Prayer"
];
var adjectives = [
  "Low", "Steep", "Quiet", "Naked", "Wide", "Deadly", "Scant",
  "Northern", "Southern", "Great", "Terrible", "Tragic", "Silent", "Old",
  "Soft", "Weak", "Mighty", "Lost", "Wide-Eyed", "Bright", "Pale",
  "Fucked"
];
var gerunds = [
  "Towering", "Blinding", "Watching", "Beckoning", "Rolling", "Growing",
  "Dying", "Breathing", "Creeping", "Leaking", "Smiling", "Dividing",
  "Calling", "Waiting", "Drinking", "Hoping", "Swelling", "Shifting",
  "Breaking", "Suffering", "Fucking", "Hurting", "Pulsing", "Reaching",
  "Undying", "Longing", "Binding", "Sending"
];
var verbs = [
  "Lives", "Dies", "Calls", "Withers", "Greets", "Designs", "Reachs",
  "Pulls", "Delivers", "Praises", "Defies", "Protests", "Changes",
  "Steals", "Preaches", "Cares", "Gazes", "Rises", "Dawns", "Strains",
  "Wanes", "Waxes", "Loses", "Beckons", "Grows", "Arrests", "Limits",
  "Blesses", "Quenches", "Alights", "Illuminates", "Blinds", "Holds",
  "Raises", "Sees", "Feels", "Shines"
];
var descriptions = [
  "dynamic", "haunting", "hurried", "rustic", "circular",
  "sophishticated", "brootal", "bouncy", "mechanical", "hopeful",
  "soulful", "unpleasant", "uncomfortable", "amarous", "heavy",
  "industrial", "listless", "wild", "empty", "old-fashioned", "soothing",
  "childish", "soaring", "scary", "contemplative",
  "like the natural world", "like war"
];
var timeSignatures = [
  "3/4", "3/4", "3/4", "3/4", "3/4", "3/4", "3/4", "3/4", "3/4", "3/4",
  "4/4", "4/4", "4/4", "4/4", "4/4", "4/4", "4/4", "4/4", "4/4", "4/4",
  "5/8",
  "7/8"
];

function randTempo() {
  return Math.floor(Math.random() * (175 - 60 + 1) + 60);
}

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function songName() {
  return rand([
    rand(articles) + " " + rand(adjectives) + " " + rand(nouns),
    rand(nouns) + rand(punctuationC) + " " + rand(articles) + " " +
      rand(adjectives) + " " + rand(nouns),
    rand(adjectives) + rand(punctuationA) + " " + rand(adjectives) + " " +
      rand(nouns),
    rand(adjectives) + rand(punctuationA) + " " + rand(conjunctions) +
      " " + rand(adjectives),
    rand(nouns) + rand(punctuationB),
    rand(articles) + " " + rand(nouns) + " " + rand(conjunctions) + " " +
      rand(articles) + " " + rand(nouns),
    rand(nouns) + " and " + rand(nouns),
    rand(nouns) + ", " + rand(nouns) + ", and " + rand(nouns),
    rand(conjunctions) + " " + rand(gerunds) + " " + rand(nouns),
    rand(nouns),
    rand(gerunds),
    rand(adjectives) + ", " + rand(adjectives) + " " + rand(nouns),
    rand(nouns) + " " + rand(nouns),
    rand(nouns) + " " + rand(verbs),
    rand(verbs) + " and " + rand(verbs),
    rand(verbs) + rand(punctuationB) + " " + rand(verbs) +
      rand(punctuationB),
    rand(conjunctions) + " " + rand(gerunds) + " " + rand(nouns) + " " +
      rand(verbs),
    rand(gerunds) + " and " + rand(adjectives),
    rand(articles) + " " + rand(gerunds),
    "The " + rand(adjectives) + " " + rand(nouns),
    "The " + rand(gerunds),
    "The " + rand(adjectives),
    rand(adjectives) + " " + rand(nouns),
    rand(articles) + " " + rand(gerunds),
  ]);
}

function newSongIdea() {
  var name = songName();
  var time = rand(timeSignatures);
  var tempo = randTempo();
  var description = rand(descriptions);
  var idea = `Sketch an idea for a song called "${name}".<br>Time ` +
    `signature is ${time} and tempo is ${tempo}.<br>Make it sound ` +
    `${description}.`;

  var songIdeas = document.getElementById("song-ideas");

  for (var i = 0; i < songIdeas.children.length; i++) {
    songIdeas.children[i].classList.remove("newest");
    songIdeas.children[i].classList.remove("newest-fade");
  }

  songIdeas.innerHTML =
    `<section class="text-bg p-3 py-4 my-4 p-sm-4 round">
      <div class="d-flex flex-column">
        <div class="d-flex flex-column align-items-center justify-content-center">
          <p class="mb-0 text-center">
            Sketch an idea for a song called "${name}". Time signature is
            ${time} and tempo is ${tempo}. Make it sound ${description}.
          </p>
        </div>
      </div>
    </section>` + songIdeas.innerHTML;

  songIdeas.firstChild.classList.add("newest");
  setTimeout(function() {
    songIdeas.firstChild.classList.add("newest-fade");
  }, 3000);
}
