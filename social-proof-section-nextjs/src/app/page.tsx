import Jumbotron from "@/components/modules/Jumbotron";
import TestimonyCard from "@/components/modules/TestimonyCard";

export default function Home() {
  return (
    <main className="container mx-auto px-5 sm:px-20">
      <Jumbotron />
      <TestimonyCard/>
    </main>
  );
}
