interface BageProps {
  status: 'Error' | 'Success' | 'Warning';
}
export default function Bage(props: BageProps) {
  const { status } = props;
  return (
    <>
      {status == 'Error' && (
        <div className="bg-[#FF0000] rounded-full w-fit  px-3 text-[13px] text-white font-bold">
          Error
        </div>
      )}
      {status == 'Success' && (
        <div className="bg-green-600 rounded-full w-fit px-3 text-[13px] text-white font-bold">
          Success
        </div>
      )}

      {status == 'Warning' && (
        <div className="bg-orange-600 rounded-full w-fit px-3 text-[13px] text-white font-bold">
          Warning
        </div>
      )}
    </>
  );
}
