import React from 'react';
import { IoDocumentText } from "react-icons/io5";
import { HiMiniUsers } from "react-icons/hi2";
import { GiMedicines } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";

const Dashboard = () => {
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
    </div>
  );
};

export default Dashboard;
