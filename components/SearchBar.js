export default function SearchBar() {
  return (
    <>
      {/* wrapper */}
      <div className="ml-[200px] width-[calc(100%-200px)]">
        {/* search__background */}
        <div className=" border-b-[1px] border-solid border-[#e1e7ea] h-[80px]">
          {/* search__wrapper */}
          <div className="px-[32px] flex items-center justify-between max-w-[1070px] mx-auto">
            <figure></figure>
            {/* search__content */}
            <div className="flex items-center max-w-[340px] w-full">
              {/* search__input--wrappper */}
              <div>
                <input
                  className="h-[40px] w-full px-[16px] bg-[#f1f6f4] border-2 border-solid border-[#e1e7ea] rounded-[8px]"
                  placeholder="Search for books"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
