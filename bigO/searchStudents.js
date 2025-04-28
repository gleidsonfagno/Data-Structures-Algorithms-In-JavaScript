const studentsDatabase = ['jordan', 'erick', 'jhon', 'michael']

const findStudent = (allStudents, studentName) =>  {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i] === studentName) {
            console.log(`Found ${studentName}`)
        }
    }
}

findStudent(studentsDatabase, "jhon")