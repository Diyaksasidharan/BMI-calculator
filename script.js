
  function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters

    if (weight <= 0 || height <= 0) {
      document.getElementById('result').innerHTML = '<p>Please enter valid weight and height.</p>';
    } else {
      var bmi = weight / (height * height);
      document.getElementById('result').innerHTML = "<p>Your BMI is: </p>" + bmi;
    }

  }