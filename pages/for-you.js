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

//   id: data.id,
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
//   authorDescription: data.authorDescription

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
