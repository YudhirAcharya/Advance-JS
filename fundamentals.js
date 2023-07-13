let bmiFind = (MW, MH, JW, JH) => {
  let BMIMark = MW / MH ** 2;
  let BMIJohn = JW / JH ** 2;

  console.log(BMIMark, BMIJohn);

  let markHigherBmi = null;

  if (BMIMark < BMIJohn) {
    markHigherBmi = "false";
  } else markHigherBmi = "true";

  if ((markHigherBmi = "true")) {
    console.log("mark has higher bmi");
  } else console.log("john has higher bmi");
};

bmiFind(78, 1.69, 92, 1.95);
bmiFind(95, 1.88, 85, 1.76);
