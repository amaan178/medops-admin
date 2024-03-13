import React from 'react';
import { TfiDashboard } from "react-icons/tfi";
import { HiMiniUsers } from "react-icons/hi2";
import { IoDocumentText } from "react-icons/io5";
import { GiMedicinePills } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { FaHospital } from "react-icons/fa";

export const links = [
  {
    links: [
      {
        name: 'dashboard',
        icon: <TfiDashboard />,
      },
      {
        name: 'patients',
        icon: <HiMiniUsers />,
      },
      {
        name: 'appointments',
        icon: <IoDocumentText />,
      },
      {
        name: 'doctors',
        icon: <FaUserDoctor />,
      },
      {
        name: 'messages',
        icon: <BiSolidMessageSquareDetail />,
      },
      {
        name: 'education content',
        icon: <FaHospital />,
      },
      {
        name: 'medicine inventory',
        icon: <GiMedicinePills />,
      },
      {
        name: 'settings',
        icon: <IoIosSettings />,
      },
      {
        name: 'logout',
        icon: <LuLogOut />,
      },
    ],
  },
];