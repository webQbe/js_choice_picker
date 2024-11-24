// Define DOM Elements
const tagList = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// Auto focus textarea
textarea.focus();

// Listen for keyup event in <textarea>
textarea.addEventListener('keyup', (e) => {

    // Call createTags() with text typed in
    createTags(e.target.value);

    if(e.key === 'Enter'){

        // If Enter key is pressed

        // Clear textarea after 10ms
        setTimeout(() => e.target.value = '', 10); 

        // Randomly pick a choice
        randomSelect();

    }

});

function createTags(input){

   // Split input string 
   
   const tags = input 
    .split(',') // Split input string into an array of substrings based on comma

    .filter(tag => tag.trim() !== '')/* Removes empty or whitespace-only strings from the array.
        tag.trim(): 
        Just checking leading and trailing whitespace from each string, but filter() does not modify the array elements.

        tag.trim() !== '' Condition: 
        filter() method just evaluates whether each element should be included in the result based on the provided condition that if leading and trailing whitespaces from each string are removed with tag.trim(), no empty strings should be included (!== '').

        Example: 
            before filter:["apple", " banana ", " ", " orange"] 
            after filter :["apple", " banana ", " orange"]
        */

    .map(tag => tag.trim()); /* Actually Trims whitespace from the beginning and end of each remaining tag in the array. 

        before map:["apple", " banana ", " orange"]
        after map: ["apple", "banana", "orange"]  
        */

        // Clear default tagList
        tagList.innerHTML = '';

        tags.forEach(tag => {

            // Create span element for current tag
            const tagSpan = document.createElement('span');

            // Add CSS slector
            tagSpan.classList.add('tag');

            // Add text from current substring
            tagSpan.innerText = tag;

            // Add to tagList
            tagList.appendChild(tagSpan);

        });
    
}

function randomSelect(){

    const times = 30;

    // Call pickRandomTag() every 100ms
    const interval = setInterval(() => {const randomTag = pickRandomTag()}, 100);

}

function pickRandomTag(){

    // Select all tags to create tags array
    const tags = document.querySelectorAll('.tag');

    // Generate random index number to pick a tag by
    // multiplying random decimal by array length and
    // rounding it down to get a whole number
    return tags[Math.floor(Math.random() * tags.length)];

    /* Math.floor(): rounds a number down to the nearest integer.

           It takes a number and removes the decimal portion, always moving toward the next lowest integer.
           For example:

           Math.floor(4.7);  // Output: 4
           Math.floor(-4.7); // Output: -5 
       */


}



