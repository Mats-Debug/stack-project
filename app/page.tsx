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
import { CalendarIcon, EllipsisVerticalIcon, InboxIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Calender from '@/components/Calender';
import DatePicker from '@/components/DatePicker';
import Button from '@/components/Button';
import Link from 'next/link';

import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { ArrowLongLeftIcon, Bars3Icon, CheckIcon, ChevronDownIcon, ChevronUpDownIcon, LockClosedIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MDialog, Mbutton } from '@/components/Dialog';
import { Dialog, DialogPanel, TabGroup, TabList, TabPanel, TabPanels, Transition, TransitionChild } from '@headlessui/react';
import SearchBar from '@/components/SearchBar';
import { PriceProvider, PriceDisplay } from '@/components/Price';
import Combobox from '@/components/ComboBox';

import RangeSlider from '@/components/RangeSlider';
import ChevronUpIcon from '@heroicons/react/24/outline/esm/ChevronUpIcon';
///skelton/product card/ charts

export default function Home() {

  const dropdownItems = ['Item 1', 'Item 2', 'Items 3',];

  var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return (
    <PriceProvider>
      <div className='justify-end w-full flex'>
      <LineChart lables={month} chartDataList={dropdownItems}  comboBoxDataTypeOnChange={()=>{}}/>
      </div>
    </PriceProvider>

  );

}








import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, ArcElement,

} from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(ArcElement);

import { Bar, Line } from "react-chartjs-2"
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { Menu, Tab } from '@headlessui/react'



interface ILineChart {
  comboBoxDataTypeOnChange: (value: any) => void;
  chartDataList: any;
  lables:any[];
}

export function LineChart(props: ILineChart) {
  const { comboBoxDataTypeOnChange, chartDataList,lables } = props;

  type ChartDataType = {
    labels: string[];
    datasets: [{ label: string; data: any[]; backgroundColor: string; borderColor: string }];
  };
  const [chartData, setChartData] = useState<ChartDataType>({
    labels: [],
    datasets: [{ label: '', data: [], backgroundColor: '', borderColor: 'rgb(255, 99, 132)' }]
  });


  const options: {} = {
    plugins: {
      legend: { position: 'top', display: false }
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          display: false,
        }
      },
      y: {
        border: {
          display: false,

        },

      }
    }
  };
  const [chartOptions, setChartOptions] = useState<{}>(options);
  
  const [onChangeLabels, setOnChangeLables] = useState(lables)

  useEffect(() => {
 

    setChartData({
      labels: onChangeLabels,
      datasets: [
        {
          label: "" + " / " + "",
          data: chartDataList,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)'
        }
      ],

    });


  }, [, chartDataList]);




  return (
    <div className="flex  w-full h-full bg-white rounded-lg shadow-md p-2 flex-col relative bg-red-200">
      <div className='h-[20%] w-full flex justify-between'>
        {/* <ComboBox data={DataType}
          selected={(value: any, e: any): any => { comboBoxDataTypeOnChange(value); setLabel(value) }}
        />
        <ComboBox data={Period}
          selected={(value: any, e: any): any => { onChangePeriod(value) }} /> */}
      </div>
      <span className=" flex w-full h-[70%]">
        <Line data={chartData} options={options} />
      </span>
    </div>)
}
