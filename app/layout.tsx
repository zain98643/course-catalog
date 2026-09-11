import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <header className="border-b bg-white">
          <nav className="max-w-4xl mx-auto px-4 py-4 flex gap-6 font-medium">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/courses" className="hover:text-blue-600">Courses</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}