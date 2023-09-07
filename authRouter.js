import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const HOME_ROUTE = "/";
const ACCOUNT_ROUTE = "/for-you";

const AuthRouter = (props) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const pathName = usePathname();

  const redirect = (isLoading, firebaseUser) => {
    if (!isLoading) {
      if (firebaseUser) {
        router.push(ACCOUNT_ROUTE);
      } else {
        router.push(HOME_ROUTE);
      }
    }
  };

  useEffect(() => {
    redirect(loading, user);
  }, [loading, user, pathName]);

  if (loading) {
    return null;
  } else {
    return <>{props.children}</>;
  }
};

export default AuthRouter;
