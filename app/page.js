"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const quotes = [
  "“Simplicity is the ultimate sophistication.” – Leonardo da Vinci",
  "“Short links, big results.”",
  "“Make every click count.”",
  "“Clean links, clear impact.”",
];

export default function Home() {
  const [quoteIdx, setQuoteIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="bg-[#FFF9C4] text-black m-10 flex items-center justify-center">
        <div className="flex flex-col md:flex-row justify-evenly p-5 items-center w-full max-w-6xl mx-auto">
          <div className="text-center md:w-[50vw] w-full flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl md:text-5xl mb-3 animate-fade-in">
              Less link, more impact.
            </h1>
            {/* Animated Quotes */}
            <div className="h-12 flex items-center justify-center mb-4 w-full">
              <span
                key={quoteIdx}
                className="text-[#FBC02D] text-lg md:text-xl font-semibold transition-opacity duration-700 ease-in-out animate-fade-in"
              >
                {quotes[quoteIdx]}
              </span>
            </div>
            <p className="p-2 text-base md:text-lg mb-4">
              Say goodbye to long, ugly links. With our fast and simple tool, you can create clean, memorable short links in seconds. Whether you are sharing on social media, in emails, or anywhere else — keep it neat, trackable, and effective. No clutter, just powerful, professional links.
            </p>
            <ul className="flex justify-center items-center p-3.5 gap-4 text-lg font-semibold">
              <Link href="/shorten">
                <li className="bg-[#FBC02D] hover:bg-[#FFD54F] transition-colors rounded-lg px-5 py-2 shadow-md cursor-pointer">
                  Try now
                </li>
              </Link>
              <Link href="https://github.com/" target="_blank">
                <li className="bg-white border border-[#FBC02D] text-[#FBC02D] hover:bg-[#FFF9C4] transition-colors rounded-lg px-5 py-2 shadow-md cursor-pointer">
                  Github
                </li>
              </Link>
            </ul>
          </div>
          <div className="md:w-[40vw] w-full flex justify-center items-center mt-8 md:mt-0 animate-float">
            <Image
              alt="an vector image"
              width={300}
              height={300}
              src="/vector.webp"
              className="rounded-xl shadow-lg transition-transform duration-700"
              priority
            />
          </div>
        </div>
        {/* Animations */}
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.8s;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-12px);}
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </main>
    </>
  );
}
