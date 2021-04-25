let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2002',
    greeting: function(){ console.log('Hello!'); },
    'Favorite Teacher':{
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSEE110', 'CSE134','VIS 41']
};
console.log(student.name);
console.log(student['name']);
console.log(student['Grad Year']);
student.greeting();
console.log(student['Favorite Teacher'].name);
console.log(student.courseLoad[0]);
