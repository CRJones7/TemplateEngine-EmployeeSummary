// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employees {
    constructor(name, email, ID, role, school){
        super(name, email, ID, role);
        this.school = school;
    }
};