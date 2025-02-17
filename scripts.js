

const courses = [      
  { id: 'c1', name: 'CSCI 204', prereqs: 'CSCI*120 or CSCI*145 with a grade of C or better.' },
  { id: 'c2', name: 'CBAD 291', prereqs: 'C or better in UNIV 110, and a grade of C or better in one of the following: MATH 138, MATH 130, MATH 132, MATH*130B, MATH*160B or MATH 160.' },
  { id: 'c3', name: 'History 101', prereqs: 'None' },
  { id: 'c4', name: 'CSCI 225', prereqs: 'Student must have taken MATH*174 and CSCI*135 or CSCI*140/L with a grade of C or better.' }
];

function displayCourses() {
  const courseList = document.getElementById('course-list');
  courses.forEach(course => {
    const div = document.createElement('div');
    div.className = 'course';
    div.draggable = true;
    div.id = course.id;
    div.textContent = course.name;
    div.onclick = () => alert(`Course: ${course.name}\nPrerequisites: ${course.prereqs}`);
    div.ondragstart = drag;
    courseList.appendChild(div);
  });
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData('text', event.target.id);
}

function drop(event) {
  event.preventDefault();
  const courseId = event.dataTransfer.getData('text');
  const courseElement = document.getElementById(courseId);
  event.target.appendChild(courseElement);
}

window.onload = displayCourses;