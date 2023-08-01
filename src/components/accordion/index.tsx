import { useState } from "react";
import { ComponentArrows } from "../icon/icon";
import Button from "../button";
import {AnimatePresence, motion, useAnimate} from "framer-motion";
import { InferencePriority } from "typescript";

export default function Accordion() {
  const arrButton: any[] = [
    {
        type: 'outlined',
        size: 'sm',
        text: 'Button Outlined',
        disabled: false,
        
    },
    {
      type: 'outlined',
      size: 'lg',
      text: 'Disabling Button',
      disabled: false
  },
  {
    type: 'outlined',
    size: 'lg',
    text: 'Disabling Button',
    disabled: false
},
{
  type: 'outlined',
  size: 'lg',
  text: 'Disabling Button',
  disabled: false
},
{
  type: 'outlined',
  size: 'lg',
  text: 'Disabling Button',
  disabled: false
},
{
  type: 'outlined',
  size: 'lg',
  text: 'Disabling Button',
  disabled: false
},
{
  type: 'outlined',
  size: 'lg',
  text: 'Disabling Button',
  disabled: false
},
{
  type: 'outlined',
  size: 'lg',
  text: 'Disabling Button',
  disabled: false
},
{
  type: 'outlined',
  size: 'lg',
  text: 'Disabling Button',
  disabled: false
},
{
  type: 'outlined',
  size: 'lg',
  text: 'Disabling Button',
  disabled: false
},
  ]

    const[isOpen, setIsOpen] = useState<boolean>(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    
    

          /*<div 
            className={`overflow-hidden transition-all duration-1000 
              ${isOpen ? 'min-h-fit' : 'h-0'}`}
            style={{ maxHeight: isOpen ? "1000px" : 0 }}>
          {isOpen && (
             <div 
              className="mt-4 text-neutral-500">
              {
                arrButton.map(btn => <Button key={btn.text} type={btn.type} size={btn.size} disabled={btn.disabled}>{btn.text} </Button>)
              }
            </div>   
            )}
            </div>
          
*/
    return (
        <>
        <div className="p-4 w-[460px] mx-auto bg-white rounded-lg shadow-md">
          <div
            className="px-4 py-2.5 flex gap-2.5 justify-between"
            onClick={toggleAccordion}
          >
            <h2 className="text-lg font-semibold text-neutral-900">Accordion Title</h2>
            <ComponentArrows className={`w-5 h-5 ${isOpen ? 'transform rotate-180' : ''} transition-transform duration-500`}></ComponentArrows>      
          </div>
          <motion.div
            layout
            initial={{ height: 0 }}
            animate={{ height: isOpen? 'auto' : 0}}
            style={{ overflow: "hidden" }}
            > 
            <AnimatePresence>
            {isOpen && (    
                <div className="mt-4 text-neutral-500">
                {
                  arrButton.map((btn, index) => <Button key={btn.text} type={btn.type} size={btn.size} disabled={btn.disabled}>{btn.text} </Button>)
                }
                </div>
              )}
            </AnimatePresence>
         </motion.div>     
        </div>
        
        
 
        </>
        
      )
}