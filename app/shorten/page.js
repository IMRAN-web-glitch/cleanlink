"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, setUrl] = useState('')
  const [shorturl, setShorturl] = useState('')
  const [generatedUrl, setGeneratedUrl] = useState('')

  const generate = async () => {
    if (url === '' || shorturl === '') {
      alert('Please fill in both fields.')
      return
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUrl('')
        setShorturl('')
        if (result.success === true) {
          setGeneratedUrl(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        }
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }

  return (
    <main className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-[#FFF9C4] via-[#FFF59D] to-[#FBC02D] px-2">
      <div className="backdrop-blur-md bg-white/70 border border-[#FBC02D] shadow-2xl rounded-2xl p-8 md:p-14 flex flex-col items-center w-full max-w-2xl animate-fade-in">
        <h1 className="font-extrabold text-3xl md:text-4xl text-[#FBC02D] mb-2 text-center animate-slide-down">
          ✂️ Shorten Your URL
        </h1>
        <p className="text-gray-700 mb-6 text-center font-medium">
          Paste your long link and create a clean, memorable short URL in seconds!
        </p>
        <div className="flex flex-col gap-4 w-full mb-4">
          <input
            placeholder="Enter your long URL"
            className="outline-[#FBC02D] border border-[#FBC02D]/40 focus:border-[#FBC02D] w-full bg-white p-3 rounded-lg transition-all duration-200 shadow-sm text-base"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            placeholder="Custom short text (e.g. my-link)"
            className="outline-[#FBC02D] border border-[#FBC02D]/40 focus:border-[#FBC02D] w-full bg-white p-3 rounded-lg transition-all duration-200 shadow-sm text-base"
            type="text"
            value={shorturl}
            onChange={(e) => setShorturl(e.target.value)}
          />
        </div>
        <button
          className="bg-[#FBC02D] hover:bg-[#FFD54F] text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 mt-2 animate-bounce-slow"
          onClick={generate}
        >
          Shorten URL
        </button>
        {generatedUrl && (
          <div className="w-full mt-8 animate-fade-in">
            <div className="bg-[#FFF9C4] border border-[#FBC02D] rounded-lg p-4 flex flex-col items-center shadow">
              <p className="font-semibold text-gray-800 mb-1">Your short link:</p>
              <Link
                target="_blank"
                href={generatedUrl}
                className="text-[#FBC02D] font-bold break-all underline hover:text-[#FFD54F] transition-colors"
              >
                {generatedUrl}
              </Link>
            </div>
          </div>
        )}
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.7s;
          }
          @keyframes slide-down {
            from { opacity: 0; transform: translateY(-20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-slide-down {
            animation: slide-down 0.8s cubic-bezier(.4,2,.6,1.2);
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-6px);}
          }
          .animate-bounce-slow {
            animation: bounce-slow 2s infinite;
          }
        `}</style>
      </div>
    </main>
  )
}

export default Shorten
