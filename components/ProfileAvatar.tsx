
import Image from 'next/image';
import { createContext, useState, useRef, useEffect, useContext } from "react";


interface IProfileAvatarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  image: any;
  children: React.ReactNode;
}


const ProfileAvatarContext = createContext({ hiddeDialog: () => { } });

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

  const hiddeDialog = () => {
    setIsOpen(false);
  };

  return (
    <span className="relative">
      <button onClick={() => onOpen()}>
        {image != "" && <Image src={image} alt="" className="rounded-full w-full h-full flex" width={100} height={100} />}
        {image == "" && <p className="font-bold text-[20px] items-center flex justify-center bg-[#f4f4f4] rounded-full h-[45px] w-[45px] ring-3 ring-white">{getInitials(title)}</p>}
      </button>
      <ProfileAvatarContext.Provider value={{ hiddeDialog }}>
        {isOpen && (
          <div
            ref={dropdownRef}
            className="origin-top-right absolute p-2 min-w-[200px] right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            {...restProps}
          >
          </div>
        )}
      </ProfileAvatarContext.Provider>

    </span>

  )
}


export const useDialogOptions = () => {
  const context = useContext(ProfileAvatarContext);
  if (!context) {
    throw new Error('useDialogOptions must be used within a Dialog');
  }
  return context;
};

interface AvatarButtonProps {
  onClick: () => void;
  title: string;
  icon: React.ReactNode;
}

function AvatarButton(props: AvatarButtonProps) {
  const { onClick, icon, title } = props;
  const { hiddeDialog } = useContext(ProfileAvatarContext)
  return (<button onClick={() => { onClick(); hiddeDialog() }} className='flex w-full h-[40px] hover:bg-[#f4f4f4] gap-3 rounded-full items-center px-3'>
    {icon}
    {title}
  </button>)
}


///Example

{/* <ProfileAvatar title='Admin Jnn' image="" >
        <AvatarButton title='button' onClick={()=>{}} icon={<InboxIcon className='w-5 h-5'/>}/>
        </ProfileAvatar> */}