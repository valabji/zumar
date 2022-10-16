import React, { ReactElement } from 'react';

export default function dropDown(): ReactElement {
  return (
    <select name="section" className="dropDownBtn">
      <option value="0">All</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
  );
}
