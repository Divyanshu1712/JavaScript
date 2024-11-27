// access doc object 

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const result = document.getElementById('result');

    if (height && weight) {
        const bmi = (weight / (height * height)).toFixed(2);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        result.textContent = `Your BMI is ${bmi} (${category})`;
        result.style.backgroundColor = getColor(bmi);
    } else {
        result.textContent = 'Please enter valid values for both height and weight.';
        result.style.backgroundColor = '';
    }
}
function getColor(bmi) {
    if (bmi < 18.5) return '#ffc107';  // Yellow for Underweight
    if (bmi >= 18.5 && bmi <= 24.9) return '#28a745';  // Green for Normal
    if (bmi >= 25 && bmi <= 29.9) return '#fd7e14';  // Orange for Overweight
    return '#dc3545';  // Red for Obese
}

