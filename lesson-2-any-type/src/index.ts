let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;

// any type
let level
level = 1;
level = 'a';

// Not recommended, change noImplicitAny to false
function render (document) {
    console.log(document);
}