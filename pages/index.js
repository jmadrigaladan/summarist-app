import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Numbers from "@/components/Numbers";
import Reviews from "@/components/Reviews";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { setUser } from "@/redux/userSlice";

export default function Home() {
  const user = useSelector((state) => state.user.email);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/for-you");
    }
  });

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      router.push("/for-you");
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
    <>
      <Nav />
      <Hero />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </>
  );
}
