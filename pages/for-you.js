import BooksForYou from "@/components/BooksForYou";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/SideBar";
export async function getServerSideProps() {
  const [selectedRes, recommendedRes, suggestedRes] = await Promise.all([
    fetch(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
    ),
    fetch(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
    ),
    fetch(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
    ),
  ]);
  const [selected, recommended, suggested] = await Promise.all([
    selectedRes.json(),
    recommendedRes.json(),
    suggestedRes.json(),
  ]);
  return { props: { selected, recommended, suggested } };
}

export default function foryou({ selected, recommended, suggested }) {
  return (
    <div className="w-full ">
      <Sidebar />
      <SearchBar />
      <BooksForYou
        selectedBooks={selected[0]}
        recommendedBooks={recommended}
        suggestedBooks={suggested}
      />
    </div>
  );
}
