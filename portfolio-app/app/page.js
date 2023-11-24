import About from '@/components/About';
import Contact from '@/components/Contact';
import Portfolio from '@/components/Portfolio';
import Qualification from '@/components/Qualification';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import MainContainer from '@/components/MainContainer';
import { source_Serif_4, dancing_script } from './fonts';

export default function Home() {
  return (
    <MainContainer>
      <Header source_Serif_4={source_Serif_4}></Header>
      <Hero source_Serif_4={source_Serif_4}></Hero>
      <About source_Serif_4={source_Serif_4}></About>
      <Skills source_Serif_4={source_Serif_4}></Skills>
      <Portfolio source_Serif_4={source_Serif_4}></Portfolio>
      <Qualification source_Serif_4={source_Serif_4}></Qualification>
      {/* <Testimonials source_Serif_4={source_Serif_4}></Testimonials> */}
      <Contact source_Serif_4={source_Serif_4}></Contact>
      <Footer dancing_script={dancing_script}></Footer>
    </MainContainer>
  );
}
