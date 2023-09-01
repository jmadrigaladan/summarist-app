import { AiOutlineSearch } from "react-icons/ai";
import HamburgerSideBar from "./HamburgerSideBar";
export default function SearchBar() {
  return (
    <>
      {/* wrapper */}
      <div className="md:ml-[200px] md:w-[calc(100%-200px)]">
        {/* search__background */}
        <div className=" border-b-[1px] border-solid border-[#e1e7ea] h-[80px] flex items-center">
          {/* search__wrapper */}
          <div className="w-full px-[24px] md:px-[32px] flex items-center justify-end  md:justify-between max-w-[1070px] mx-auto">
            <figure></figure>
            {/* search__content */}
            <div className="flex items-center max-w-[340px] ml-[4px] md:ml-0 w-full">
              {/* search__input--wrappper */}
              <div className=" h-[40px] w-[90%] flex bg-[#f1f6f4] border-2 border-solid border-[#e1e7ea] rounded-[8px] items-center">
                <input
                  className="h-[40px] w-full px-[16px] bg-transparent focus:text-[#042330] focus:outline-none text-[14px]"
                  placeholder="Search for books"
                  type="text"
                />
                <AiOutlineSearch className="w-[36px] h-[36px] mr-[6px] border-l-[2px] border-solid border-[#e1e7ea] pl-[8px] " />
              </div>
            </div>
            <HamburgerSideBar className="" />
          </div>
        </div>
      </div>
    </>
  );
}
