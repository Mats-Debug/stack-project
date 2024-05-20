import { ChevronUpDownIcon, MagnifyingGlassIcon, CheckIcon } from "@heroicons/react/24/solid";
import { useState, useRef, useEffect } from "react";

interface ComboboxProps {
    title?: string;
    items: any[];
    onSelect: (value: any, index: any) => void;
    placeholder: string;
    defaultItem?: string;
  }
  
 const Combobox = (props: ComboboxProps) => {
    const { title, items, placeholder, defaultItem, onSelect } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectValue] = useState(defaultItem ==null?placeholder:defaultItem);
    const [selectedItem, setSlectedItem] = useState( defaultItem);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [query, setQuery] = useState('');
    const searchInputRef = useRef(null);
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
  
  
      if (isOpen) {
        let dropdownRect = dropdownRef.current as any;
        const dropdownRec = dropdownRect.getBoundingClientRect();
        const isOverflowing = dropdownRec.bottom > window.innerHeight;
  
        if (isOverflowing) {
          dropdownRect.classList.add('bottom-full');
          dropdownRect.classList.remove('top-full');
        } else {
          dropdownRect.classList.add('top-full');
          dropdownRect.classList.remove('bottom-full');
        }
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);
    function onOpen() {
      setIsOpen(!isOpen);
      const searchInput = searchInputRef.current as any;
      searchInput?.focus();
    }
  
    let filteredOptions = items.filter(option =>
      option.toLowerCase().includes(query.toLowerCase())
    );
  
  
    function select(value: any, index: any) {
      onSelect(value, index);
      setIsOpen(false);
      setSelectValue(value);
      setSlectedItem(value);
    }
    return (
      <div className="relative inline-block text-sm w-fit ">
        <span className="relative flex items-center group w-fit ">
          <input
            type="button"
            onClick={() => {
              onOpen();
  
            }}
            value={ selectedValue}
            className="flex w-full  mouse-pointer h-[40px]   hover:bg-[#f4f4f4]  rounded-full outline-orange-500 text-sm pl-5 pr-10 "
          />
  
          <ChevronUpDownIcon className="h-5 w-5 absolute right-4" />
        </span>
  
  
        {isOpen && (
          <div
  
            ref={dropdownRef}
            className="origin-top-right absolute min-w-[200px] overflow-auto  p-1 right-0 mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <span className="relative flex items-center group w-fit ">
              <SearchInput
  
                palceHolder='Search...'
                onchange={(value: any) => {setQuery(value); }}
              />
  
              <MagnifyingGlassIcon className="h-5 w-5 absolute right-4" />
            </span>
            <ul
              className="py-1 block overflow-auto max-h-[300px] "
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
  
              {filteredOptions.length > 0 ? (
  
  
                filteredOptions.map((item, index) => (
                  <li key={index} className="focus:bg-red-200 flex flex-row items-center ">
  
                    <button
                      onClick={() => select(item, index)}
                      className="inline-flex rounded-full gap-3  px-4 block  py-2 text-sm  hover:bg-[#f4f4f4] w-full  text-left"
                    >
                      <div className='w-4 h-4 flex'>
                        {selectedItem == item && <CheckIcon className="h-4 w-4" />}
                      </div>
  
                      <span className=" "> {item}</span>
                    </button>
                  </li>
                ))
  
              ) : (<p className='pl-5'>{"Not Found"}</p>)}
  
  
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  interface SearchInput {
    onchange: (value: any) => void,
    palceHolder: string,
  }  
  
  function SearchInput(props: SearchInput) {
    const { onchange, palceHolder } = props;
    const searchInputRef = useRef(null);
    const[hasValue,setHasValue]=useState(false);
    useEffect(() => {
  
      const searchInput = searchInputRef.current as any;
      searchInput?.focus();
    })
    function valueChange(value:any){
     
      if(value!=""){
        setHasValue(true)
      }else{
        setHasValue(false)
      }
      onchange(value);
    }
    return (<>
    <span className='relative flex item-center justify-center'>
      <input
        ref={searchInputRef}
        onChange={e=> valueChange(e.target!.value)}
        className="flex w-full  focus  mouse-pointer h-[40px]   border-b  outline-none text-sm pl-5 pr-10 "
      />
     {hasValue ==false && <p className='w-fit flex absolute left-5 top-3'>{palceHolder}</p>}
  </span>
    </>)
  }
  

  export default Combobox;