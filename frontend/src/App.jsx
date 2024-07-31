import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Login from "./components/Login";
import Home from "./Home";

export default function App() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Home />
      </SignedIn>
    </>
  )
}