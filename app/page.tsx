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
/// create database 
/// admin /shop - pages

export default function Home() {

  const dropdownItems = ['Item 1', 'Item 2', 'Items 3'];

  var data = [
    { label: "Jan", data: 20, year: 2024 },
    { label: "Feb", data: 20, year: 2024 },
    { label: "Mar", data: 0, year: 2024 },
    { label: "Apr", data: 200, year: 2024 },
    { label: "May", data: 0, year: 2024 },
    { label: "Jun", data: 50, year: 2024 },
    { label: "Jul", data: 20, year: 2024 },
    { label: "Aug", data: 200, year: 2024 },
   
  ]
  

  return (
    <PriceProvider> 
      <div className='justify-end w-full flex'>
      <OverViewChart data={data}/>
      </div>
    </PriceProvider>
  );
}
 

interface  OverViewChartProps{
data:any[];
}
function OverViewChart(props:OverViewChartProps){
  const{data}=props;
  const [Last12Items, setLast12Items] = useState<{}[]>([]);
  const [filterLables, setFilterLables] = useState<{}[]>([])
  

  const months= [
    { label: "Jan" },
    { label: "Feb" },
    { label: "Mar" }, 
    { label: "Apr" },
    { label: "May" },
    { label: "Jun" },
    { label: "Jul" },
    { label: "Aug" },
    { label: "Sep" },
    { label: "Oct" },
    { label: "Nov" },
    { label: "Dec" },
  ]

  useEffect(() => {

    if (data.length >= 12) {
      setLast12Items(data.slice(-12).map((value) => value.data))
      setFilterLables( data.slice(-12).map((value) => value.label));
    } else {
      setLast12Items(data.map((value) => value.data));
      setFilterLables(months.map((value)=>value.label));
    }

  },[])
  return(
  <section className='w-full flex bg-white flex-col p-3 gap-3'>
    <div className='w-fill border-b '>
    <h1>OverView</h1>
    
    </div>
    <div>
    
    </div>
   
  <LineChart lables={filterLables} chartDataList={Last12Items} />
  </section>)
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


interface ILineChart {
  chartDataList: any;
  lables: any[];
}

export function LineChart(props: ILineChart) {
  const { chartDataList, lables } = props;

  type ChartDataType = {
    labels: string[];
    datasets: [{ label: string; data: any[]; backgroundColor: string; borderColor: string; tension: number }];
  };
  const [chartData, setChartData] = useState<ChartDataType>({
    labels: [],
    datasets: [{ label: '', data: [], backgroundColor: '', borderColor: 'rgb(255, 99, 132)', tension: 0 }]
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

  useEffect(() => {

    setChartData({
      labels: lables,
      datasets: [
        {
          label: "dd" + " / " + "",
          data: chartDataList,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          tension: 0.3,

        }
      ],

    });

  }, [lables,chartDataList]);


  return (
    <div className="flex  w-full min-h-[200px]   flex-col relative ">
      <span className=" flex w-full h-full">
        <Line data={chartData} options={options} />
      </span>
    </div>)
}
