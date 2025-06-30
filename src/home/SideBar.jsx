import React from "react";
import { MdAccountCircle, MdHelp, MdMenuBook } from "react-icons/md";

const SideBar = ({ sideBarToggle, setSideBarToggle }) => {
    const sidebarLinks = [
  {
    label: "Upgrade",
    icon: <MdAccountCircle />,
    href: "#",
  },
  {
    label: "Help",
    icon: <MdHelp />,
    href: "#",
  },
  {
    label: "Docs",
    icon: <MdMenuBook />,
    href: "#",
  },
];
  return (
    <aside
      id="separator-sidebar"
      aria-label="Sidebar"
      className={`${sideBarToggle ? "hidden" : "block"} fixed top-0 left-0 z-40 w-30 sm:w-64 h-screen  transition-transform duration-300 ease-in-out transform sm:translate-x-0`}
    >
      <div className="h-full px-1 sm:px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
            
              <span className="ms-0 sm:ms-3">Dashboard</span>
            </a>
          </li>
          {/* More list items below... */}
        </ul>

        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
  {sidebarLinks.map((item, index) => (
    <li key={index}>
      <a
        href={item.href}
        className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
      >
        {item.icon}
        <span className="ms-3">{item.label}</span>
      </a>
    </li>
  ))}
</ul>

      </div>
    </aside>
  );
};

export default SideBar;
