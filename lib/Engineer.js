// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employees {
    constructor(name, email, ID, role, github){
        super(name, email, ID, role);
        this.github = github;
    }
};