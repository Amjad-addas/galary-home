import Image from "next/image";
import Logo from '../public/logo.png'
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Title from "./components/title/Title";
import Recent from "./screen/recent/Recent";
import CardArea from "./components/cardarea/CardArea";
import Area from "./screen/area/Area";
import Comment from "./components/commentcard/Comment";
import CommentS from "./screen/comment/Comment";
export default function Home() {
  return (
    <>
    <Header/>
      <main  className="">
      <Hero/>
      <Title x='popular' y='text'/>
      <Recent/>
      <Title x='What You' y='Area Looking For'/>
      <Area/>
      <CommentS/>
    </main>
    <Footer/>
    </>

  );
}
