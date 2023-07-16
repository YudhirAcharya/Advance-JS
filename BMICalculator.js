const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(
    document.querySelector("#height").value
  );
  const weight = parseInt(
    document.querySelector("#weight").value
  );
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Give valid Height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Give valid Weight";
  } else {
    const BMI = (
      weight /
      ((height * height) / 10000)
    ).toFixed(3);
    results.textContent = BMI;
  }
});
