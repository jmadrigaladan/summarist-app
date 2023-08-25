import BooksForYou from "@/components/BooksForYou";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/SideBar";

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
  );
  const data = await res.json();
  // const formattedData = {
  //   id: JSON.stringify(data.id),
  //   author: data.author,
  //   title: data.title,
  //   subTitle: data.subTitle,
  //   imageLink: data.imageLink,
  //   audioLink: data.audioLink,
  //   totalRating: data.totalRating,
  //   averageRating: data.averageRating,
  //   keyIdeas: data.keyIdeas,
  //   type: data.type,
  //   status: data.status,
  //   subscriptionRequired: data.subscriptionRequired,
  //   summary: data.summary,
  //   tags: data.tags,
  //   bookDescription: data.bookDescription,
  //   authorDescription: data.authorDescription,
  // };
  return {
    props: {
      selectedBook: data,
    },
  };
};
export default function foryou({ selectedBook }) {
  return (
    <div className="w-full ">
      <Sidebar />
      <SearchBar />
      <BooksForYou selectedBooks={selectedBook} />
    </div>
  );
}
