import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { BsInfo } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { useStateContext } from '../contexts/ContextProvider';

const Appointments = () => {
    const { currentColor } = useStateContext();
  return (
    <section className="py-5">
        <div className="container px-8 mx-auto">
          <div className="pt-6 bg-white shadow rounded-xl">
            <div className="px-6 border-b">
              <div className="flex flex-wrap items-center">
                <div>
                  <a className="block pr-8 pb-2 text-lg font-medium border-b-2 border-teal-500" href="#">New Appointment</a>
                </div>
                <a className="ml-auto flex items-center py-2 px-4 text-sm text-white hover:bg-teal-600 rounded-lg -mt-6" style={{backgroundColor: currentColor}} href="#">
                  <span className="mr-1">
                    <FaPlus />
                  </span>
                  <span>New Appointment</span>
                </a>
              </div>
            </div>  
            <div className="inline-block min-w-full overflow-hidden">
            <div class="w-3/4 md:w-1/2 mx-6 mt-4">
                    <form class="flex items-center">
                        <div class="relative w-3/4">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-600">
                                <IoSearch />
                            </div>
                            <input type="text" id="simple-search" class=" text-sm block w-full pl-10 p-2 rounded-2xl placeholder-gray-400" style={{backgroundColor: '#E6F5F5'}} placeholder="Search" required=""/>
                        </div>
                    </form>
                </div>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <td className="relative p-0">
                            <div className="flex items-center justify-center pl-6 h-13 min-w-max border-b border-gray-100">
                                <span className="text-sm font-heading font-semibold">Time</span>
                            </div>
                            </td>
                            <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                <span className="text-sm font-heading font-semibold">Date</span>
                            </div>
                            </td>
                            <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                <span className="text-sm font-heading font-semibold">Patient Name</span>
                            </div>
                            </td>
                            <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                <span className="text-sm font-heading font-semibold">Patient Age</span>
                            </div>
                            </td>
                            <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                <span className="text-sm font-heading font-semibold">Doctor</span>
                            </div>
                            </td>
                            <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                <span className="text-sm font-heading font-semibold">Action</span>
                            </div>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">9:30 AM</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">05/12/2023</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <img class="object-cover w-8 h-8 rounded-full mr-6" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                                    <div>
                                        <p className="text-sm text-gray-600">Reta Havertz</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">32</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">Dr. John</span>
                                </div>
                            </td>
                            <td className="p-0 text-xl">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <a className="inline-flex mr-6 items-center justify-center hover:text-teal-700 text-sm font-medium" style={{color: currentColor}} href="#">
                                        Reschedule
                                    </a>
                                    <a className="inline-flex w-7 h-7 mr-5 items-center justify-center bg-red-300 hover:bg-red-600 hover:text-white rounded-xl text-white font-medium" href="#">
                                        <RxCross2 className='stroke-20'/>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">9:30 AM</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">05/12/2023</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <img class="object-cover w-8 h-8 rounded-full mr-6" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                                    <div>
                                        <p className="text-sm text-gray-600">Reta Havertz</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">32</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">Dr. John</span>
                                </div>
                            </td>
                            <td className="p-0 text-xl">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <a className="inline-flex mr-6 items-center justify-center hover:text-teal-700 text-sm font-medium" style={{color: currentColor}} href="#">
                                        Reschedule
                                    </a>
                                    <a className="inline-flex w-7 h-7 mr-5 items-center justify-center bg-red-300 hover:bg-red-600 hover:text-white rounded-xl text-white font-medium" href="#">
                                        <RxCross2 className='stroke-20'/>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">9:30 AM</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">05/12/2023</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <img class="object-cover w-8 h-8 rounded-full mr-6" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                                    <div>
                                        <p className="text-sm text-gray-600">Reta Havertz</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">32</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">Dr. John</span>
                                </div>
                            </td>
                            <td className="p-0 text-xl">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <a className="inline-flex mr-6 items-center justify-center hover:text-teal-700 text-sm font-medium" style={{color: currentColor}} href="#">
                                        Reschedule
                                    </a>
                                    <a className="inline-flex w-7 h-7 mr-5 items-center justify-center bg-red-300 hover:bg-red-600 hover:text-white rounded-xl text-white font-medium" href="#">
                                        <RxCross2 className='stroke-20'/>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">9:30 AM</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">05/12/2023</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <img class="object-cover w-8 h-8 rounded-full mr-6" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                                    <div>
                                        <p className="text-sm text-gray-600">Reta Havertz</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">32</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">Dr. John</span>
                                </div>
                            </td>
                            <td className="p-0 text-xl">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <a className="inline-flex mr-6 items-center justify-center hover:text-teal-700 text-sm font-medium" style={{color: currentColor}} href="#">
                                        Reschedule
                                    </a>
                                    <a className="inline-flex w-7 h-7 mr-5 items-center justify-center bg-red-300 hover:bg-red-600 hover:text-white rounded-xl text-white font-medium" href="#">
                                        <RxCross2 className='stroke-20'/>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">9:30 AM</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">05/12/2023</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <img class="object-cover w-8 h-8 rounded-full mr-6" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                                    <div>
                                        <p className="text-sm text-gray-600">Reta Havertz</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">32</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">Dr. John</span>
                                </div>
                            </td>
                            <td className="p-0 text-xl">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <a className="inline-flex mr-6 items-center justify-center hover:text-teal-700 text-sm font-medium" style={{color: currentColor}} href="#">
                                        Reschedule
                                    </a>
                                    <a className="inline-flex w-7 h-7 mr-5 items-center justify-center bg-red-300 hover:bg-red-600 hover:text-white rounded-xl text-white font-medium" href="#">
                                        <RxCross2 className='stroke-20'/>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">9:30 AM</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">05/12/2023</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <img class="object-cover w-8 h-8 rounded-full mr-6" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                                    <div>
                                        <p className="text-sm text-gray-600">Reta Havertz</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">32</span>
                                </div>
                            </td>
                            <td className="p-0">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <span className="text-sm text-gray-600">Dr. John</span>
                                </div>
                            </td>
                            <td className="p-0 text-xl">
                                <div className="flex items-center justify-center p-5 h-13 min-w-max border-b border-gray-100">
                                    <a className="inline-flex mr-6 items-center justify-center hover:text-teal-700 text-sm font-medium" style={{color: currentColor}} href="#">
                                        Reschedule
                                    </a>
                                    <a className="inline-flex w-7 h-7 mr-5 items-center justify-center bg-red-300 hover:bg-red-600 hover:text-white rounded-xl text-white font-medium" href="#">
                                        <RxCross2 className='stroke-20'/>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Appointments