const{studentList}=require ('./database.js');
const_=require("lodash");



const resolvers= {
    //TYPE STUDENT
   students:(parent, args, context, info) => {
    return (students);
   },

   student:{
    id:(parent, args, context, info) => 
    parent.id,
    email:(parent)=> parent.email,
    fullName:(parent) => parent.fullName,
    dept:(parent) => parent.dept,
    enrolled:(parent) => parent.enrolled,
   },


   // TYPE QUERY
   Query:{
    // we filter studentlist to knwon the student who has been enrolled 
    enrollment:(parent, args)=> {
        const enrolled= args.enrolled;
        const student=_.filter(studentList, {enrolled});
        return student;
    },

    // we used the student id to find a student 
    student:(parent, args)=> {
        const id= args.id;
        const student=_.find(studentList, {id: Number(id)});
        return student;
    },
   },


   // TYPE MUTATION
   Mutation: {
    registerStudent: (parent, args) => {
        student.push({
            id: students.lenght +1, // automatically generating the id 
            email:args.email,
            fullName: args.fullName,
            dept:args.dept,
            enrolled: false, //  we passed in forced because you are yet to be enrolled
        })
        return students[student.lenght -1]
  },

  // returning student that has ben accepted to enrolled 
    enroll:(parent, args) => {
        const studentToEnroll =studentList_.find((student) => student.id === Number(args.id))
        studentToEnroll.enrolled=true
        return studentToEnroll
    },

    // deleting a student using the id
    deleteStudent:(parent, args) =>{
        const id= argsiid;
        _.remove(studentList,(student)=> 
        student.id== Number(id));
        return null;
    },
  },

  
}

module.exports = {resolvers};