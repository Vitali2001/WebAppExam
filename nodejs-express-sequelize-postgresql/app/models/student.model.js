module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      fName: {
        type: Sequelize.STRING
      },
      lName: {
        type: Sequelize.STRING
      },
      mName: {
        type: Sequelize.STRING
      },
      subject: {
        type: Sequelize.STRING
      },
    });
  
    return Student;
  };