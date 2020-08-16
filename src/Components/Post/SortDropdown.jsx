import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

const DropdownMenu = ({ clickHandler, options }) => {
  return (
    <div class="dropdown-menu-container">
      <ul class="dropdown-menu">
        {options.map((option) => (
          <li key={option} onClick={() => clickHandler(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ({ sortComments }) => {
  const options = [
    'Most Points',
    'Newest',
    'Default',
    'Oldest',
    'Least Points',
  ];
  const [selectedOption, setSelectedOption] = useState('Default');

  const handler = useCallback(
    (option) => {
      setSelectedOption(option);
      sortComments(option);
    },
    [setSelectedOption, sortComments]
  );

  return (
    <div className="sort-comment-dropdown">
      Sort By
      <div className="dropdown-container">
        <span>{selectedOption}</span>
        <DropdownMenu clickHandler={handler} options={options} />
      </div>
    </div>
  );
};
