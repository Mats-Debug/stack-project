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
import { ArrowLongLeftIcon, Bars3Icon, LockClosedIcon } from '@heroicons/react/24/outline';
import { MDialog, Mbutton } from '@/components/Dialog';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import SearchBar from '@/components/SearchBar';
import { PriceProvider ,PriceDisplay,CurrencyDropDown} from '@/components/Price';

///search/loaders/skelton/slider/tabs/avatr/check box /dropdowns/alert dialog/swtich

export default function Home() {
  const [value, setValue] = useState([]);
  const [isShow, setiShow] = useState(false);
  let [isOpen, setIsOpen] = React.useState(true);



  const dropdownItems = ['Item 1', 'Item 2', 'Items 3'];

  return (
    <PriceProvider>
      <section className="flex w-full">
      <CurrencyDropDown/>
        <SearchBar />
      </section>
      <PriceDisplay  priceType='UGX' priceValue={1000}/>
    </PriceProvider>

  );
}

