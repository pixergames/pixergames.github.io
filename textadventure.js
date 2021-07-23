var story = 0; // keep story from being undefined 
var form = document.getElementById('theAdventure');// get the element with matching ids
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';

var story_telling = {
  "start": { //beginning of the story
    "question": "You set out on an adventure. Where do you choose to go?",
    "answers": {
      "a": "Ponder Pond",
      "b": "Conniving Cave",
      "c": "Miracle Mountain",
    }
  },
  // Forest Path 
  "1_a": {
    "question": "You decide to go to Ponder Pond. Upon arrival you encounter a very large frog, the size of a bucket. Do you...",
    "answers": {
      "a": "Ask them if they want to join you on your adventure.",
      "b": "Jump away in horror while rude things come out of your mouth.",
      "c": "Wave at them and continue on your way."
    }
  },

  "2_a": {
    "question": "The frog gladly accepts your offer and introduces itself as Gaylord. You have a wonderful time on your adventure, and end up saving the world. <br><br>The End.",
  },
  "2_b": {
    "question": "You upset the frog, which makes it grow larger. Once big enough, it eats you.<br><br>The end.",
  },
  "2_c": {
    "question": "The Frog courteously tips its imaginary hat at you, and you two never see each other again. Pity, because they were The Chosen One who you were born to assist on adventures. <br>br> The End.",
  },

  // Cave Path

  "1_b": {
    "question": "You enter the cold, yet smelly cave. Not long after you come upon a medium-size cave troll, with giant worms of snot hanging out of its nose.",
    "answers": {
      "d": "Run away screaming.",
      "e": "Ask them if they could use a tissue.",
      "f": "Try to assert your dominance by speaking very loudly and cleary: 'I AM NOW PASSING YOU.'",
    }
  },
  "2_d": {
    "question": "The troll begins wailing and its giant tears form a stream that drowns you before you make it out of the cave. <br><br>The end.",
  },
  "2_e": {
    "question": "The troll's chin shivers as it nods. You give them a clean tissue and make a life long friend. <br><br>The End.",
  },
  "2_f": {
    "question": "The troll looks at you in a funny way, and for a while it seems like it's going to let you pass. At the very last moment it crushes you to the wall, killing you instantly.<br><br>The End.",
    "end": "the end"
  },

  // Mountain Path

  "1_c": {
    "question": "After a long climb you can finally  smell the magical mountain air and feel its powers fill your lungs. You feel like you could do almost anything. What do you do?",
    "answers": {
      "g": "Jump off the mountain in an attempt to see if you can fly.",
      "h": "Start singing to see if you've gotten any better at it.",
      "i": "Go look for someone to fight.",
    }
  },
  "2_g": {
    "question": "You fall down and die. <br><br>The end.",
  },
  "2_h": {
    "question": "Your marvellous singing fills the air and creatures from all over start coming to hear you perform. You become a legend.<br><br>The end.",
  },
  "2_i": {
    "question": "You very soon find some one, but they refuse to fight. While trying to look tough you misstep, and fall off the cliff.<br><br>The end.",
  },
  
};

// Continue link
submit.addEventListener('mouseup', function(){ //when a button on a pointing device is released while the pointer is located inside it
  answer = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
  if(answer) {
    story++;//increment or add 1 to
    populateForm(story + '_' + answer);//if a radio is checked populate our form with the answer
    console.log("Story time!"); // Console log to make sure things are working
  }
});

// Reset button
function resetForm(){
    document.getElementById("theAdventure").reset();
}

// Generate answers from story
function populateForm(story) {
  var current_story = story_telling[story];//take values from story_telling story
  var text = '';

  for(var prop in current_story['answers']) {
    if(current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
      text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
    }
  }

form.querySelector('p').innerHTML = current_story.question;//write questions to the p tag in the HTML
form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset
 
}

populateForm('start');//set the form at the beginning