// Define DOM Elements
const tagsContainer = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// Auto focus textarea
textarea.focus();

// Listen for keyup event in <textarea>
textarea.addEventListener('keyup', (e) => {

    // Call createTags() with text typed in
    createTags(e.target.value);

});

function createTags(input){

    // Log input
    console.log(input);

}


