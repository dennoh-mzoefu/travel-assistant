import React from "react";
import SidebarLinks from "./SidebarLinks";
import { sidebarItems } from "../../data/dummy";

function Sidebar() {
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-stone-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-stone-800">
          <ul className="space-y-2 font-medium">
            {sidebarItems.map((item) => (
              <SidebarLinks key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
