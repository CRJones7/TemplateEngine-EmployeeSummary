// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employees {
    constructor(name, email, ID, role, office){
        super(name, email, ID, role);
        this.office = office;
    }
};