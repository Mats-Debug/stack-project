import { useEffect, useRef, useState } from 'react';
import { CalendarIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import Calender from '@/components/Calender';

interface DatePickerProps {
  onDateSelect: (value: any) => void;
}

export default function DatePicker(props: DatePickerProps) {
  const { onDateSelect } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [dateValue, setDateValue] = useState<string>();
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
    <div className="relative inline-block w-full">
      <div className="relative flex items-center group w-full">
        <input
          type="button"
          onClick={() => {
            onOpen();
          }}
          value={dateValue}
          placeholder={'Pick a date'}
          className="flex w-full  mouse-pointer h-[40px] bg-[#f4f4f4] outline-orange-500 text-sm pl-5 pr-10 rounded-full"
        />
        <CalendarIcon className="h-5 w-5 absolute right-4" />
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="origin-top-right absolute min-w-fit right-0  mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <Calender
            onDateSelection={(date, month, year) => {
              setIsOpen(!isOpen);
              const value =
                date.toString() +
                '/' +
                month.toString() +
                '/' +
                year.toString();
              setDateValue(value);
              onDateSelect(value);
            }}
          />
        </div>
      )}
    </div>
  );
}
