import BooksForYou from "@/components/BooksForYou";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/SideBar";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/userSlice";
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
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      dispatch(
        setUser({
          email: currentUser.email,
          uid: currentUser.uid,
        })
      );
    });

    return unsubscribe;
  }, []);

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
