// grab the radio button output
const subjectInputs = document.querySelectorAll('input[name="subject"]');
// console.log(subjectInputs);
// grab the paragraph element (#story)
const story = document.querySelector('.story');
// console.log(story);

for (let i = 0; i < subjectInputs.length; i++){
    subjectInputs[i].addEventListener('change', function(){
        story.textContent = this.value.replace('-', ' ');
    })
}

// do it for the rest of the document?

const verbInputs = document.querySelectorAll('input[name="verb"]');
for (let i= 0; i <verbInputs.length; i++){
    verbInputs[i].addEventListener('change', function(){
        story.textContent = this.value.replace('-', ' ');
    })
}