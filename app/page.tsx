import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="text-center space-y-6 mt-10">
      <h1 className="text-4xl font-bold">KONSTRCT – Building Made Easy</h1>
      <p className="text-lg text-gray-600">
        Buy construction materials & hire trusted service providers in one place.
      </p>
      <div className="space-x-4">
        <Link href="/products" className="bg-blue-600 text-white px-6 py-2 rounded-lg">
          🏗 Shop Products
        </Link>
        <Link href="/services" className="bg-green-600 text-white px-6 py-2 rounded-lg">
          👷 Hire Services
        </Link>
      </div>
    </div>
  );
}
