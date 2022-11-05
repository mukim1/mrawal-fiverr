import { Accordion, Menu } from "@mantine/core";
import { BsBank2, BsGlobe, BsGlobe2 } from "react-icons/bs";
import Link from "next/link";
import { TbFileDollar } from "react-icons/tb";
import { MdPrivacyTip } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import { FaAffiliatetheme } from "react-icons/fa";
import Image from "next/image";
import {
  FaBlogger,
  FaMoneyCheckAlt,
  FaProductHunt,
  FaUserFriends,
} from "react-icons/fa";
import {
  AiFillApi,
  AiFillCaretDown,
  AiFillCompass,
  AiOutlineApi,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

export const Solutions = () => {
  return (
    <Menu
      trigger="hover"
      openDelay={100}
      closeDelay={200}
      radius="md"
      shadow={"xl"}
      offset={30}
    >
      <Menu.Target>
        <button className="text-[16px] hover:underline flex items-center gap-x-2">
          <span>Solutions</span> <AiFillCaretDown size={13} className="" />
        </button>
      </Menu.Target>
      <Menu.Dropdown sx={{ color: "#000" }} className="p-5 shadow-lg">
        <div className="flex gap-2 px-3 py-2 rounded-lg hover:bg-gray-300">
          <BsGlobe2 className="text-[#3b3b3b]" size={20} />

          <div className="flex flex-col ">
            <Link href="/global-employment">
              <a className="text-[16px] text-[#3b3b3b] ">
                Hire Global Employeess
              </a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 px-3 py-2 rounded-lg hover:bg-gray-300 ">
          <BsBank2 className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/contractor-management">
              <a className="text-[16px] text-[#3b3b3b] ">Manage Contractors</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 px-3 py-2 rounded-lg hover:bg-gray-300 ">
          <TbFileDollar className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/global-payroll">
              <a className="text-[16px] text-[#3b3b3b]">Run Global Payroll</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 px-3 py-2 rounded-lg hover:bg-gray-300">
          <FaMoneyCheckAlt className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/global-payments">
              <a className="text-[16px] text-[#3b3b3b] ">Pay Remote Teams</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 px-3 py-2 rounded-lg hover:bg-gray-300">
          <AiOutlineApi className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/global-payments">
              <a className="text-[16px] text-[#3b3b3b] ">
                API and Integrations
              </a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 px-3 py-2 rounded-lg hover:bg-gray-300">
          <MdPrivacyTip className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/privacypolicy">
              <a className="text-[16px] text-[#3b3b3b] ">
                Security and Privacy
              </a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 px-3 py-2 rounded-lg hover:bg-gray-300">
          <AiFillCompass className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/global-payments">
              <a className="text-[16px] text-[#3b3b3b] "> Global Compliance</a>
            </Link>
          </div>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};

export const Resources = () => {
  return (
    <Menu
      trigger="hover"
      openDelay={100}
      closeDelay={200}
      radius="md"
      shadow={"xl"}
      offset={30}
    >
      <Menu.Target>
        <button className="text-[16px] hover:underline flex items-center gap-x-2">
          <span>Resources</span> <AiFillCaretDown size={13} />
        </button>
      </Menu.Target>
      <Menu.Dropdown sx={{ color: "#000" }} className="p-5 shadow-lg">
        <div className="flex gap-2 px-3 py-2 rounded-lg hover:bg-gray-300">
          <FaUserFriends className="text-[#3b3b3b]" size={20} />

          <div className="flex flex-col ">
            <Link href="/global-employment">
              <a className="text-[16px] text-[#3b3b3b] ">Case Studies</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 px-3 py-2 rounded-lg hover:bg-gray-300 ">
          <FaBlogger className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/contractor-management">
              <a className="text-[16px] text-[#3b3b3b] ">Blog</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 px-3 py-2 rounded-lg hover:bg-gray-300 ">
          <BsGlobe className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/global-payroll">
              <a className="text-[16px] text-[#3b3b3b]">Global Hiring Guide</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 px-3 py-2 rounded-lg hover:bg-gray-300">
          <FaProductHunt className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/global-payments">
              <a className="text-[16px] text-[#3b3b3b] ">Podcast</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 px-3 py-2 rounded-lg hover:bg-gray-300">
          <BiHelpCircle className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="https://intercom.help/lano/en/">
              <a className="text-[16px] text-[#3b3b3b] ">Help Center</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 px-3 py-2 rounded-lg hover:bg-gray-300">
          <FaAffiliatetheme className="text-[#3b3b3b]" size={20} />
          <div className="flex flex-col ">
            <Link href="/global-payments">
              <a className="text-[16px] text-[#3b3b3b] ">Affiliate Program</a>
            </Link>
          </div>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};

export const PhoneNenu = () => (
  <Menu openDelay={100} closeDelay={400} offset={-60}>
    <Menu.Target>
      <button>
        <AiOutlineMenu size={22} />
      </button>
    </Menu.Target>
    <Menu.Dropdown sx={{ borderRadius: 0 }}>
      <div className="w-screen p-1 text-black">
        <div className="flex items-center justify-between pt-5 pl-2 pr-5 pb-5">
          <Image
            src={`/assets/logo.png`}
            width={100}
            height={30}
            alt=""
            objectFit="cover"
          />
          <Menu.Target>
            <AiOutlineClose size={22} />
          </Menu.Target>
        </div>
        {phoneMenuItem.map((item) => (
          <p key={item.name} className="text-[18px] text-[#3b3b3b] py-1">
            {item.link ? (
              <Link href={item.link}>
                <a className="px-4 block py-2 text-[18px] ">{item.name}</a>
              </Link>
            ) : (
              <Accordion>
                <Accordion.Item value={item.name} className="border-none pr-10">
                  <Accordion.Control className="text-[18px]">
                    <div className="text-xl text-gray-500 font-semibold">
                      {item.name}
                    </div>
                  </Accordion.Control>
                  {item?.links?.map((link) => (
                    <Accordion.Panel key={link.name}>
                      <div className="flex items-center gap-3 ">
                        <a>{link.icon}</a>
                        <Link href={link.link}>
                          <a className="block">{link.name}</a>
                        </Link>
                      </div>
                    </Accordion.Panel>
                  ))}
                </Accordion.Item>
              </Accordion>
            )}
          </p>
        ))}
      </div>
      <div className="flex flex-col items-center my-6">
        <button className="w-[95%] py-4 rounded-lg bg-blue-100 text-[#5E5CE4] text-lg">
          Login
        </button>
        <button className="w-[95%] mt-5 py-4 bg-[#5E5CE4] rounded-md text-white text-lg">
          Sign up for free
        </button>
      </div>
    </Menu.Dropdown>
  </Menu>
);

const TBDropdown = ({ children, name }: TBDropdownProp) => (
  <Menu trigger="hover" openDelay={100} closeDelay={400} offset={-60}>
    <Menu.Target>
      <button className="text-[16px] hover:underline">{name}</button>
    </Menu.Target>
    <Menu.Dropdown sx={{ borderRadius: 0 }}>
      <div className="relative w-screen p-10 text-black">{children}</div>
    </Menu.Dropdown>
  </Menu>
);

interface TBDropdownProp {
  children: React.ReactNode;
  name: string;
}

const phoneMenuItem = [
  {
    name: "Solution",
    links: [
      {
        name: "Hire Global Employees",
        icon: <BsGlobe2 size={15} className="text-[#3b3b3b]" />,
        link: "/global-employment",
      },
      {
        name: "Manage Contractors",
        icon: <BsBank2 className="text-[#3b3b3b]" size={20} />,
        link: "/contractor-management",
      },
      {
        name: "Run Global Payroll",
        icon: <TbFileDollar className="text-[#3b3b3b]" size={20} />,
        link: "/global-payroll",
      },
      {
        name: "Pay Remote Teams",
        icon: <FaMoneyCheckAlt className="text-[#3b3b3b]" size={20} />,
        link: "/global-payments",
      },
    ],
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "Case Studies",
    links: [
      {
        name: "Blog",
        icon: <FaUserFriends className="text-[#3b3b3b]" size={20} />,
        link: "/global-employment",
      },
      {
        name: "Global Hiring Guide",
        icon: <BsGlobe className="text-[#3b3b3b]" size={20} />,
        link: "/contractor-management",
      },
      {
        name: "Podcast",
        icon: <FaProductHunt className="text-[#3b3b3b]" size={20} />,
        link: "/global-payroll",
      },
      {
        name: "Help Center",
        icon: <BiHelpCircle className="text-[#3b3b3b]" size={20} />,
        link: "/global-payments",
      },
    ],
  },
  {
    name: "About US",
    link: "/about",
  },
];
