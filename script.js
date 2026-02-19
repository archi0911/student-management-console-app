let students = [];

function addStudent(fname, age, grade) {
  let student = {
    id: Math.floor(Math.random() * 100),
    name: fname,
    age: age,
    grade: grade
  }
  students.push(student);
  console.log(student);
}

function listStudent() {
  console.log(students);
}

function searchStudent(name) {
  let len = students.length;
  let i;
  for(i=0; i<len; i++) {
    if (name == students[i].name) {
      console.log(students[i]);
      return;
    }
  }
  console.log("Name not found");
}

function updateStudent(id, fname, age, grade) {
  // students[0].name = fname;
  let len = students.length;
  let i;
  for(i=0; i<len; i++) {
    if (id == students[i].id) {
      students[i].name = fname;
      students[i].age = age;
      students[i].grade = grade;
      console.log(students[i]);

      console.log("Student Successfully Updated")
      return;
    }
  }
  console.log("Student not Found");
}

function removeStudent(id) {
  students.filter(item => item.id !== id);
  console.log(students);
}

console.log("Student Management App Loaded!");
console.log("Available Functions:");
console.log("addStudent(name, age, grade)");
console.log("listStudent()");
console.log("searchStudent(name)");
console.log("updateStudent(id)");
console.log("removeStudent()");

