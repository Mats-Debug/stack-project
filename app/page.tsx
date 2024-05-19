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

///search/drawer/loaders/skelton/slider/tabs/avatr/check box /dropdowns/alert dialog/swtich

export default function Home() {
  const [value, setValue] = useState([]);
  const [isShow, setiShow] = useState(false);
  let [isOpen, setIsOpen] = React.useState(true);



  const dropdownItems = ['Item 1', 'Item 2', 'Items 3'];

  return (
    <section className="flex w-full">
      <Transition appear show={isOpen} as={Fragment}>

        <Dialog className="fixed top-0 left-0 md:p-10 z-50 w-full h-screen flex justify-center items-center backdrop-blur-sm bg-gray-800/40"
          onClose={() => { setIsOpen(false) }} >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {/*content*/}
            <DialogPanel className="bg-white rounded-lg h-full w-full md:h-fit md:w-fit max-h-screen relative p-3 ">
              <div className='w-full h-fit items-center flex justify-between border-b border-gray-200'>
              <Button onClick={() => setIsOpen(false)} type={'Icon'} intent='primary' icon={<ArrowLongLeftIcon className="w-5 h-5" />} />
                <input className='h-[40px] bg-[#f4f4f4] rounded-full'/>
                
              </div>
              <div className="w-full h-full overflow-y-auto text-sm"  >
              </div>
            </DialogPanel >
          </TransitionChild>
        </Dialog>

      </Transition>
    </section>
  );
}



