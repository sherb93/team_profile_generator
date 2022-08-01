const Employee = require("../lib/Employee");

describe("When I create a new Employee it", () => {
  it("should create a new instance object", () => {
    //AAA
    //Arrange
    //Act
    const instanceObject = new Employee();
    //Assert
    expect(typeof instanceObject).toBe("object");
  });
  it("should use the arguments to populate the instance properties", () => {
    //AAA
    //Arrange
    //Act
    const newGuy = new Employee("Jim", 34, "jim@gmail.com");
    //Assert
    expect(newGuy).toEqual({ name: "Jim", id: 34, email: "jim@gmail.com" });
  });
});

describe("When calling the method", () => {
  it("getName, it should return the employee's name", () => {
    //AAA
    //Arrange
    const name = "Jodi";
    const newObj = new Employee(name);
    //Act
    const newName = newObj.getName();
    //Assert
    expect(newName).toBe(name);
  });
  it("getId, it should return the employee's id", () => {
    //AAA
    //Arrange
    const id = 55;
    const newObj = new Employee("Jim", id);
    //Act
    const newId = newObj.getId();
    //Assert
    expect(newId).toBe(id);
  });
  it("getEmail, it should return the employee's id", () => {
    //AAA
    //Arrange
    const email = "email@gmail.com";
    const newObj = new Employee("Jim", 55, email);
    //Act
    const newEmail = newObj.getEmail();
    //Assert
    expect(newEmail).toBe(email);
  });
  it("getRole, it should return the string 'Employee'", () => {
    //AAA
    //Arrange
    //Act
    const newObj = new Employee();
    //Assert
    expect(newObj.getRole()).toBe("Employee");
  });
});
