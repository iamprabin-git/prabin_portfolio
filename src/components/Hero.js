import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Prabin Dangol</h1>
      <p className="mt-4 text-lg">Web Developer & Graphic Designer</p>
      <div className="mt-6">
        <Link href="https://github.com/iamprabin-git" className="px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600">View My Work</Link>
      </div>
    </section>
  );
}