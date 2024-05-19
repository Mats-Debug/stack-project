import { Transition, Dialog, TransitionChild, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { Fragment, createContext, useContext } from "react";
import Button from "./Button";

const defaultDrawerContext = {
    hiddeDrawer:() => {}
  };
  
  
  const DrawerContext = createContext(defaultDrawerContext);
  

interface DraweProps {
    isShow?: any;
    position?:"Left"| "Right";
    children: React.ReactNode;
    title?: string;
  }
  export default function Drawer(props: DraweProps) {
    let { isShow,position, title,...restProps } = props;
    let [isOpen, setIsOpen] = React.useState(isShow);

    const hiddeDrawer = ()=>{
        setIsOpen(false);
      };
    return (
      <>
  
  
        <Button onClick={() => setIsOpen(true)} type='Icon' intent='primary' icon={<Bars3Icon className=" w-[20px] h-[20px]" />} />
        <DrawerContext.Provider value={{hiddeDrawer}}>
        <Transition appear show={isOpen} as={Fragment}>
        { position =="Left"&& <Dialog onClose={()=>{ setIsOpen(false)}}  className=" fixed top-0 left-0  z-50 w-full h-screen  backdrop-blur-sm bg-gray-800/40">
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
              <DialogPanel className="bg-white rounded-r-lg h-full w-full sm:h-screen sm:w-[250px] max-h-screen relative p-3 ">
                  <div className='w-full h-fit items-center flex justify-between border-b-2 border-gray-200'>
                    <p className='font-bold text-lg'>{title}</p>
                    <Button onClick={() => setIsOpen(false)} type={'Icon'} intent='primary' icon={<XMarkIcon className="w-5 h-5" />} />
                  </div>
                  <div className="w-full h-full overflow-y-auto text-sm" {...restProps} >
                  </div>
                </DialogPanel >
            </TransitionChild>
  
          </Dialog>}
  
  
          { position =="Right"&& <Dialog  onClose={() => {  setIsOpen(false)}} className=" fixed top-0 right-0  z-50 w-full h-screen flex justify-end  backdrop-blur-sm bg-gray-700/40">
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
              <DialogPanel className="bg-white flex flex-col rounded-l-lg h-screen w-full  relative p-3flex-col sm:h-screen sm:w-[250px] p-3 ">
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
        </DrawerContext.Provider>
      </>
    )
  }
  
  

  export const useDrawerOptions = () => {
    const context = useContext(DrawerContext);
    if (!context) {
      throw new Error('useDialogOptions must be used within a Dialog');
    }
    return context;
  };

