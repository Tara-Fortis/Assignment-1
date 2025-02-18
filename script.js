// grab the radio button output
const subjectInputs = document.querySelectorAll('input[name="subject"]');
// console.log(subjectInputs);
const verbInputs = document.querySelectorAll('input[name="verb"]');
const adjectiveInputs = document.querySelectorAll('input[name="adjective"]');
const directObjectInputs = document.querySelectorAll('input[name="directObject"]');
const indirectObjectInputs = document.querySelectorAll('input[name="indirectObject"]');

// grab a spot for the output
const subject = document.querySelector('#subject');
const verb = document.querySelector('#verb');
const adjective = document.querySelector('#adjective');
const directObject = document.querySelector('#directObject');
const indirectObject = document.querySelector('#indirectObject');
// console.log(story);

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

// directObject
for (let i= 0; i <directObjectInputs.length; i++){
    directObjectInputs[i].addEventListener('change', function(){
        directObject.textContent = this.value.replace('-', ' ')
        //console.log(this.value);
    })
}

// indirectObject
for (let i= 0; i <indirectObjectInputs.length; i++){
    indirectObjectInputs[i].addEventListener('change', function(){
        indirectObject.textContent = this.value.replaceAll('-', ' ');
        //console.log(this.value);
    })
}