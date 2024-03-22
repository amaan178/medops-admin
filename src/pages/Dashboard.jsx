import React from 'react';
import { IoDocumentText } from "react-icons/io5";
import { HiMiniUsers } from "react-icons/hi2";
import { GiMedicines } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { Chart } from "../components";
import { useStateContext } from '../contexts/ContextProvider';

const Dashboard = () => {
    const { currentColor } = useStateContext();
  return (
    <div className='dashboard pr-10 pl-10'>
        <p className='text-xl font-semibold'>Dashboard</p>
        <div className='flex flex-row gap-6 mt-6'>
            <div className='basis-1/2 bg-white pt-6 pr-10 pl-10 rounded-xl shadow-md'>
                <p className='text-lg font-medium'> Activity Overview </p>
                <div className='flex flex-row gap-3 text-gray-700'>
                    <div className='mt-5 grid justify-items-center w-1/2 bg-blue-100 gap-1 p-6 rounded-xl'>
                        <IoDocumentText size={30}/>
                        <p className='text-lg font-semibold'>100</p>
                        <p className='text-sm font-medium'>Appoinments</p>
                    </div>
                    <div className='mt-5 grid justify-items-center w-1/2 bg-green-100 gap-1 p-6 rounded-xl'>
                        <HiMiniUsers  size={30}/>
                        <p className='text-lg font-semibold'>50</p>
                        <p className='text-sm font-medium'>New Patients</p>
                    </div>
                </div>
                <div className='flex flex-row gap-3 text-gray-700'>
                    <div className='mt-5 grid justify-items-center w-1/2 bg-yellow-100 gap-1 p-6 rounded-xl'>
                        <GiMedicines size={30}/>
                        <p className='text-lg font-semibold'>500</p>
                        <p className='text-sm font-medium'>Medicines Sold</p>
                    </div>
                    <div className='mt-5 grid justify-items-center w-1/2 bg-purple-100 gap-1 p-6 rounded-xl'>
                        <TbReportSearch size={30}/>
                        <p className='text-lg font-semibold'>100</p>
                        <p className='text-sm font-medium'>Lab Tests</p>
                    </div>
                </div>
            </div>
            <div className='basis-3/4 bg-white pt-6 pb-6 pr-10 pl-10 rounded-xl shadow-md'>
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden md:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead class="bg-white">
                                    <tr>
                                        <th scope="col" class="px-4 py-3.5 text-xs font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Date
                                        </th>

                                        <th scope="col" class="px-4 py-3.5 text-xs font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Status
                                        </th>

                                        <th scope="col" class="px-4 py-3.5 text-xs font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Patient Name
                                        </th>

                                        <th scope="col" class="px-4 py-3.5 text-xs font-medium text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Doctor
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    <tr>
                                        <td class="px-4 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 6, 2022</td>
                                        <td class="px-4 py-4 text-xs font-medium text-gray-700 whitespace-nowrap">
                                            <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <h2 class="text-xs font-normal">Paid</h2>
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                                <div>
                                                    <h2 class="text-xs font-medium text-gray-800 dark:text-white ">Arthur Melo</h2>
                                                    <p class="text-xs font-normal text-gray-600 dark:text-gray-400">authurmelo@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">Dr. John Doe</td> 
                                    </tr>

                                    <tr>
                                        <td class="px-4 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 5, 2022</td>
                                        <td class="px-4 py-4 text-xs font-medium text-gray-700 whitespace-nowrap">
                                            <div class="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <h2 class="text-xs font-normal">Cancelled</h2>
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>
                                                <div>
                                                    <h2 class="text-xs font-medium text-gray-800 dark:text-white ">Andi Lane</h2>
                                                    <p class="text-xs font-normal text-gray-600 dark:text-gray-400">andi@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">Dr. John Doe</td>
                                        
                                    </tr>

                                    <tr>
                                        <td class="px-4 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 5, 2022</td>
                                        <td class="px-4 py-4 text-xs font-medium text-gray-700 whitespace-nowrap">
                                            <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <h2 class="text-xs font-normal">Paid</h2>
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt="" />
                                                <div>
                                                    <h2 class="text-xs font-medium text-gray-800 dark:text-white ">Kate Morrison</h2>
                                                    <p class="text-xs font-normal text-gray-600 dark:text-gray-400">kate@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">Dr. John Doe</td>
                                        
                                    </tr>

                                    <tr>
                                        <td class="px-4 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 4, 2022</td>
                                        <td class="px-4 py-4 text-xs font-medium text-gray-700 whitespace-nowrap">
                                            <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <h2 class="text-xs font-normal">Paid</h2>
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80" alt=""/>
                                                <div>
                                                    <h2 class="text-xs font-medium text-gray-800 dark:text-white ">Candice Wu</h2>
                                                    <p class="text-xs font-normal text-gray-600 dark:text-gray-400">candice@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">Dr. John Doe</td>  
                                    </tr>

                                    <tr>
                                        <td class="px-4 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 4, 2022</td>
                                        <td class="px-4 py-4 text-xs font-medium text-gray-700 whitespace-nowrap">
                                            <div class="inline-flex items-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-gray-100/60 dark:bg-gray-800">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <h2 class="text-xs font-normal">Refunded</h2>
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                            <div class="flex items-center gap-x-2">
                                                <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80" alt="" />
                                                <div>
                                                    <h2 class="text-xs font-medium text-gray-800 dark:text-white ">Orlando Diggs</h2>
                                                    <p class="text-xs font-normal text-gray-600 dark:text-gray-400">orlando@example.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-4 py-4 text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">Dr. John Doe</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-row mt-5 mb-5 gap-6'>
            <div className='basis-1/4 shadow-md'>                
                <div class="relative w-full p-6 overflow-hidden bg-white shadow-lg rounded-xl md:w-80 dark:bg-gray-800">
                    <div class="flex items-center justify-between w-full mb-8">
                        <p class="text-xl font-normal text-gray-800 dark:text-white">
                            Activity
                        </p>
                        <a href="#" class="flex items-center text-sm text-gray-300 border-0 hover:text-gray-600 dark:text-gray-50 dark:hover:text-white focus:outline-none">
                            View all
                        </a>
                    </div>
                    <div class="flex items-start justify-between mb-6 rounded">
                        <span class="p-2 text-white bg-yellow-300 rounded-full dark:text-gray-800">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-128-448v320h-1024v-192l192-192 128 128 384-384zm-832-192q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z">
                                </path>
                            </svg>
                        </span>
                        <div class="flex items-center justify-between w-full">
                            <div class="flex flex-col items-start justify-between w-full ml-2 text-xs">
                                <p class="text-gray-700 dark:text-white">
                                    <span class="mr-1 font-bold">
                                        Andrea
                                    </span>
                                    uploaded 3 documents on concept deisgn home page
                                </p>
                                <p class="text-gray-300">
                                    Aug 10
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-start justify-between mb-6 rounded">
                        <span class="p-2 text-white bg-green-400 rounded-full dark:text-gray-800">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z">
                                </path>
                            </svg>
                        </span>
                        <div class="flex items-center justify-between w-full">
                            <div class="flex flex-col items-start justify-between w-full ml-2 text-xs">
                                <p class="text-gray-700 dark:text-white">
                                    <span class="mr-1 font-bold">
                                        Karen
                                    </span>
                                    leave some comments on concept deisgn support page
                                </p>
                                <p class="text-gray-300">
                                    Aug 10
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-start justify-between mb-6 rounded">
                        <span class="p-2 text-white bg-indigo-400 rounded-full dark:text-gray-800">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z">
                                </path>
                            </svg>
                        </span>
                        <div class="flex items-center justify-between w-full">
                            <div class="flex flex-col items-start justify-between w-full ml-2 text-xs">
                                <p class="text-gray-700 dark:text-white">
                                    <span class="mr-1 font-bold">
                                        Karen
                                    </span>
                                    change project description to &quot;SubMarine protection project&quot;
                                </p>
                                <p class="text-gray-300">
                                    Aug 09
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='basis-1/3 shadow-md bg-white rounded-xl'>
                <div className='flex bg-bubbles md:p-6'>
                    <Chart
                        data={[
                            {
                                name: 'Paracetamol',
                                value: 10,
                                color: 'var(--color-green-200)',
                            },
                            {
                                name: 'Vitamin Tablets',
                                value: 80,
                                color: 'var(--color-yellow-200)',
                            },
                            {
                                name: 'Antacid Tablets',
                                value: 290,
                                color: 'var(--color-blue-200)',
                            },
                            {
                                name: 'Others',
                                value: 50,
                                color: 'var(--color-purple-200)',
                            },
                        ].sort((a, b) => a.value - b.value)}
                    />
                </div>
            </div>
            <div className='basis-1/3 shadow-md bg-white rounded-xl p-4'>                
                <div class="container flex flex-col items-center justify-center w-full mx-auto bg-white  dark:bg-gray-800">
                    <div class="w-full px-4 py-5 border-b sm:px-6">
                        <h3 class="text-lg font-normal leading-6 text-gray-700 dark:text-white">
                            Patient Fees
                        </h3>
                    </div>
                    <ul class="flex flex-col divide-y divide">
                        <li class="flex flex-row">
                            <div class="flex items-center flex-1 p-4 cursor-pointer select-none">
                                <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                    <a href="#" class="relative block">
                                        <img alt="profil" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                    </a>
                                </div>
                                <div class="flex-1 pl-1 mr-8">
                                    <div class="font-normal dark:text-white">
                                        Jean Marc
                                    </div>
                                    <div class="text-xs text-red-600 dark:text-gray-200">
                                        Doctor fee pending
                                    </div>
                                </div>
                                <button class="flex justify-end text-sm p-3 rounded-lg text-white" style={{backgroundColor: currentColor}}>
                                    Request Fees
                                </button>
                            </div>
                        </li>
                        <li class="flex flex-row">
                            <div class="flex items-center flex-1 p-4 cursor-pointer select-none">
                                <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                    <a href="#" class="relative block">
                                        <img alt="profil" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                    </a>
                                </div>
                                <div class="flex-1 pl-1 mr-8">
                                    <div class="font-normal dark:text-white">
                                        Jean Marc
                                    </div>
                                    <div class="text-xs text-red-600 dark:text-gray-200">
                                        Doctor fee pending
                                    </div>
                                </div>
                                <button class="flex justify-end text-sm p-3 rounded-lg text-white" style={{backgroundColor: currentColor}}>
                                    Request Fees
                                </button>
                            </div>
                        </li>
                        <li class="flex flex-row">
                            <div class="flex items-center flex-1 p-4 cursor-pointer select-none">
                                <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                    <a href="#" class="relative block">
                                        <img alt="profil" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                    </a>
                                </div>
                                <div class="flex-1 pl-1 mr-8">
                                    <div class="font-normal dark:text-white">
                                        Jean Marc
                                    </div>
                                    <div class="text-xs text-red-600 dark:text-gray-200">
                                        Doctor fee pending
                                    </div>
                                </div>
                                <button class="flex justify-end text-sm p-3 rounded-lg text-white" style={{backgroundColor: currentColor}}>
                                    Request Fees
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>

            </div> 
        </div>
    </div>
  );
};

export default Dashboard;
