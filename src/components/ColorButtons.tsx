import React, { useState } from 'react';

const ColorButton: React.FC = () => {
    const [color, setColor] = useState('primary');
    const [text, setText] = useState('Try me');
    const [isDisabled, setIsDisabled] = useState(false);

    const changeColor = () => {
        let newColor = '';
        let newText = '';

        switch(color){
            case 'primary':
                newColor ='warning';
                newText = 'Warning';
                break;
            case 'warning':
                newColor ='error';
                newText = 'Error';
                break;
            case 'error':
              newColor ='info';
              newText = 'Info';
              break;
            default:
                newColor = 'primary';
                newText = 'Primary';
                break;
        }

        setColor(newColor);
        setText(newText);
        //setIsDisabled(true);
    };

  return (
    <>
    <button
      className={`p-4 rounded
      w-full h-full 
      bg-${color}-500
      hover:bg-${color}-600 
      focus:drop-shadow-${color}
      active:bg-${color}-700 drop-shadow-0
      disabled:bg-primary-Focus
      `}
      onClick={changeColor}
      disabled={isDisabled}
    >
    <span className="mr-2">+</span>
      {text}
    </button>
    </>
  );
};

export default ColorButton;
