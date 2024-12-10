// src/BMICalculator.js

import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      // Determine the BMI category
      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setCategory('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    } else {
      alert("Please enter both weight and height!");
    }
  };

  return (
    <div className="bmi-container">
      <h1>BMI Calculator</h1>
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div>
          <h3>Your BMI is: {bmi}</h3>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
