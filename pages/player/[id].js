import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/SideBar";

export async function getServerSideProps(context) {
  const bookRes = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${context.query.id}`
  );
  const bookData = await bookRes.json();
  return { props: { bookData } };
}

export default function BookPlayer({ bookData }) {
  console.log(bookData);
  return (
    <div className="w-full">
      <Sidebar />
      <SearchBar />
      <div className="ml-[200px] w-[calc(100%-200px)]">
        {/* row */}
        <div className="max-w-[1070px] w-full mx-auto px-[24px]">
          {/* Container */}
          <div className="w-full py-[40px]">
            {/* summary */}
            <div className="w-full overflow-y-auto h-[calc(100vh-160px)]">
              {/* audio book summary */}
              <div className="whitespace-pre-line p-[24px] max-w-[800px] mx-auto">
                {/* audio book summary title */}
                <div className="text-[#032b41] text-[24px] border-b-[1px] border-[#e1e7ea] border-solid pb-[16px] leading-normal font-semibold mb-[32px]">
                  {bookData?.title}
                </div>
                {/* audio book summary text */}
                <div className="whitespace-pre-line leading-[1.4] text-[#032b41]">
                  {bookData?.summary}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
