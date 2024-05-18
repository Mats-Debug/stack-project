
import { Dialog, Transition, DialogPanel, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid';
import React, { Fragment } from 'react';
import Button from '@/components/Button';
interface DialogProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLButtonElement> {
  children: React.ReactNode;
  isShow?: false | true;
  title?: string;
  icon?: React.ReactNode;
  buttonTitle?: string;
}

export default function MDialog(props: DialogProps) {
  const { title, isShow, icon, buttonTitle, ...restProps } = props;

  let [isOpen, setIsOpen] = React.useState(isShow);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} type='IconText' intent='secondary' title={buttonTitle} icon={icon} />
      <Transition appear show={isOpen} as={Fragment}>

        <Dialog className="fixed top-0 left-0 md:p-10 z-50 w-full h-screen flex justify-center items-center backdrop-blur-sm bg-gray-800/40"
          open={isOpen} onClose={() => { setIsOpen(false) }} >
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
              <div className='w-full h-fit items-center flex justify-between border-b-2 border-gray-200'>
                <p className='font-bold text-lg'>{title}</p>
                <Button onClick={() => setIsOpen(false)} type={'Icon'} intent='primary' icon={<XMarkIcon className="w-5 h-5" />} />
              </div>
              <div className="w-full h-full overflow-y-auto text-sm" {...restProps} >
              </div>
            </DialogPanel >
          </TransitionChild>
        </Dialog>

      </Transition>
    </>
  )
}