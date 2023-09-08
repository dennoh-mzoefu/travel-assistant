import { AiOutlineHome, AiOutlineSchedule } from "react-icons/ai";
import { FcMultipleInputs } from "react-icons/fc";
import { BiMessageAltDots } from "react-icons/bi";
import { MdExplore } from "react-icons/md";
import { PiMapPinBold } from "react-icons/pi";

export const sidebarItems = [
  {
    id: 1,
    name: "Home",
    icon: AiOutlineHome,
    link: "/",
    child: {
      name: "",
      number: null,
    },
  },
  {
    id: 2,
    name: "Preference",
    icon: FcMultipleInputs,
    link: "/",
    child: {
      name: "pro",
      number: null,
    },
  },
  {
    id: 3,
    name: "Explore",
    icon: MdExplore,
    link: "/",
    child: {
      name: "pro",
      number: null,
    },
  },
  {
    id: 4,
    name: "Todos",
    icon: AiOutlineSchedule,
    link: "/",
    child: {
      name: "pro",
      number: null,
    },
  },
  {
    id: 5,
    name: "Map Guide",
    icon: PiMapPinBold,
    link: "/",
    child: {
      name: "pro",
      number: null,
    },
  },
  {
    id: 6,
    name: "Inbox",
    icon: BiMessageAltDots,
    link: "/",
    child: {
      name: "",
      number: 3,
    },
  },
];
