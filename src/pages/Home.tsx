import GridPattern from "../components/ui/animated/AnimatedGridPattern";
import { FloatingDock } from "../components/ui/static/Navbar";
import ta from "../assets/ta.png";
import Button from "../components/ui/animated/Button";
import { FaChevronRight } from "react-icons/fa6";
import wave from "../assets/wave.svg";
import { ContainerScroll } from "../components/ui/animated/ContainerScroll";
import dashboard from "../assets/dashboard.png";
import AnimatedSVG from "../components/ui/animated/DrawLine";
import expand from "../assets/expand.svg";
import { InfiniteMovingCards } from "../components/ui/animated/InfiniteCard";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
  SubTitle,
} from "../components/ui/animated/GlowingCard";
import LetterFillingText from "../components/ui/animated/TextReveal";
import forms from "../assets/form.svg";
import msg from "../assets/msg.svg";
import note2 from "../assets/noteDot.svg";
import warn from "../assets/warning.svg";
import camera from "../assets/camera.svg";
import TestimonialCard from "../components/ui/animated/Testimonial";
import { ExpandableCardDemo } from "../components/ui/animated/ExpandableCard";
import CardGrid from "../components/ui/animated/CardGrid";
import Footer from "../components/ui/static/Footer";
import Accordion from "../components/ui/animated/Accordion";
import { OrbitingCircles } from "../components/ui/animated/OrbitingCircles";
import o1 from "../assets/o1.png";
import o2 from "../assets/o2.png";
import o3 from "../assets/o3.png";
import o4 from "../assets/o4.png";
import o5 from "../assets/o5.png";
import o6 from "../assets/o6.png";
import o7 from "../assets/o7.png";
import o8 from "../assets/o8.png";
import { IconPhoneCall, IconTerminal2 } from "@tabler/icons-react";
import { RiPriceTag3Line } from "react-icons/ri";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { RiRobot2Line } from "react-icons/ri";
import { RiHome6Line } from "react-icons/ri";
const Home = () => {
  const helpData = [
    {
      colSpan: true,
      bgColor: "bg-custom-danger",
      title: "30-40%",
      description: "Time saving on total testing process",
    },
    {
      colSpan: false,
      bgColor: "bg-custom-info",
      title: "70%",
      description: "Manual Intervention Reduced",
    },
    {
      colSpan: false,
      bgColor: "bg-custom-warning",
      title: "60%-70%",
      description: "Accuracy  under specific environments",
    },
    {
      colSpan: true,
      bgColor: "bg-custom-purple",
      title: "4%",
      description: "Faster Execution & Delivery",
    },
  ];
  const cardData = [
    {
      colSpan: true,
      bgColor: "bg-custom-danger",
      title: "Expand Test Coverage",
      description:
        "The power of full-stack to the frontend. Read the release notes.",
    },
    {
      colSpan: false,
      bgColor: "bg-custom-info",
      title: "Reduce Maintenance",
      description:
        "Fast authoring increases and coverage and quality across your application.",
    },
    {
      colSpan: false,
      bgColor: "bg-custom-warning",
      title: "Troubleshoot fast",
      description:
        "Fast authoring increases and coverage and quality across your application.",
    },
    {
      colSpan: true,
      bgColor: "bg-custom-purple",
      title: "Scale Quality",
      description:
        "Fast authoring increases and coverage and quality across your application.",
    },
  ];
  const testimonials = [
    {
      quote: "Test Forms For ALL Valid & Invalid",
      name: "Automate form validation for names, emails, credit cards, and more to ensure data accuracy.",
      image: forms,
      bgClass: "bg-custom-warning",
    },
    {
      quote: "Screen Recording On The Go",
      name: "Automate form validation for names, emails, credit cards, and more to ensure data accuracy.",
      bgClass: "bg-custom-danger",
      image: camera,
    },
    {
      quote: "Important? We Bring You Note Pin",
      name: "Automate form validation for names, emails, credit cards, and more to ensure data accuracy.",
      image: note2,
      bgClass: "bg-custom-info",
    },
    {
      quote: "Subscribe To Fuel BugBot Benefits",
      image: msg,

      name: "Automate form validation for names, emails, credit cards, and more to ensure data accuracy.",
      bgClass: "bg-custom-purple",
    },
    {
      quote: "Harness AI-enabled Visual Testing",
      image: warn,

      name: "Automate form validation for names, emails, credit cards, and more to ensure data accuracy.",
      bgClass: "bg-custom-lightBlue",
    },
  ];
  const links = [
    {
      title: "Home",
      icon: (
        <RiHome6Line className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Features",
      icon: (
        <IconTerminal2 className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Pricing",
      icon: (
        <RiPriceTag3Line className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "About us",
      icon: (
        <RiRobot2Line className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Contact Us",
      icon: (
        <IconPhoneCall className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Blogs",
      icon: (
        <RiDashboardHorizontalLine className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <main>
      <div className="h-screen flex items-center justify-center relative">
        <div className="absolute top-0">
          <img draggable="false" src={wave} alt="wave" />
        </div>
        <div className="fixed z-[90] bottom-10">
          <FloatingDock mobileClassName="translate-y-20" items={links} />
        </div>
        <div className="flex flex-col justify-center items-center relative z-10">
          <h1 className="text-[102px] text-white font-bold m-0 leading-none pointer-events-none">
            Your Personal
          </h1>
          <img
            draggable="false"
            src={ta}
            alt="Testing Assistant"
            className="pointer-events-none"
          />
          <p className="text-2xl text-white font-medium mt-7 max-w-[750px] text-center pointer-events-none">
            Exploratory testing was never this easy! Skip off all the hassle of
            creating common problematic values and edge cases with BugBot. 
          </p>
          <div className="mt-8 relative z-20">
            <Button
              Icon={FaChevronRight}
              label="TRY BUGBOT NOW"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
        <GridPattern />
      </div>
    
      <section className="relative -mt-[200px]">
        <div className="relative z-10">
          <ContainerScroll titleComponent={undefined}>
            <img
              draggable={false}
              className="mx-auto  h-auto max-w-full "
              src={dashboard}
              alt="dashboard"
            />
          </ContainerScroll>
        </div>
        <div className="absolute top-[300px] right-0">
          <AnimatedSVG />
        </div>
      </section>
      <section className="mt-32">
        <LetterFillingText text={"FEATURES THAT WILL BLOW YOUR MIND"} />
        <CardGrid />
      </section>
      <section className="mx-auto max-w-[1760px]">
     
      </section>
      <section className="relative">
        <div className="bg-custom-accent5 p-[60px] max-w-[1760px] mt-32 rounded-[48px] mx-auto relative z-50 backdrop-blur-[50px]">
          <h6 className="text-white font-medium text-[36px]">Benefits</h6>
          <h2 className="text-white font-bold text-[72px] mt-3">
            Fast, Flexible and Resilient
          </h2>
          <div className="mt-16 grid grid-cols-12 gap-10">
            {cardData.map(({ colSpan, bgColor, title, description }, index) => (
              <GlowingStarsBackgroundCard
                key={index}
                className={colSpan === true ? "col-span-7" : "col-span-5"}
              >
                <GlowingStarsTitle className={bgColor}>
                  <img src={expand} alt="expand" />
                </GlowingStarsTitle>
                <div className="flex gap-3 flex-col">
                  <SubTitle>{title}</SubTitle>
                  <GlowingStarsDescription>
                    {description}
                  </GlowingStarsDescription>
                </div>
              </GlowingStarsBackgroundCard>
            ))}
          </div>
        </div>
        <div className="absolute right-0 scale-x-[-1] top-[150px] z-40">
          <AnimatedSVG />
        </div>
      </section>
      <section className="mt-64">
        <LetterFillingText text={"The Core Capabilities"} />
        <div className="mt-20">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>
      <section className="relative">
        <div className="bg-custom-accent5 p-[60px] max-w-[1760px] mt-32 rounded-[48px] mx-auto relative z-50 backdrop-blur-[50px]">
          <h2 className="text-white font-medium text-5xl">
            How We Will Help You Stand Out With BugBot?
          </h2>
          <div className="mt-16 grid grid-cols-12 gap-10">
            {helpData.map(({ bgColor, title, description }, index) => (
              <GlowingStarsBackgroundCard key={index} className="col-span-3">
                <GlowingStarsTitle className={bgColor}>
                  <img src={expand} alt="expand" />
                </GlowingStarsTitle>
                <div className="flex gap-3 flex-col">
                  <SubTitle>{title}</SubTitle>
                  <GlowingStarsDescription>
                    {description}
                  </GlowingStarsDescription>
                </div>
              </GlowingStarsBackgroundCard>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-32 max-w-[1760px] mx-auto grid grid-cols-12">
        <div className=" col-span-6 mb-20 text-center mx-auto max-w-[580px] self-center">
          <h3 className="text-custom-accent text-5xl font-bold px-8 py-4 rounded-2xl	 bg-custom-accent5 w-fit mx-auto">
            Our Testimonials
          </h3>
          <p className="text-white text-2xl mt-6">
            Whether your time-saving automation needs are large or small, we’re
            here to help you scale.
          </p>
        </div>
        <div className="col-span-6 grid grid-cols-12 items-center">
          <div className="col-span-12">
            <TestimonialCard />
          </div>
        </div>
      </section>
      <section className="max-w-[1760px] mx-auto grid grid-cols-12 mt-32">
        <div className="relative flex h-[1000px] w-full flex-col items-center justify-center overflow-hidden col-span-6">
          <OrbitingCircles
            className="size-[130px] border-none bg-transparent"
            duration={20}
            delay={50}
            radius={190}
          >
            <img src={o1} alt="" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[130px] border-none bg-transparent"
            duration={30}
            delay={40}
            radius={190}
          >
            <img src={o2} alt="" />
          </OrbitingCircles>

          <OrbitingCircles
            className="size-[130px] border-none bg-transparent"
            radius={190}
            duration={40}
            delay={30}
          >
            <img src={o3} alt="" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[130px] border-none bg-transparent"
            radius={190}
            duration={50}
            delay={20}
          >
            <img src={o7} alt="" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[130px] border-none bg-transparent"
            radius={375}
            duration={20}
            delay={50}
            reverse
          >
            <img src={o8} alt="" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[130px] border-none bg-transparent"
            radius={375}
            duration={30}
            delay={40}
            reverse
          >
            <img src={o4} alt="" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[130px] border-none bg-transparent"
            radius={375}
            duration={40}
            delay={30}
            reverse
          >
            <img src={o5} alt="" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[130px] border-none bg-transparent"
            radius={375}
            duration={50}
            delay={20}
            reverse
          >
            <img src={o6} alt="" />
          </OrbitingCircles>
        </div>
        <div className="col-span-6 self-center">
          <LetterFillingText centerText={false} text={"Wall of Fame"} />
          <p className="mt-5 text-[32px] text-white">
            Lorem ipsum dolor sit amet consectetur. <br /> In augue ipsum tellus
            ultrices.
          </p>
        </div>
      </section>
      <section>
        <Accordion />
      </section>
      <section className="mt-32">
        <div className="mb-20 text-center mx-auto ">
          <h3 className="text-custom-accent text-5xl font-bold px-8 py-4 rounded-2xl	 bg-custom-accent5 w-fit mx-auto">
            Our Blogs
          </h3>
        </div>
        <ExpandableCardDemo />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
