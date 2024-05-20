import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";


interface AccordionProps{
    title:string;
    children: React.ReactNode;
  }
  
  function Accordion(props:AccordionProps){
    const{title, ...resProps}=props;
    const[isOpen, setIsOpen]=useState(false);
    return(
    <div className='flex w-full flex-col '>
    <button onClick={()=>{setIsOpen(!isOpen)}} className='flex flex-row justify-between h-[40px] items-center px-3'>
      <p>{title}</p>
      { isOpen!? <ChevronUpIcon  className='w-4 h-4  '/>:<ChevronDownIcon className='w-4 h-4 '/>}
    </button>
  
     { isOpen! && <div className='flex w-full bg-[#f4f4f4] rounded-lg p-3'{...resProps} />}
    </div>
    )
  }
  