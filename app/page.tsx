import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800 text-white rounded-xl">
        <div className="flex items-center justify-center my-4">
          <Image src="/logo.png" width={200} height={50} alt="logo" />
        </div>
        <Link href="/login">
          <div className="bg-black mt-4 mb-2 p-3 rounded-lg text-center cursor-pointer hover:bg-slate-700">
            Sign In
          </div>
        </Link>
        <Link href="/sign-up">
          <div className="bg-black mt-2 mb-4 p-3 rounded-lg text-center cursor-pointer hover:bg-slate-700">
            Sign Up
          </div>
        </Link>
      </div>
    </main>
  );
}
