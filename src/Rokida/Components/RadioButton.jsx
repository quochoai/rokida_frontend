import React from 'react';

const RadioButton = (props) => {
  const { name, items, onChange } = props;

  return (
    <div className="radio-button">
      {name} <br />
      {items.map((item, index) => (
        <span key={'size-' + index}>
          <input
            id={name.toLowerCase() + index}
            type="radio"
            name={name.toLowerCase()}
            value={item}
            onChange={(event) => {
              onChange(event, name);
            }}
          />
          <label htmlFor={name.toLowerCase() + index}>{item}</label>
        </span>
      ))}
    </div>
  );
};

export default React.memo(RadioButton);
