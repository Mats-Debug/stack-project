import { CalendarIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef, useState } from 'react';
interface DropdownProps {
  type: 'Icon' | 'TextIcon' | 'text';
  title?: string;
  icon?: React.ReactNode;
  items: any[];
  onSelect: (value: any) => void;
}

const Dropdown = (props: DropdownProps) => {
  const { type, icon, title, items, onSelect } = props;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
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
  }
  return (
    <div className="relative inline-block text-sm w-fit ">
      {type === 'Icon' && (
        <button
          onClick={() => onOpen()}
          className="flex hover:bg-[#f4f4f4] ml-[200px] rounded-full w-[40px] h-[40px] items-center justify-center"
        >
          {icon}
        </button>
      )}

      {type === 'TextIcon' && (
        <button
          onClick={() => onOpen()}
          className="relative inline-flex gap-2 hover:bg-[#f4f4f4]  rounded-full w-fit h-[40px] items-center  px-5"
        >
          <span className="text-nowrap flex w-full mr-5">{title}</span>
          <span className="absolute right-4 "> {icon}</span>
        </button>
      )}

      {isOpen && (
        <div
          ref={dropdownRef}
          className="origin-top-right absolute min-w-[150px] right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <ul
            className="py-1 block"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item, index) => (
              <li key={index} className="focus:bg-red-200 flex">
                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-baseline px-4 block  py-2 text-sm  hover:bg-[#f4f4f4] w-full  text-left"
                >
                  <span className="block "> {item}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
