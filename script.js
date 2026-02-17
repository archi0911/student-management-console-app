function addStudent() {
    return "Add function";
}
function listStudent() {
    return "List function";
}
function searchStudent() {
    return "Search function";
}
function updateStudent() {
    return "Update function";
}
function removeStudent() {
    return "Remove function";
}

console.log("Student Management App Loaded!");
console.log("Available Functions:")

const details = ['Archi', 20, 'A'];
console.log(details);

let add = addStudent();
console.log(add);

let ls = listStudent();
console.log(ls);

let search = searchStudent();
console.log(search);

let update = updateStudent();
console.log(update);

let rm = removeStudent();
console.log(rm);