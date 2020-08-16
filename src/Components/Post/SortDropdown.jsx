import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

const DropdownMenu = ({ clickHandler, options, selectedOption }) => {
  return (
    <div className="dropdown-menu-container">
      <ul className="dropdown-menu">
        {options.map((option) => {
          const style =
            option === selectedOption
              ? { color: 'var(--orange-accent)' }
              : undefined;
          return (
            <li style={style} key={option} onClick={() => clickHandler(option)}>
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ({ sortComments }) => {
  const options = [
    // 'Most Points',
    'Default',
    'Newest',
    'Oldest',
    // 'Least Points',
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
        <DropdownMenu
          clickHandler={handler}
          options={options}
          selectedOption={selectedOption}
        />
      </div>
    </div>
  );
};
