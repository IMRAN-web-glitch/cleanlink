import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import Link from "next/link";

export default async function Page({ params }) {
    const shorturl = (await params).shorturl;

    const client = await clientPromise;
    const db = client.db("cleanlink");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl: shorturl });

    if (doc) {
        let targetUrl = doc.url;

        // If user didn't include http/https, add https://
        if (!/^https?:\/\//i.test(targetUrl)) {
            targetUrl = `https://${targetUrl}`;
        }

        redirect(targetUrl);
    }

    // If not found, show a beautiful error page
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-[#FFF9C4] px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col items-center max-w-lg w-full">
                <svg
                    width="80"
                    height="80"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="mb-4"
                >
                    <circle cx="12" cy="12" r="10" fill="#FBC02D" />
                    <path
                        d="M9.17 9.17a3 3 0 0 1 4.24 0m-4.24 5.66a3 3 0 0 0 4.24 0"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <line
                        x1="9"
                        y1="15"
                        x2="15"
                        y2="9"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
                <h1 className="text-2xl md:text-3xl font-bold text-[#FBC02D] mb-2 text-center">
                    Link Not Found
                </h1>
                <p className="text-gray-700 mb-6 text-center">
                    Sorry, the short link you tried does not exist or has expired.
                    <br />
                    Please check the URL or create a new short link.
                </p>
                <Link
                    href="/"
                    className="bg-[#FBC02D] hover:bg-[#FFD54F] text-white font-semibold px-6 py-2 rounded-lg shadow transition-colors"
                >
                    Go to Home
                </Link>
            </div>
        </main>
    );
}
