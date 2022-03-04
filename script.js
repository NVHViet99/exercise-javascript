const Mark = {
  fullName: "Mark Miller",
  mass: 7,
  height: 1.69,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

Mark.calcBMI();
John.calcBMI();

console.log(Mark.bmi, John.bmi);

if (Mark.bmi > John.bmi) {
  console.log(
    `${Mark.fullName}'s BMI (${Mark.bmi}) is higher than ${John.fullName}'s (${John.bmi})`
  );
} else if (Mark.bmi < John.bmi) {
  console.log(
    `${Mark.fullName}'s BMI (${Mark.bmi}) is lower than ${John.fullName}'s (${John.bmi})`
  );
}
