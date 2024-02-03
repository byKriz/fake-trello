"use client";
// import { auth, currentUser } from "@clerk/nextjs";

import { UserButton } from "@clerk/nextjs";

export default function ProtectedPage() {
  //   const user = await currentUser();
  //   const { userId } = auth();

  return (
    <div className="p-5 w-full h-full bg-slate-200">
      {/* protected page
      <p>User: {user?.firstName}</p>
      <p>ID: {userId}</p> */}

      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}
