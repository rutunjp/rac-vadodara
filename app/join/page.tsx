// pages/join.tsx
import { Button } from "@/components/ui/button";

export default function Join() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold">Join the Crew</h1>
      <p className="mt-4 text-lg text-center max-w-2xl">
        Ready to make shit happen? Drop your details. We’ll hit you up faster
        than a SpaceX launch.
      </p>
      <form className="mt-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 bg-gray-800 rounded text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-gray-800 rounded text-white"
        />
        <Button className="w-full bg-[#FF5733] hover:bg-[#FF7849] py-3 text-lg">
          Sign Me Up
        </Button>
      </form>
    </main>
  );
}
