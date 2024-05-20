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
import { ArrowLongLeftIcon, Bars3Icon, CheckIcon, ChevronDownIcon, ChevronUpDownIcon, LockClosedIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MDialog, Mbutton } from '@/components/Dialog';
import { Dialog, DialogPanel, TabGroup, TabList, TabPanel, TabPanels, Transition, TransitionChild } from '@headlessui/react';
import SearchBar from '@/components/SearchBar';
import { PriceProvider, PriceDisplay } from '@/components/Price';
import Combobox from '@/components/ComboBox';

import RangeSlider from '@/components/RangeSlider';
import ChevronUpIcon from '@heroicons/react/24/outline/esm/ChevronUpIcon';
///skelton/avatr/alert dialog/

export default function Home() {

  const dropdownItems = ['Item 1', 'Item 2', 'Items 3',];

  return (
    <PriceProvider>
      <div className='justify-end w-full flex'>
        <ProfileAvatar title='Admin Jnn' image="" >
          ss
        </ProfileAvatar>
      </div>
    </PriceProvider>

  );

}



interface IProfileAvatarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  image: any;
  children:React.ReactNode;
}

export function ProfileAvatar(props: IProfileAvatarProps) {
  const { title, image, ...restProps } = props;

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

  var getInitials = function (name: string) {
    var parts = name.split(' ')
    var initials = ''
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].length > 0 && parts[i] !== '') {
        initials += parts[i][0]
      }
    }
    return initials.toUpperCase().slice(0, 3)
  }

  return (
    <span className="relative">
      <button onClick={() => onOpen()}>
        {image != "" && <Image src={image} alt="" className="rounded-full w-full h-full flex" width={100} height={100} />}
        {image == "" && <p className="font-bold text-[20px] items-center flex justify-center bg-[#f4f4f4] rounded-full h-[45px] w-[45px] ring-3 ring-white">{getInitials(title)}</p>}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="origin-top-right absolute p-2 min-w-[150px] right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        {...restProps}
        >
        
        </div>
      )}
    </span>

  )
}



function AvatarButton(){

  return(<></>)
}