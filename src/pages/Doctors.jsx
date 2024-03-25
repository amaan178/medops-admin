import React from 'react';
import { FaUserDoctor } from "react-icons/fa6";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { BsInfo } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { useStateContext } from '../contexts/ContextProvider';

const Doctors = () => {
    const { currentColor } = useStateContext();
  return (
    <div>
      <section className="py-5">
        <div className="container px-8 mx-auto">
          <div className="pt-6 bg-white shadow rounded-xl">
            <div className="px-6 border-b">
              <div className="flex flex-wrap items-center">
                <div>
                  <a className="block pr-8 pb-2 text-lg font-medium border-b-2 border-teal-500" href="#">Doctor's Info</a>
                </div>
                <a className="ml-auto flex items-center py-2 px-4 text-sm text-white hover:bg-teal-600 rounded-lg -mt-6" style={{backgroundColor: currentColor}} href="#">
                  <span className="mr-1">
                    <FaUserDoctor />
                  </span>
                  <span>New Doctor</span>
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
                        <div className="flex items-center pl-6 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm font-heading font-semibold">Doctor's Name</span>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm font-heading font-semibold">Age</span>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm font-heading font-semibold">Gender</span>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm font-heading font-semibold">Specialization</span>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm font-heading font-semibold">Phone Number</span>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm font-heading font-semibold">Email Id</span>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm font-heading font-semibold">Action</span>
                        </div>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="p-0">
                        <div className="flex items-center justify-start p-5 h-20 min-w-max border-b border-gray-100">
                            <img class="object-cover w-8 h-8 rounded-full mr-2" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                            <div>
                            <p className="text-sm text-gray-600">Reta Havertz</p>
                            </div>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm text-gray-600">32</span>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                        <span className="text-sm text-gray-600">Female</span>
                        </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-gray-600">cardiology physician</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-gray-600">+91 12345 67890</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-gray-600">elsabethpolsan@hotmail.com</span>
                            </div>
                        </td>
                        <td className="p-0 text-xl">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <a className="inline-flex w-8 h-8 mr-5 items-center justify-center hover:bg-teal-600 rounded-xl text-white" style={{backgroundColor: currentColor}} href="#">
                                <BiSolidMessageSquareDetail />
                            </a>
                            <a className="inline-flex w-8 h-8 mr-5 items-center justify-center hover:bg-red-600 hover:text-white rounded-xl text-red-500 border-solid border-2 border-red-400" href="#">
                                <RxCross2 />
                            </a>
                            <a className="inline-flex w-8 h-8 items-center justify-center border-2 border-solid hover:bg-teal-600 hover:text-white rounded-xl" style={{borderColor: currentColor}} href="#">
                                <BsInfo />
                            </a>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-0">
                        <div className="flex items-center justify-start p-5 h-20 min-w-max border-b border-gray-100">
                            <img class="object-cover w-8 h-8 rounded-full mr-2" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div>
                            <p className="text-sm text-gray-600">John Doe</p>
                            </div>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm text-gray-600">32</span>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                        <span className="text-sm text-gray-600">Male</span>
                        </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-gray-600">anesthesiologist</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-gray-600">+91 12345 67890</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-gray-600">elsabethpolsan@hotmail.com</span>
                            </div>
                        </td>
                        <td className="p-0 text-xl">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <a className="inline-flex w-8 h-8 mr-5 items-center justify-center hover:bg-teal-600 rounded-xl text-white" style={{backgroundColor: currentColor}} href="#">
                                <BiSolidMessageSquareDetail />
                            </a>
                            <a className="inline-flex w-8 h-8 mr-5 items-center justify-center hover:bg-red-600 hover:text-white rounded-xl text-red-500 border-solid border-2 border-red-400" href="#">
                                <RxCross2 />
                            </a>
                            <a className="inline-flex w-8 h-8 items-center justify-center border-2 border-solid hover:bg-teal-600 hover:text-white rounded-xl" style={{borderColor: currentColor}} href="#">
                                <BsInfo />
                            </a>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-0">
                        <div className="flex items-center justify-start p-5 h-20 min-w-max border-b border-gray-100">
                            <img class="object-cover w-8 h-8 rounded-full mr-2" src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div>
                            <p className="text-sm text-gray-600">Jane Doe</p>
                            </div>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm text-gray-600">32</span>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                        <span className="text-sm text-gray-600">Female</span>
                        </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-gray-600">neurologist</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-gray-600">+91 12345 67890</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-gray-600">elsabethpolsan@hotmail.com</span>
                            </div>
                        </td>
                        <td className="p-0 text-xl">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <a className="inline-flex w-8 h-8 mr-5 items-center justify-center hover:bg-teal-600 rounded-xl text-white" style={{backgroundColor: currentColor}} href="#">
                                <BiSolidMessageSquareDetail />
                            </a>
                            <a className="inline-flex w-8 h-8 mr-5 items-center justify-center hover:bg-red-600 hover:text-white rounded-xl text-red-500 border-solid border-2 border-red-400" href="#">
                                <RxCross2 />
                            </a>
                            <a className="inline-flex w-8 h-8 items-center justify-center border-2 border-solid hover:bg-teal-600 hover:text-white rounded-xl" style={{borderColor: currentColor}} href="#">
                                <BsInfo />
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
    </div>
  );
}

export default Doctors;
