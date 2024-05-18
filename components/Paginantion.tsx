import { useEffect, useRef, useState } from 'react';

interface PanginationProps {
  data?: any[];
  onChangePage: (value: any[]) => void;
  children?: React.ReactNode;
  itemsPerPage: number;
}

function Pangination(props: PanginationProps) {
  const { data, itemsPerPage, onChangePage, ...restProps } = props;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState<any[]>();

  useEffect(() => {
    if (data) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, data.length);
      const finalData: any[] = data.slice(startIndex, endIndex);
      setCurrentPageData(finalData);

      setTotalPages(Math.ceil(data.length / itemsPerPage));
      onChangePage(finalData);
    }
  }, [currentPage, itemsPerPage]);

  function onNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function onPrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className="bg-white rounded-lg flex flex-col w-full shodow-md h-fit p-3">
      <div {...restProps} />
      <div className="flex flex-row gap-3 items-center text-sm w-full justify-end">
        <button
          type="button"
          onClick={() => onPrevPage()}
          className=" flex items-center hover:bg-[#f4f4f4] justify-center  rounded-full w-[40px] h-[40px]"
        >
          {'<'}
        </button>
        <p className=" flex items-center bg-orange-500 justify-center p-2  text-white font-bold rounded-full min-w-[40px] h-[40px]">
          {currentPage}
        </p>
        Of
        <p className="flex items-center justify-center rounded-full w-[40px] h-[40px]">
          {totalPages}
        </p>
        <button
          onClick={() => {
            onNextPage();
          }}
          className=" flex items-center hover:bg-[#f4f4f4] justify-center  rounded-full w-[40px] h-[40px]"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}
