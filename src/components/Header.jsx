import logoImage from "../assets/Logo.svg";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navItems = [
    { title: "Home", path: "/", hasDropdown: false },
    { title: "Shop", path: "/shop", hasDropdown: false },
    { title: "Pages", path: "/pages", hasDropdown: false },
    { title: "Blog", path: "/blog", hasDropdown: false },
    { title: "About Us", path: "/about", hasDropdown: false },
    { title: "Contact Us", path: "/contact", hasDropdown: false },
  ];

  return (
    <div>
      <header className="flex flex-col">
        <div className="hidden md:flex justify-center border-b border-b-[#E6E6E6]">
          <div className="container flex justify-between p-3.25">
            <div className="flex items-center">
              <CiLocationOn className="text-gray text-[15px]" />
              <p className="text-gray text-[12px] font-poppins">
                Store Location: Lincoln- 344, Illinois, Chicago, USA
              </p>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                <h6 className="text-gray text-[12px] font-poppins">Eng</h6>
                <IoIosArrowDown className="text-gray text-[7px]" />
              </div>
              <div className="flex items-center gap-1.5">
                <h6 className="text-gray text-[12px] font-poppins">USD</h6>
                <IoIosArrowDown className="text-gray text-[7px]" />
              </div>
              <div className="h-3.75 w-px bg-[#E6E6E6]"></div>
              <div className="flex items-center gap-1">
                <button className="text-gray text-[12px] font-poppins">
                  Sign In
                </button>
                <p className="text-gray text-[12px] font-poppins">/</p>
                <button className="text-gray text-[12px] font-poppins">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-6">
          <div className="container flex items-center justify-between">
            <div>
              <img src={logoImage} alt="" className="w-25 md:w-32 lg:w-45.75" />
            </div>
            <div className="hidden md:flex items-center border border-[#E6E6E6] pl-4 rounded-md">
              <CiSearch className="text-[20px] text-custBlack mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="placeholder:text[#808080] placeholder:text[15px]"
              />
              <button className="text-white bg-lightGreen text-[14px] font-poppins font-semibold py-2.5 px-6 rounded-r-md">
                Search
              </button>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <GoHeart className="text-[20px] md:text-[32px] text-custBlack" />
              <div className="h-6 w-px bg-[#E6E6E6]"></div>
              <div className="flex items-center gap-1.5 md:gap-3">
                <div className="relative">
                  <HiOutlineShoppingBag className="text-[20px] md:text-[28px] text-custBlack" />
                  <div className="w-3.75 h-3.75 rounded-full bg-darkGreen flex justify-center items-center text-[10px] font-poppins font-semibold text-white absolute -top-1.25 -right-1.25 md:right-0">
                    2
                  </div>
                </div>
                <div>
                  <h6 className="text-[6px] md:text-[11px] text-[#4D4D4D] font-poppins hidden md:flex">
                    Shopping cart:
                  </h6>
                  <p className="text-[7px] md:text-[14px] text-custBlack font-poppins font-medium hidden md:flex">
                    $57.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-4 bg-darkGray">
          <div className="container flex justify-between">
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((el, index) => (
                <NavLink
                  key={index}
                  to={el.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 text-[14px] font-poppins font-medium
        ${isActive ? "text-white" : "text-lightGray"}`
                  }
                >
                  {el.title}
                  {el.hasDropdown && (
                    <IoIosArrowDown
                      className={({ isActive }) =>
                        isActive ? "text-white" : "text-gray"
                      }
                    />
                  )}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <FiPhoneCall className="text-[20px] md:text-[28px] text-white" />
              <h6 className="text-white text-[10px] md:text-[14px] font-poppins font-medium">
                (219) 555-0114
              </h6>
            </div>
            <IoIosMenu className="flex md:hidden text-[20px] text-white" />
          </div>
        </div>
      </header>
    </div>
  );
}
