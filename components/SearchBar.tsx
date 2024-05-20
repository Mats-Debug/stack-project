
import Button from '@/components/Button';
import { Transition, Dialog, TransitionChild, DialogPanel } from '@headlessui/react';
import MagnifyingGlassIcon from '@heroicons/react/24/outline/esm/MagnifyingGlassIcon';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import React from 'react';
import {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext,
    useCallback,
    Fragment,
  } from 'react';
import { PriceDisplay } from './Price';

export default function SearchBar(){
    let [isOpen, setIsOpen] = React.useState(false);

    return(<>
      <Button onClick={() => setIsOpen(true)} type='Icon' intent='primary'  icon={<MagnifyingGlassIcon className="w-5 h-5"/>} />
     <Transition appear show={isOpen} as={Fragment}>
          <Dialog className="fixed top-0 left-0 md:p-10 z-50 w-full h-screen flex justify-center  backdrop-blur-sm bg-gray-800/40"
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
              <DialogPanel className="bg-white flex flex-col gap-3 rounded-lg h-full w-full md:h-fit md:w-[600px]  md:max-h-[400px] max-h-screen relative p-3 ">
                <div className='w-full h-fit items-center flex justify-between border-gray-200 gap-2'>
                  <Button onClick={() => setIsOpen(false)} type={'Icon'} intent='primary' icon={<ArrowLongLeftIcon className="w-5 h-5" />} />
                  <input className='h-[40px] bg-[#f4f4f4] rounded-full w-full' />
  
                </div>
                <section className='flex flex-col w-full overflow-auto'>
                <SearchCard price={200} title="Product" description='New Product' type='Pen' category='dd'/>
                </section>
  
              </DialogPanel >
            </TransitionChild>
          </Dialog>
        </Transition>
    </>)
  }
  interface SearchCardProps{
    title:string;
    description:string;
    type:string;
    price:number;
    category:string;
  }
  function SearchCard(props:SearchCardProps) {
    const{title,description,type, price,category}=props;
    return (
      <button className="relative flex flex-row gap-3 w-full h-fit  text-sm hover:bg-[#f4f4f4] flex rounded-lg p-3 ">
        <div className='flex h-[70px] w-[70px] rounded-lg bg-gray-200'></div>
  
        <div className=' flex flex-col text-left'>
          <p className='font-bold'>{title}</p>
          <p>{description}</p>
          <div className='flex w-full flex-row gap-3 '>
          <p>{category}</p>
          <p>{type}</p>
          </div>
  
          <div className='flex flex-row font-bold text-md absolute bottom-3 right-3'>
         <PriceDisplay priceType='UGX' priceValue={price}/>
          </div>
        </div>
      </button>
    )
  }
  