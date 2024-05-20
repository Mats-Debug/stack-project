import { Transition, Dialog, TransitionChild, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { Fragment } from "react";
import Button from "./Button";


interface AlertDialogProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLButtonElement> {
  children: React.ReactNode;
  isShow?: false | true;
  icon?: React.ReactNode;
  buttonTitle?: string;
  onContinue:()=>void;
}

export default function AlertDialog(props: AlertDialogProps) {
  const { title, isShow, icon, buttonTitle, onContinue,...restProps } = props;

  let [isOpen, setIsOpen] = React.useState(isShow);
function onClick(){
  onContinue();
  setIsOpen(false);
}

  return (
    <>
      <Button onClick={() => setIsOpen(true)} type='IconText' intent='secondary' title={buttonTitle} icon={icon} />

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
            <DialogPanel className="flex bg-white flex-col rounded-lg gap-5 h-fit w-full md:w-fit  relative p-3 mx-3 ">
              <div className='w-fit h-fit items-center flex justify-end absolute top-0 right-0 '>
                <Button onClick={() => setIsOpen(false)} type={'Icon'} intent='primary' icon={<XMarkIcon className="w-5 h-5" />} />
              </div>
              <div className="w-full h-full overflow-y-auto text-sm" {...restProps} >
                
              </div>
              <div className='flex w-full  justify-end gap-3 flex-row'>
              <button className='h-[40px] w-fit bg-[#f4f4f4] rounded-full px-5 ' onClick={()=>{setIsOpen(false)}}>Cancel</button>
              <button className='h-[40px] w-fit bg-orange-500 rounded-full px-5 text-white' onClick={()=>{onClick()}}>Continue</button>
              </div>
            
            </DialogPanel >
          </TransitionChild>
        </Dialog>

      </Transition>

    </>
  )
}
