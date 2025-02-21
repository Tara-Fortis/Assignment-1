// grab the radio button output
const subjectInputs = document.querySelectorAll('input[name="subject"]');
// console.log(subjectInputs);
const verbInputs = document.querySelectorAll('input[name="verb"]');
const adjectiveInputs = document.querySelectorAll('input[name="adjective"]');
const nounInputs = document.querySelectorAll('input[name="noun"]');
const phraseInputs = document.querySelectorAll('input[name="phrase"]');

// grab a spot for the output
const subject = document.querySelector('#subject');
const verb = document.querySelector('#verb');
const adjective = document.querySelector('#adjective');
const noun = document.querySelector('#noun');
const phrase = document.querySelector('#phrase');
// console.log(story);

// 
for (let i = 0; i < subjectInputs.length; i++){
    subjectInputs[i].addEventListener('change', function(){
        subject.textContent = this.value.replace('-', ' ');
    })
}

// verb
for (let i= 0; i <verbInputs.length; i++){
    verbInputs[i].addEventListener('change', function(){
        verb.textContent = this.value.replace('-', ' ');
    })
}

// adjective
for (let i= 0; i <adjectiveInputs.length; i++){
    adjectiveInputs[i].addEventListener('change', function(){
        adjective.textContent = this.value.replace('-', ' ');
        //console.log(adjective);
    })
}

// noun
for (let i= 0; i <nounInputs.length; i++){
    nounInputs[i].addEventListener('change', function(){
        noun.textContent = this.value.replace('-', ' ')
        //console.log(this.value);
    })
}

// phrase
for (let i= 0; i <phraseInputs.length; i++){
    phraseInputs[i].addEventListener('change', function(){
        phrase.textContent = this.value.replaceAll('-', ' ');
        //console.log(this.value);
    })
}

// create an array of words for each input type
    // subject array
    const subjectArray = ["My sister", "My brother", "Grandma", "Grandpa", "My best-friend", "The spider", "The wolf", "The horse", "A baby", "My Cousin"];
    // verb array
    const verbArray = ["hugged", "pushed", "kicked", "sat with", "played with", "whispered to", "laughed at", "ran from", "caught", "dropped"];
    // adjective array
    const adjectiveArray = ["a silly", "a stinky", "a cruel", "a grumpy", "a timid", "a cute", "a serious", "a foolish", "an energetic", "a clever"];
    // direct object array
    const nounArray = ["lion", "tiger", "zebra", "hippopotamus", "rhino", "kangaroo", "sloth", "deer", "fox", "lynx"];
    // prepositional phrase array
    const phraseArray = ["under the table", "behind the curtain", "beside the river", "near the tree", "above the clouds", "near the tree", "inside the box", "outside the window", "at the park", "by the sea"];

// create a variable to represent the "Generate! button"
const btn = document.querySelector("button");
const para = document.querySelector(".randomSentence");

// create a random number generator for numbers between 1 - 10
function rnd() {
    return Math.floor(Math.random() * 10);
}

// Output a random sentence when "Generate!" is clicked
function generateASentence() {
    const sentence = `${subjectArray[rnd()]} ${verbArray[rnd()]} ${adjectiveArray[rnd()]} ${nounArray[rnd()]} ${phraseArray[rnd()]}.`;
    para.innerHTML = sentence;
}

btn.addEventListener("click", generateASentence);