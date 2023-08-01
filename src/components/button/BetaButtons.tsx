import React, {useState} from 'react';
import Button from '.';


const MyButton: React.FC = () => {

const arrButton: any[] = [
    {
        type: 'outlined',
        size: 'sm',
        text: 'Button Outlined',
        disabled: true
        
    },
    {
        type: 'primary',
        size: 'md',
        text: 'Button Primary',
        disabled: true
    },
    {
        type: 'error',
        size: 'md',
        text: 'Button Error'
    },
    {
        type: 'secondary',
        size: 'lg',
        text: 'Button Secondary'
    },
    {
        type: 'text',
        size: 'lg',
        text: 'Button Text'
    }
]
    return (
        <div className="grid gap-4 grid-cols-１ grid-rows-1">
            {
                arrButton.map(btn => <Button key={btn.text} type={btn.type} size={btn.size} disabled={btn.disabled}>{btn.text} </Button>)
            }
           
           
        </div>
    
    );
};
 
export default MyButton;