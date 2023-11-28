import React, { useState } from 'react';

const Test = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h1>Select an Option</h1>
      <select onChange={handleSelectChange}>
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      {/* Display input based on the selectedValue */}
      {selectedValue === 'option1' && (
        <input type="text" placeholder="Input for Option 1" />
      )}
      {selectedValue === 'option2' && (
        <input type="text" placeholder="Input for Option 2" />
      )}
      {selectedValue === 'option3' && (
        <input type="text" placeholder="Input for Option 3" />
      )}
    </div>
  );
};

export default Test;
