import CheckIcon from "@heroicons/react/24/solid/CheckIcon";
import React from "react";

interface CheckBoxProps{
    title?: string;
    checked:boolean;
    onChecked:(value:any)=>void
  }
  export   function CheckBox(props:CheckBoxProps) {
    const {title,checked,onChecked}=props;
    const [isChecked, setIsChecked] = React.useState(checked);
    
    function onCheck(e: any) {
      var vl = e.target.checked;
      setIsChecked(vl);
      onChecked(vl);
    }
  
    return (
      <label className="flex relative w-fit cursor-pointer  ">
  
        <span className=" absolute w-[26px] h-[26px] flex items-center justify-center rounded-full">
          <CheckIcon className={`${!isChecked ? "hidden" : "text-white w-[20px] h-[20px]"}`}/>
        </span>
  
        <input onClick={onCheck} id="check-box-1" className="rounded-full ring-1 ring-black ring-opacity-10 checked:bg-orange-500 cursor-pointer  appearance-none h-[26px] w-[26px] shadow-lg bg-white  focus:outline-none transition" type="checkbox" />
  
        <p className="ml-2  text-gray-900 ">{title}</p>
      </label>
    )
  }
  


  interface CheckBox2Props{
    title?: string;
    checked:boolean;
    onChecked:(value:any)=>void
  }
  export  function CheckBox2(props:CheckBox2Props) {
    const {title,checked,onChecked}=props;
    const [isChecked, setIsChecked] = React.useState(checked);
    
    function onCheck(e: any) {
      var vl = e.target.checked;
      setIsChecked(vl);
      onChecked(vl);
    }
  
    return (
      <label className={`${!isChecked? "flex relative w-fit cursor-pointer  bg-[#f4f4f4] rounded-full p-2 ":"flex relative w-fit cursor-pointer bg-orange-500 rounded-full p-2 "}`}>
  
        <span className="absolute w-[26px] h-[26px] flex items-center justify-center rounded-full">
          <CheckIcon className={`${!isChecked ? "hidden" : "text-orange-500 w-[20px] h-[20px]"}`}/>
        </span>
  
        <input onClick={onCheck} id="check-box-1" className="rounded-full ring-1 ring-black ring-opacity-10 checked:bg-white- cursor-pointer  appearance-none h-[26px] w-[26px] shadow-lg bg-white  focus:outline-none transition" type="checkbox" />
  
        <p className={`${!isChecked? "ml-2 ":"ml-2  text-white "}`}>{title}</p>
      </label>
    )
  }
  