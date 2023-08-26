import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/SideBar";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const bookRes = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${context.query.id}`
  );
  const bookData = await bookRes.json();
  return { props: { bookData } };
}

export default function BookPage({ bookData }) {
  console.log(bookData);
  return (
    <div className="w-full">
      <Sidebar />
      <SearchBar />
      <h1>Book: </h1>
    </div>
  );
}
