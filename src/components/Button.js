import React from 'react';

const Button = (props) => {
  console.log(props);
  const { content, action, nameOfClass } = props;
  return (
    <button className={nameOfClass} onClick={action}>
      {content}
    </button>
  );
};

export default Button;
