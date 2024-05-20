import { useRef } from "react";

interface RangeSliderProps {
    min: number;
    max: number;
    value?: number;
    onChange: (value: any) => void;
    sliderLabel?: number;
  }
  
  export default function RangeSlider(props: RangeSliderProps) {
    let {  onChange, value, min, max, sliderLabel } = props
  
    const range = useRef(null);
    const slider = useRef(null);
  
  
    return (<section className="flex item-center  flex-col my-3 w-full">
      <div className="relative h-2 mx-1 rounded-md bg-gray-300 mt-5">
      <div className="relative h-2  rounded-md bg-orange-500  absolute top-0"/>
        <input
          ref={slider}
          type="range"
          value={value}
          min={min}
          max={max}
          onChange={
            (event) => {
              console.log(event.target.value)
              let val = parseInt(event.target.value);
              onChange(value)
              value = val;
              event.target.value = val.toString();
            }
          }
          className=" absolute w-full  -top-0 h-1 bg-transparent appearance-none pointer-events-none"
        />
      </div>
    
    </section>)
  }