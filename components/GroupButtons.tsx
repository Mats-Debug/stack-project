import { useState } from "react";

interface GroupButtons {
  onSelect: (value: string) => void;
}

function GroupButtons(props: GroupButtons) {
  const { onSelect } = props;

  const [selectedButton, setSelectedButton] = useState<string | null>('Daily');
  function onSelectButton(value: string) {
    setSelectedButton(value);
    onSelect(value);
  }
  return (
    <>
      <div className="flex rounded-full h-[40px] gap-1 bg-white w-fit ring-1 ring-orange-500 flex-row p-1 text-sm">
        <button
          type="button"
          className={`${
            selectedButton == 'Daily'
              ? 'bg-orange-500 text-white  h-full w-fit px-2 rounded-full'
              : 'bg-white text-black  h-full w-fit px-2 rounded-full'
          }`}
          onClick={() => {
            onSelectButton('Daily');
          }}
        >
          Daily
        </button>
        <button
          type="button"
          value=""
          name="default-radio"
          className={`${
            selectedButton == 'Weekly'
              ? 'bg-orange-500 text-white  h-full w-fit px-2 rounded-full'
              : 'bg-white text-black  h-full w-fit px-2 rounded-full'
          }`}
          onClick={() => {
            onSelectButton('Weekly');
          }}
        >
          Weekly
        </button>
        <button
          type="button"
          value=""
          name="default-radio"
          className={`${
            selectedButton == 'Monthly'
              ? 'bg-orange-500 text-white  h-full w-fit px-2 rounded-full'
              : 'bg-white text-black  h-full w-fit px-2 rounded-full'
          }`}
          onClick={() => {
            onSelectButton('Monthly');
          }}
        >
          Monthly
        </button>
        <button
          id="default-radio-1"
          type="button"
          value=""
          name="default-radio"
          className={`${
            selectedButton == 'Yearly'
              ? 'bg-orange-500 text-white  h-full w-fit px-2 rounded-full'
              : 'bg-white text-black  h-full w-fit px-2 rounded-full'
          }`}
          onClick={() => {
            onSelectButton('Yearly');
          }}
        >
          Yearly
        </button>
      </div>
    </>
  );
}

