import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

interface ButtonOrLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
}

const ButtonOrLink: React.FC<ButtonOrLinkProps> = (props) => {
  const { href, ...restProps } = props;
  return (
    <>
      {href == null ? (
        <button type="button" {...restProps} />
      ) : (
        <Link href={href} {...restProps} />
      )}
    </>
  );
};

const buttonStyles = cva(
  'flex items-center h-[40px] rounded-full  outline-orange-500 text-sm',
  {
    variants: {
      intent: {
        primary: 'text-gray-700 hover:bg-orange-500 hover:text-white ',
        secondary:
          'bg-orange-500 text-white hover:bg-transparent hover:ring-2 hover:ring-orange-500 hover:text-orange-500',
        danger:
          'bg-[#FF0000] text-white hover:bg-transparent hover:text-[#FF0000] hover:ring-2 hover:ring-[#FF0000]',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  intent?: 'primary' | 'secondary' | 'danger';
  type?: 'Icon' | 'Text' | 'IconText' | 'TextIcon'|'MenuButton';
  title?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

  const Button: React.FC<ButtonProps> = (props) => {
  const { type, title, icon, intent } = props;

  return (
    <ButtonOrLink className={buttonStyles({ intent })} {...props}>
      {type === 'IconText' && (
        <div className="flex px-5 h-[40px] gap-1   items-center w-full ">
          {icon}
          <p className="whitespace-nowrap">{title}</p>
        </div>
      )}
      
      {type === 'Icon' && (
        <div className="flex w-[40px] h-[40px]  items-center justify-center">
          {icon}
        </div>
      )}

      {type === 'TextIcon' && (
        <div className="flex px-5 h-[40px] gap-1 justify-center items-center w-full ">
          <p className="whitespace-nowrap">{title}</p>
          {icon}
        </div>
      )}



      {type === 'Text' && (
        <p className="flex whitespace-nowrap w-full items-center justify-center h-[40px] px-3">
          {title}
        </p>
      )}
    </ButtonOrLink>
  );
};
export default Button;