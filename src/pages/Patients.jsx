import React from 'react';
import { IoPersonAdd } from "react-icons/io5";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { BsInfo } from "react-icons/bs";
import { useStateContext } from '../contexts/ContextProvider';

const Patients = () => {
    const { currentColor } = useStateContext();
  return (
    <div>
      <section className="py-5">
        <div className="container px-8 mx-auto">
          <div className="pt-6 bg-white shadow rounded-xl">
            <div className="px-6 border-b">
              <div className="flex flex-wrap items-center">
                <div>
                  <a className="block pr-8 pb-2 text-lg font-medium border-b-2 border-teal-500" href="#">Patient Info</a>
                </div>
                <a className="ml-auto flex items-center py-2 px-4 text-sm text-white hover:bg-teal-600 rounded-lg -mt-6" style={{backgroundColor: currentColor}} href="#">
                  <span className="mr-1">
                    <IoPersonAdd />
                  </span>
                  <span>New Patient</span>
                </a>
              </div>
            </div>  
            <div className="inline-block min-w-full overflow-hidden">
                <table className="table-auto w-full">
                    <thead>
                    <tr>
                        <td className="relative p-0">
                        <div className="flex items-center pl-6 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm font-heading font-semibold">Patient Name</span>
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
                            <span className="text-sm font-heading font-semibold">Blood Group</span>
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
                            <p className="text-sm ont-heading font-medium">Reta Havertz</p>
                            </div>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm darkBlueGray-400 font-heading">32</span>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                        <span className="text-sm darkBlueGray-400 font-heading">Female</span>
                        </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">B+ve</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">+91 12345 67890</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">elsabethpolsan@hotmail.com</span>
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
                            <img class="object-cover w-8 h-8 rounded-full mr-2" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                            <div>
                            <p className="text-sm ont-heading font-medium">Reta Havertz</p>
                            </div>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm darkBlueGray-400 font-heading">32</span>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                        <span className="text-sm darkBlueGray-400 font-heading">Female</span>
                        </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">B+ve</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">+91 12345 67890</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">elsabethpolsan@hotmail.com</span>
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
                            <img class="object-cover w-8 h-8 rounded-full mr-2" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                            <div>
                            <p className="text-sm ont-heading font-medium">Reta Havertz</p>
                            </div>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm darkBlueGray-400 font-heading">32</span>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                        <span className="text-sm darkBlueGray-400 font-heading">Female</span>
                        </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">B+ve</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">+91 12345 67890</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">elsabethpolsan@hotmail.com</span>
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
                            <img class="object-cover w-8 h-8 rounded-full mr-2" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                            <div>
                            <p className="text-sm ont-heading font-medium">Reta Havertz</p>
                            </div>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm darkBlueGray-400 font-heading">32</span>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                        <span className="text-sm darkBlueGray-400 font-heading">Female</span>
                        </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">B+ve</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">+91 12345 67890</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">elsabethpolsan@hotmail.com</span>
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
                            <img class="object-cover w-8 h-8 rounded-full mr-2" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                            <div>
                            <p className="text-sm ont-heading font-medium">Reta Havertz</p>
                            </div>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm darkBlueGray-400 font-heading">32</span>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                        <span className="text-sm darkBlueGray-400 font-heading">Female</span>
                        </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">B+ve</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">+91 12345 67890</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">elsabethpolsan@hotmail.com</span>
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
                            <img class="object-cover w-8 h-8 rounded-full mr-2" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                            <div>
                            <p className="text-sm ont-heading font-medium">Reta Havertz</p>
                            </div>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                            <span className="text-sm darkBlueGray-400 font-heading">32</span>
                        </div>
                        </td>
                        <td className="p-0">
                        <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                        <span className="text-sm darkBlueGray-400 font-heading">Female</span>
                        </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">B+ve</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">+91 12345 67890</span>
                            </div>
                        </td>
                        <td className="p-0">
                            <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                                <span className="text-sm text-darkBlueGray-400 font-heading">elsabethpolsan@hotmail.com</span>
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

export default Patients;
