import {
  FiUsers,
  FiCompass,
  FiSettings,
} from "react-icons/fi";
import { Button } from "@windmill/react-ui";
import { IoLogOutOutline } from "react-icons/io5";
import { MdOutlineInventory } from "react-icons/md";

const sidebar = [
  {
    icon: MdOutlineInventory,
    name: "Products",
    path: "/products",
  },
  {
    path: "/orders",
    icon: FiCompass,
    name: "Orders",
  },
  {

    icon: FiUsers,
    name: "Customers",
  },
  {
    path: "/store-setting",
    icon: FiSettings,
    name: "Store Setting",
  },
];

const Sidebar = () => {
  return (
    <aside className="z-30 flex-shrink-0 hidden shadow-sm w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <a className="pl-6 text-xl text-gray-900 dark:text-gray-200 font-bold" href="/dashboard">
          Dashboard
        </a>
        <ul className="mt-6">
          {sidebar.map((route) => (
            <li className="relative" key={route.name}>
              <a
                target={`${route?.outside ? "_blank" : "_self"}`}
                className="px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-[#e0015e] dark:hover:text-gray-200"
                rel="noreferrer"
              >
                {/* <span
                    className="absolute inset-y-0 left-0 w-1 bg-[#e0015e] rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span> */}
                <route.icon className="w-5 h-5" aria-hidden="true" />
                <span className="ml-4 cursor-pointer">{route.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <span className="lg:fixed bottom-0 px-6 py-6 w-64 mx-auto relative mt-3 block">
          <Button onClick={() => { console.log("abc") }} size="large" className="w-full bg-[#e0015e] hover:bg-[#e0699b]">
            <span className="flex items-center">
              <IoLogOutOutline className="mr-3 text-lg" />
              <span className="text-sm">LogOut</span>
            </span>
          </Button>
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
