class Student{
    constructor(name, schoolYear) {
        this._name = name;
        this._schoolYear = schoolYear;
    } 

    get name() {
        return this._name;
    }
}

export default Student;

export const createStudentFromJSON = (json)  => {
    const student = new Student(json.student_name, json.school_year);
    return student;
}