'use client';

import Image from 'next/image';
import {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
} from 'react';
import { CalendarIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import Calender from '@/components/Calender';
import DatePicker from '@/components/DatePicker';
import Link from 'next/link';

import { cva, VariantProps } from 'class-variance-authority';

// /buttons/dialoge/side menu/search/drawer/loaders/skelton/slider/tabs/avatr/check box/actions /dropdowns/alert dialog/swtich

export default function Home() {
  const [value, setValue] = useState([]);

  const dropdownItems = ['Item 1', 'Item 2', 'Items 3'];
  return (
    <section className="flex w-full">
 
    </section>
  );
}
// const Toast = () => {
//   return <div className="bg-white w-40 min-h-[80px] rounde-lg"></div>;
// };
