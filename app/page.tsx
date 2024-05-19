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
import { Bars3Icon, LockClosedIcon } from '@heroicons/react/24/outline';
import { MDialog, Mbutton } from '@/components/Dialog';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';

////side menu/search/drawer/loaders/skelton/slider/tabs/avatr/check box/actions /dropdowns/alert dialog/swtich

export default function Home() {
  const [value, setValue] = useState([]);
  const [isShow, setiShow] = useState(false);



  const dropdownItems = ['Item 1', 'Item 2', 'Items 3'];

  return (
    <section className="flex w-full">
      <SideMenu title='SidMenu' position="Right" isShow={false} onOpen={() => { }}>
        dd</SideMenu>

    </section>
  );
}


interface SideMenuProps {
  onClose?: () => void;
  onOpen: () => void;
  isShow?: any;
  position?:"Left"| "Right";
  children: React.ReactNode;
  title?: string;
}
function SideMenu(props: SideMenuProps) {
  let { onClose, isShow, onOpen,position, title,...restProps } = props;
  let [isOpen, setIsOpen] = React.useState(isShow);
  return (
    <>


      <Button onClick={() => setIsOpen(true)} type='Icon' intent='primary' icon={<Bars3Icon className=" w-[20px] h-[20px]" />} />
      <Transition appear show={isOpen} as={Fragment}>
      { position =="Left"&& <Dialog onClose={()=>{}} onClick={()=>{alert("done")}}  className=" fixed top-0 left-0  z-50 w-full h-screen  backdrop-blur-sm bg-gray-800/40">
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            {/*content*/}
            <DialogPanel className="bg-white rounded-r-lg h-full w-full md:h-fit md:w-fit max-h-screen relative p-3 ">
                <div className='w-full h-fit items-center flex justify-between border-b-2 border-gray-200'>
                  <p className='font-bold text-lg'>{title}</p>
                  <Button onClick={() => setIsOpen(false)} type={'Icon'} intent='primary' icon={<XMarkIcon className="w-5 h-5" />} />
                </div>
                <div className="w-full h-full overflow-y-auto text-sm" {...restProps} >
                </div>
              </DialogPanel >
          </TransitionChild>

        </Dialog>}


        { position =="Right"&& <Dialog  onClose={() => { }} className=" fixed top-0 right-0  z-50 w-full h-screen flex justify-end  backdrop-blur-sm bg-gray-700/40">
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="-translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="-translate-x-0"
            leaveTo="translate-x-full"
          >
            {/*content*/}
            <DialogPanel className="bg-white flex flex-col rounded-lg h-screen w-full  relative p-3flex-col sm:h-screen sm:w-[250px] p-3 ">
                <div className='w-full h-fit items-center flex justify-between border-b-2 border-gray-200'>
                  <p className='font-bold text-lg'>{title}</p>
                  <Button onClick={() => setIsOpen(false)} type={'Icon'} intent='primary' icon={<XMarkIcon className="w-5 h-5" />} />
                </div>
                <div className="w-full h-full overflow-y-auto text-sm" {...restProps} >
                </div>
              </DialogPanel >
          </TransitionChild>

        </Dialog>}


      </Transition>
    </>
  )
}













