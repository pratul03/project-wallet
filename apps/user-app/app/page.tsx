import { PrismaClient } from "@repo/db/client";

const client= new PrismaClient();

export default function Home() {
  return (
    <div className="text-4xl text-center bg-gray-800 text-white">
      HIi There
    </div>
  );
}
