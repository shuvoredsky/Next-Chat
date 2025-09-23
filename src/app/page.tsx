// app/page.tsx
import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default function HomePage() {
  const { userId } = auth();

  return (
    <div>
      <h1>Welcome to My App</h1>
      {userId ? <UserButton /> : <SignInButton />}
    </div>
  );
}
