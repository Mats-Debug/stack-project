'use client';

import Image from 'next/image';
import {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
  Fragment,
} from 'react';
import { CalendarIcon, EllipsisVerticalIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Calender from '@/components/Calender';
import DatePicker from '@/components/DatePicker';
import Button from '@/components/Button';
import Link from 'next/link';


import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import MDialog from '@/components/Dialog';

///dialoge/side menu/search/drawer/loaders/skelton/slider/tabs/avatr/check box/actions /dropdowns/alert dialog/swtich

export default function Home() {
  const [value, setValue] = useState([]);
  const [isShow, setiShow]=useState(false);
  const dropdownItems = ['Item 1', 'Item 2', 'Items 3'];
  return (
    <section className="flex w-full">
      <MDialog buttonTitle="buttonTitle" title='Modal' isShow={isShow}>
        <button className='bg-red-200 ' onClick={()=>{setiShow(false)}} >button</button>
      </MDialog>
    </section>
  );
}
// const Toast = () => {
//   return <div className="bg-white w-40 min-h-[80px] rounde-lg"></div>;
// };

