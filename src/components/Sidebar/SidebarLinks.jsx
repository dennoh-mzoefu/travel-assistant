import React from "react";

function SidebarLinks({ item }) {
  const Icon = item.icon;
  return (
    <li>
      <a
        href="#"
        className="mt-3 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <div className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
          <Icon size={24} color="chocolate" />
        </div>
        <span className="flex-1 ml-3 whitespace-nowrap">{item.name}</span>
        {item.child.name !== "" && (
          <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-blue-300">
            {item?.child?.name}
          </span>
        )}
        {item.child.numbers !== null && console.log("yes")}
        {Number.isInteger(item.child.number) && (
          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {item?.child?.number}
          </span>
        )}
      </a>
    </li>
  );
}

export default SidebarLinks;
