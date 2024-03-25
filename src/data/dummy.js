import React from 'react';
import { TfiDashboard } from "react-icons/tfi";
import { HiMiniUsers } from "react-icons/hi2";
import { IoDocumentText } from "react-icons/io5";
import { GiMedicinePills } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";

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
        name: 'medicine inventory',
        icon: <GiMedicinePills />,
      },
      {
        name: 'logout',
        icon: <LuLogOut />,
      },
    ],
  },
];