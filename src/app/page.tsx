import Image from "next/image";
import {Hero} from '@/app/components/Hero';
import Features from './components/Features';
import ProblemSolution from "./components/ProblemSolution";
import EmailForm from "./components/EmailForm";
import Audience from "./components/Audience";
import Footer from "./components/Footer"
export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <Features />
      <Audience />
      <EmailForm />
      <Footer />
    </main>
  );
}
