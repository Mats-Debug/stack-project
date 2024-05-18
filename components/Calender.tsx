import { useEffect, useRef, useState } from 'react';
interface CalenderProps {
  onDateSelection: (date: number, month: number, year: number) => void;
}
export default function Calender(props: CalenderProps) {
  const { onDateSelection } = props;
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const todayDate = new Date().getDate();
  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth();

  const [isCurrentDate, setisCurrentDate] = useState(false);
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      todayDate
    );

    if (currentDate) {
      setisCurrentDate(true);
    }
  };

  return (
    <div className="w-fit justify-center mx-auto bg-white shadow-lg rounded-lg p-2   text-sm">
      <div className="flex gap-2 items-center justify-between w-full mb-2">
        <button
          onClick={prevMonth}
          className="  hover:bg-orange-500 h-[40px] w-[40px] rounded-full hover:text-white"
        >
          &larr;
        </button>
        <h2 className="text-md font-bold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button
          onClick={nextMonth}
          className="hover:bg-orange-500 h-[40px] w-[40px] rounded-full hover:text-white"
        >
          &rarr;
        </button>
      </div>
      <div className="grid grid-cols-7 text-center gap-1">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="font-bold">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center gap-1">
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div className="py-2 text-gray-500" key={index}></div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => (
          <button
            onClick={() => {
              onDateSelection(
                index + 1,
                currentDate.getMonth() + 1,
                currentDate.getFullYear()
              );
            }}
            key={index}
            className={`${
              (todayDate == index + 1) == true &&
              todayMonth == currentDate.getMonth() &&
              todayYear == currentDate.getFullYear()
                ? 'bg-orange-500 text-white '
                : 'bg-white'
            } hover:bg-orange-500 hover:text-white h-[30px] w-[30px] flex items-center justify-center rounded-full `}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
