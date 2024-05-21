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
import { CalendarIcon, EllipsisVerticalIcon, InboxIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Calender from '@/components/Calender';
import DatePicker from '@/components/DatePicker';
import Button from '@/components/Button';
import Link from 'next/link';

import { cva, VariantProps } from 'class-variance-authority';
import React ,{PureComponent}from 'react';
import { ArrowLongLeftIcon, Bars3Icon, CheckIcon, ChevronDownIcon, ChevronUpDownIcon, LockClosedIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MDialog, Mbutton } from '@/components/Dialog';
import { Dialog, DialogPanel, TabGroup, TabList, TabPanel, TabPanels, Transition, TransitionChild } from '@headlessui/react';
import SearchBar from '@/components/SearchBar';
import { PriceProvider, PriceDisplay } from '@/components/Price';
import Combobox from '@/components/ComboBox';

import RangeSlider from '@/components/RangeSlider';
import ChevronUpIcon from '@heroicons/react/24/outline/esm/ChevronUpIcon';
import Example from '@/components/PureComp';

///skelton/product card/ charts
/// create database 
/// admin /shop - pages

export default function Home() {

  const dropdownItems = ['Item 1', 'Item 2', 'Items 3'];

  var data = [
    { label: "Jan", data: 20, year: 2024 },
    { label: "Feb", data: 20, year: 2024 },
    { label: "Mar", data: 0, year: 2024 },
    { label: "Apr", data: 200, year: 2024 },
    { label: "May", data: 0, year: 2024 },
    { label: "Jun", data: 50, year: 2024 },
    { label: "Jul", data: 20, year: 2024 },
    { label: "Aug", data: 200, year: 2024 },
   
  ]
  
   
  return (
    <PriceProvider> 
      <div className='flex h-screen w-full '>
      <Example/>
      </div> 
    </PriceProvider>
  );
}
  
