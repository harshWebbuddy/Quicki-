import { useTheme } from "next-themes";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { useEffect, useState } from "react";
import Image from "next/image";

export function FirstPage() {
  const navigate = useNavigate();
  const authStore = useAuthStore();
  const authSign = () => {
    authStore.session ? authStore.logout() : navigate("login");
  };
  const nextTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const { systemTheme, theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        return setIsScrolled(true);
      }
      return setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="overflow-hidden relative">
        <div className="w-[1320px] h-[1320px] absolute top-[-1000px] left-[-200px] border-[2px] border-[#8dbbff1a] rounded-full" />
        <div className="w-[740px] h-[740px] absolute top-[200px] left-[40px] border-[2px] border-[#8dbbff1a] rounded-full z-[0]" />
        <div className="w-[840px] h-[840px] absolute top-[-800px] left-[40px] bg-gradient-to-br from-teal-600/50 to-blue-600/50 blur-[500px] z-[0]" />
        <div className="w-[640px] h-[640px] absolute top-[-800px] right-[200px] bg-gradient-to-br from-teal-600/50 to-yellow-600/50 blur-[500px] z-[0]" />
        <nav
          className={`fixed transition h-20 flex items-center w-full justify-between z-10 top-0  ${
            isScrolled
              ? "bg-white/60 dark:bg-black/30 backdrop-blur-sm"
              : "bg-transparent"
          }`}
        >
          <div className="w-full max-w-[1520px] mx-auto flex justify-between px-4">
            <Image
              src="/logo.svg"
              alt="logo"
              width={120}
              height={50}
              draggable={false}
              className="select-none"
            />
            <div className="flex items-center justify-between gap-4 sm:gap-10">
              <div className="relative">
                <div className=" text-neutral-700  font-['Mulish'] w-full font-semibold text-center cursor-pointer dark:text-white">
                  Home
                </div>
                <div className="w-2 h-2 absolute right-1/2 translate-y-1 bg-neutral-700 rounded-full dark:bg-white"></div>
              </div>
              <div className="">
                <div
                  className="opacity-70  text-neutral-700 font-['Mulish'] font-semibold w-full text-center cursor-pointer dark:text-[#B1B2B1]"
                  onClick={() => navigate("chat")}
                >
                  Chat
                </div>
              </div>
              <div className="h-full max-h-[30px] w-[2px] bg-gradient-to-b from-transparent via-white/50 to-transparent" />
              <div className="">
                <div
                  className=" text-lime-600 font-semibold font-['Mulish'] w-full text-center cursor-pointer"
                  onClick={authSign}
                >
                  {authStore.session ? "Sign Out" : "Sign In"}
                </div>
              </div>
              <div className="">
                <div
                  className=" text-neutral-700 text-l font-bold font-['Mulish'] w-full text-center cursor-pointer"
                  onClick={nextTheme}
                >
                  <img
                    src={
                      theme === "dark"
                        ? "images/dark-white.svg"
                        : "images/light-green.svg"
                    }
                    draggable={false}
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section className="w-full mt-40 relative z-[1]">
          <div className="h-fit max-w-[1520px] w-full mx-auto px-2">
            <div className="flex flex-col lg:flex-row justify-between w-full">
              <div className="w-full">
                <h1 className="w-full max-w-2xl md:max-w-5xl pt-14 text-6xl capitalize leading-relaxed">
                  <span className="text-neutral-700  dark:text-white  font-[1000] font-sans tracking-wide">
                    Use QuikAsk to
                    <br />
                  </span>
                  <p className="inline relative">
                    <span className="text-lime-600 ring-2 ring-green-500/10 rounded-sm p-3  relative">
                      <span className=" font-[1000] font-sans tracking-wide">
                        Simplify
                      </span>
                      <span className="bg-green-600 bg-opacity-5 absolute inset-0 backdrop-blur-[1.5px] z-[1]" />
                    </span>
                    <img
                      src="/images/curved-dash.png"
                      className="absolute translate-y-4 translate-x-6 object-cover w-4/5 "
                      draggable={false}
                    />
                  </p>
                  <span className="text-zinc-300 "> </span>
                  <span className="text-neutral-700  dark:text-white  font-[1000] font-sans tracking-wide">
                    Your Life
                  </span>
                </h1>
                <div className="flex justify-between mt-24">
                  <div className="w-full max-w-xl">
                    <span className="text-lime-600 font-[13px] font-['Mulish'] leading-8">
                      QuikAsk
                    </span>
                    <span className="text-[#B1B2B1] font-[13px] font-['Mulish'] leading-8 dark:text-neutral-300">
                      , have a natural conversation with AI that feels
                      surprisingly human. Interacting with artificial
                      intelligence used to feel difficult, overwhelming, and a
                      bit robotic.
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:mt-20 relative h-fit w-full sm:min-w-[512px]">
                <div className="bg-[#B8F68F] w-[170px] h-[170px] translate-x-60 rounded-full p-1 grid place-content-center shadow-5xl shadow-[#B8F68F]/60 s">
                  <div className="bg-[#B8F68F] w-[164px] h-[164px] rounded-full grid place-content-center border border-black">
                    <div className="text-center text-neutral-900 text-xl font-extrabold font-['Mulish'] leading-7">
                      Explore
                      <br />
                      Our Chat
                    </div>
                  </div>
                </div>
                <Image
                  src="/images/robot-hand.png"
                  alt="robot-hand"
                  width={700}
                  height={300}
                  className=" object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:items-end justify-between mt-20 px-3 md:px-0">
            <div className="w-full md:max-w-[352px] grid place-content-center rounded-t-2xl bg-gradient-to-b dark:from-[#242424] from-[#F3F3F3] to-transparent min-h-[80px] md:min-h-[160px]">
              <div className="text-neutral-700 font-[12px] font-['Mulish'] capitalize flex justify-between dark:text-white">
                <span className="items-center flex gap-4">Chat GPT</span>
                <img src="/images/down-arrow.svg" className="w-8" />
              </div>
            </div>
            <div className="w-full md:max-w-[352px] grid place-content-center rounded-t-2xl bg-gradient-to-b dark:from-[#242424] from-[#F3F3F3] to-transparent min-h-[80px] md:min-h-[120px]">
              <div className="text-neutral-700 font-[12px] font-['Mulish'] capitalize flex justify-between dark:text-white">
                <span className="items-center flex gap-4">Google Bard</span>
                <img src="/images/down-arrow.svg" className="w-8" />
              </div>
            </div>
            <div className="w-full md:max-w-[352px] grid place-content-center rounded-t-2xl bg-gradient-to-b from-[#69A606] to-transparent min-h-[80px] md:min-h-[80px]">
              <div className="text-neutral-700 font-[12px] font-['Mulish'] capitalize flex justify-between dark:text-white">
                <span className="items-center flex gap-4">QuikAsk Chat</span>
                <img src="/images/down-arrow.svg" className="w-8" />
              </div>
            </div>
            <div className="w-full md:max-w-[352px] grid place-content-center rounded-t-2xl bg-gradient-to-b dark:from-[#242424] from-[#F3F3F3] to-transparent min-h-[80px] md:min-h-[120px]">
              <div className="text-neutral-700 font-[12px] font-['Mulish'] capitalize flex justify-between dark:text-white">
                <span className="items-center flex gap-4">Duck Duck Go</span>
                <img src="/images/down-arrow.svg" className="w-8" />
              </div>
            </div>
            <div className="w-full md:max-w-[352px] grid place-content-center rounded-t-2xl bg-gradient-to-b dark:from-[#242424] from-[#F3F3F3] to-transparent min-h-[80px] md:min-h-[160px]">
              <div className="text-neutral-700 font-[12px] font-['Mulish'] capitalize flex justify-between dark:text-white">
                <span className="items-center flex gap-4">Anthropic Ai</span>
                <img src="/images/down-arrow.svg" className="w-8" />
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-20 px-2">
            <div className="w-full max-w-5xl mx-auto space-y-4">
              <div className="w-full flex justify-center text-center text-neutral-700 md:text-3xl text-2xl font-bold font-['Mulish'] capitalize leading-10 dark:text-white gap-2 sm:gap-4">
                <img
                  src="/images/spiral-arrow-left.svg"
                  className="w-32 hidden sm:block"
                />
                For All Kind of Creators
                <img
                  src="/images/spiral-arrow-right.svg"
                  className="w-32 hidden sm:block"
                />
              </div>
              <div className="w-full left-0 text-center text-neutral-700 font-[12px] font-['Mulish'] leading-7 dark:text-[#B1B2B1]">
                Introducing a revolutionary AI partner for creators across the
                globe—a groundbreaking tool designed to transform the way we
                bring our creative ideas to life. Unleash your artistic
                abilities as you explore a world of limitless possibilities. Say
                goodbye to obstacles and let this remarkable AI companion pave
                the way to a new era of boundless creation.
              </div>
            </div>
          </div>
          <div className="w-[740px] h-[740px] absolute right-[-480px] border-[2px] border-[#8dbbff1a] rounded-full z-[0]" />
          <div className="w-[640px] h-[640px] absolute bg-gradient-to-br from-teal-600/80 via-orange-500/50 to-green-600/80 blur-[500px] z-[0]" />
          <div className="grid mt-28 md:grid-cols-2 gap-x-4 gap-y-20 grid-cols-1 w-full max-w-[1520px] mx-auto px-2">
            <div className="cursor-default bg-gradient-to-b from-gray-200 to-gray-50 rounded-2xl dark:from-[#2F3128] dark:to-[#2f3128]/[0.05] group hover:ring-1 hover:ring-[#18BB4E] p-10 relative transition duration-300">
              <div className="space-y-6 flex flex-col items-center">
                <div className="w-20 h-20  bg-[#DADADA] dark:bg-[#3E3F3E] group-hover:bg-lime-600 rounded-2xl shadow grid place-content-center absolute -top-12 left-[45%] transition duration-100">
                  <img src="/images/chat-gpt.svg" className="w-11" />
                </div>
                <h1 className="text-center text-neutral-700 text-3xl font-semibold font-['Mulish'] capitalize leading-9 dark:text-white">
                  ChatGPT - 4
                </h1>
                <div className="max-w-md mx-auto text-center font-['Mulish'] leading-relaxed text-[#B1B2B1] dark:group-hover:text-white text-sm transition duration-300">
                  The next-generation AI language model with even deeper
                  understanding and more human-like conversations.
                </div>
                <img
                  src="/images/down-arrow.svg"
                  className="w-8 cursor-pointer"
                />
              </div>
            </div>
            <div className="cursor-default bg-gradient-to-b from-gray-200 to-gray-50 rounded-2xl dark:from-[#2F3128] dark:to-[#2f3128]/[0.05] group hover:ring-1 hover:ring-[#18BB4E] p-10 relative transition duration-300">
              <div className="space-y-6 flex flex-col items-center">
                <div className="w-20 h-20  bg-[#DADADA] dark:bg-[#3E3F3E] group-hover:bg-lime-600 rounded-2xl shadow grid place-content-center absolute -top-12 left-[45%] transition duration-100">
                  <img src="/images/google-white.svg" className="w-11" />
                </div>
                <h1 className="text-center text-neutral-700 text-3xl font-semibold font-['Mulish'] capitalize leading-9 dark:text-white">
                  Google Bard
                </h1>
                <div className="max-w-md mx-auto text-center font-['Mulish'] leading-relaxed text-[#B1B2B1] dark:group-hover:text-white text-sm transition duration-300">
                  AI-powered chatbot tool designed by Google to simulate human
                  conversations using natural language processing and machine
                  learning.
                </div>
                <img
                  src="/images/down-arrow.svg"
                  className="w-8 cursor-pointer"
                />
              </div>
            </div>
            <div className="cursor-default bg-gradient-to-b from-gray-200 to-gray-50 rounded-2xl dark:from-[#2F3128] dark:to-[#2f3128]/[0.05] group hover:ring-1 hover:ring-[#18BB4E] p-10 relative transition duration-300">
              <div className="space-y-6 flex flex-col items-center">
                <div className="w-20 h-20  bg-[#DADADA] dark:bg-[#3E3F3E] group-hover:bg-lime-600 rounded-2xl shadow grid place-content-center absolute -top-12 left-[45%] transition duration-100">
                  <img
                    src="/images/anthopic-white.svg"
                    className="w-11 translate-x-2"
                  />
                </div>
                <h1 className="text-center text-neutral-700 text-3xl font-semibold font-['Mulish'] capitalize leading-9 dark:text-white">
                  Anthropic Claude 2.0
                </h1>
                <div className="max-w-md mx-auto text-center font-['Mulish'] leading-relaxed text-[#B1B2B1] dark:group-hover:text-white text-sm transition duration-300">
                  QuikAsk have integrated with claude it can do things like
                  create summaries, write code, translate text, and more.
                </div>
                <img
                  src="/images/down-arrow.svg"
                  className="w-8 cursor-pointer"
                />
              </div>
            </div>
            <div className="cursor-default bg-gradient-to-b from-gray-200 to-gray-50 rounded-2xl dark:from-[#2F3128] dark:to-[#2f3128]/[0.05] group hover:ring-1 hover:ring-[#18BB4E] p-10 relative transition duration-300">
              <div className="space-y-6 flex flex-col items-center">
                <div className="w-20 h-20  bg-[#DADADA] dark:bg-[#3E3F3E] group-hover:bg-lime-600 rounded-2xl shadow grid place-content-center absolute -top-12 left-[45%] transition duration-100">
                  <img src="/images/duckduckgo-white.svg" className="w-11" />
                </div>
                <h1 className="text-center text-neutral-700 text-3xl font-semibold font-['Mulish'] capitalize leading-9 dark:text-white">
                  Duck Duck Go
                </h1>
                <div className="max-w-md mx-auto text-center font-['Mulish'] leading-relaxed text-[#B1B2B1] dark:group-hover:text-white text-sm transition duration-300">
                  A privacy-focused search engine that prioritizes user
                  anonymity by not tracking or storing personal information.
                </div>
                <img
                  src="/images/down-arrow.svg"
                  className="w-8 cursor-pointer"
                />
              </div>
            </div>
            <div className="w-[440px] h-[440px] absolute right-[-520px] bg-gradient-to-br from-teal-600/80 via-blue-500/50 to-green-600/80 blur-[500px] z-[0]" />
          </div>
          <div className="max-w-[1520px] w-full mx-auto px-2">
            <img
              src="/images/path.svg"
              className="absolute -translate-x-44 -translate-y-20 object-cover z-[0]"
            />
            <div className="flex flex-col md:flex-row justify-between gap-20 w-full mt-28 z-[1]">
              <div className="space-y-6">
                <div className="text-neutral-700 text-3xl font-bold font-['Mulish'] capitalize leading-10 dark:text-white">
                  AI&apos;s Innovative Potential for
                  <br />
                  One-Click Content Generation
                </div>
                <div className="w-full pt-4 text-neutral-700 font-normal font-['Mulish'] leading-7 dark:text-neutral-400">
                  Crafting influential content requires a deep understanding of
                  your target audience. Pinpoint your ideal demographic and
                  familiarise yourself with their needs, passions, and sources
                  of concern.
                </div>
                <div className="space-y-4">
                  <div className="w-full flex items-start gap-4">
                    <div className="w-6 h-6 left-0 mt-1.5">
                      <div className="w-6 h-6 border border-green-500 grid place-content-center">
                        <div className="w-3 h-3 bg-green-500"></div>
                      </div>
                    </div>
                    <p className="w-full text-neutral-700 font-normal font-['Mulish'] leading-7 dark:text-white">
                      Attract your audience with captivating facts in your
                      commercials
                    </p>
                  </div>
                  <div className="w-full flex items-start gap-4">
                    <div className="w-6 h-6 left-0 mt-1.5">
                      <div className="w-6 h-6 border border-green-500 grid place-content-center">
                        <div className="w-3 h-3 bg-green-500"></div>
                      </div>
                    </div>
                    <p className="w-full text-neutral-700 font-normal font-['Mulish'] leading-7 dark:text-white">
                      Let&apos;s engage with the customers effectively
                    </p>
                  </div>
                  <div className="w-full flex items-start gap-4">
                    <div className="w-6 h-6 left-0 mt-1.5">
                      <div className="w-6 h-6 border border-green-500 grid place-content-center">
                        <div className="w-3 h-3 bg-green-500"></div>
                      </div>
                    </div>
                    <p className="w-full text-neutral-700 font-normal font-['Mulish'] leading-7 dark:text-white">
                      Brighten up your content with appealing graphics:
                      pictures, clips, and graphs that will fascinate your
                      users!
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full grid content-center justify-center">
                <img src="/images/chatbot.png" className="w-96" />
              </div>
            </div>
            <div className="flex  flex-col-reverse md:flex-row justify-between gap-20 w-full mt-28 z-[1]">
              <div className="w-full grid content-center justify-center">
                <img src="/images/computerbot.png" className="w-96" />
              </div>
              <div className="w-full space-y-6">
                <div className="text-neutral-700 text-3xl font-bold font-['Mulish'] capitalize leading-10 dark:text-white">
                  The key resource for First <br />
                  Page Content Optimization
                </div>
                <div className="w-full pt-4 text-neutral-700 font-normal font-['Mulish'] leading-7 dark:text-neutral-400">
                  &quot;Unlock Content Magic: Tailor Your Message to Win Hearts!
                  Discover Your Ideal Audience, Understand Their Desires,
                  Tastes, and Challenges!&quot;
                </div>
                <div className="space-y-4">
                  <div className="w-full flex items-start gap-4">
                    <div className="w-6 h-6 left-0 mt-1.5">
                      <div className="w-6 h-6 border border-green-500 grid place-content-center">
                        <div className="w-3 h-3 bg-green-500"></div>
                      </div>
                    </div>
                    <p className="w-full text-neutral-700 font-normal font-['Mulish'] leading-7 dark:text-white">
                      Gain valuable insights into their expectations,
                      preferences, and aspirations.
                    </p>
                  </div>
                  <div className="w-full flex items-start gap-4">
                    <div className="w-6 h-6 left-0 mt-1.5">
                      <div className="w-6 h-6 border border-green-500 grid place-content-center">
                        <div className="w-3 h-3 bg-green-500"></div>
                      </div>
                    </div>
                    <p className="w-full text-neutral-700 font-normal font-['Mulish'] leading-7 dark:text-white">
                      Create captivating content that speaks directly to their
                      hearts and minds.
                    </p>
                  </div>
                  <div className="w-full flex items-start gap-4">
                    <div className="w-6 h-6 left-0 mt-1.5">
                      <div className="w-6 h-6 border border-green-500 grid place-content-center">
                        <div className="w-3 h-3 bg-green-500"></div>
                      </div>
                    </div>
                    <p className="text-neutral-700 font-normal font-['Mulish'] leading-7 dark:text-white">
                      Identify the precise pain points and challenges your
                      audience faces, and provide solutions through your
                      content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  flex-col md:flex-row justify-between gap-20 mt-28 z-[1]">
              <div className="w-full space-y-6">
                <div className="text-neutral-700 text-3xl font-bold font-['Mulish'] capitalize leading-10 dark:text-white">
                  QuikAsk: Your Companion for
                  <br />
                  Hashtags, Captions, and More!
                </div>
                <p className="w-full pt-4 text-neutral-700 font-normal font-['Mulish'] leading-7 dark:text-neutral-400">
                  Experience the power of QUIKASK AI and revolutionise your
                  social media presence. Say goodbye to writer&apos;s block and
                  hello to compelling hashtags, captivating captions, and
                  endless content possibilities.
                </p>
                <div className="space-y-4">
                  <div className="w-full flex items-start gap-4">
                    <div className="w-6 h-6 left-0 mt-1.5">
                      <div className="w-6 h-6 border border-green-500 grid place-content-center">
                        <div className="w-3 h-3 bg-green-500"></div>
                      </div>
                    </div>
                    <p className="w-full  text-neutral-700 text-lg font-normal font-['Mulish'] leading-7 dark:text-neutral-400">
                      Curate endless content possibilities that make your
                      website shine.
                    </p>
                  </div>
                  <div className="w-full flex items-start gap-4">
                    <div className="w-6 h-6 left-0 mt-1.5">
                      <div className="w-6 h-6 border border-green-500 grid place-content-center">
                        <div className="w-3 h-3 bg-green-500"></div>
                      </div>
                    </div>
                    <p className="w-full text-neutral-700 text-lg font-normal font-['Mulish'] leading-7 dark:text-neutral-400">
                      Generates compelling hashtags that skyrocket your reach
                    </p>
                  </div>
                  <div className="w-full flex items-start gap-4">
                    <div className="w-6 h-6 left-0 mt-1.5">
                      <div className="w-6 h-6 border border-green-500 grid place-content-center">
                        <div className="w-3 h-3 bg-green-500"></div>
                      </div>
                    </div>
                    <p className="w-full text-neutral-700 text-lg font-normal font-['Mulish'] leading-7 dark:text-neutral-400">
                      Unlock a world of unlimited content ideas that keep your
                      followers hooked.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full grid content-center justify-center">
                <img src="/images/littlebot.png" className="w-96" />
              </div>
            </div>
          </div>
          <div className="mt-40">
            <div className="w-[440px] h-[440px] absolute right-10 bg-gradient-to-br from-blue-600 via-lime-500/50 to-green-600 blur-[420px] z-[0]" />
            <div className="w-full flex justify-center text-center text-neutral-700 md:text-3xl text-xl font-bold font-['Mulish'] capitalize leading-10 dark:text-white">
              <div className="w-full flex justify-center text-center text-neutral-700 md:text-3xl text-2xl font-bold font-['Mulish'] capitalize leading-10 dark:text-white gap-2 md:gap-4">
                <img
                  src="/images/spiral-arrow-left.svg"
                  className="w-32 hidden sm:block"
                />
                <h1 className="max-w-lg w-full">
                  Check out how much{" "}
                  <span className="text-[#69A606]">QuikAsk</span> is loved by
                  our users!
                </h1>
                <img
                  src="/images/spiral-arrow-right.svg"
                  className="w-32 hidden sm:block"
                />
              </div>
            </div>
            <div className="mt-14 w-full flex justify-center items-center">
              <div className="flex flex-col md:flex-row items-center p-2">
                <img
                  src="/images/testimonial.jpg"
                  className="w-full max-w-[384px] md:w-80"
                />
                <div className="flex flex-col gap-4 md:mt-20">
                  <div className="ml-4">
                    <h1 className="text-2xl dark:text-white">
                      Cameron Williamson
                    </h1>
                    <p className="text-neutral-700 text-opacity-60 text-sm dark:text-neutral-400">
                      CEO & Owner, Vision Trust
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-end md:relative">
                    <div className="bg-[#18BB4E] w-full md:w-[1380px] h-[180px] md:absolute -right-1/2 mix-blend-multiply flex justify-between items-center">
                      <div className="w-full flex justify-start h-full cursor-pointer max-w-[200px] pl-10">
                        <img
                          src="/images/Frame-Left.svg"
                          alt="left"
                          className="w-[70px]"
                        />
                      </div>
                      <div className="w-full flex justify-end h-full cursor-pointer max-w-[200px] pr-10">
                        <img
                          src="/images/Frame-Right.svg"
                          alt="left"
                          className="w-[70px]"
                        />
                      </div>
                    </div>
                    <div className="w-full max-w-xl bg-gradient-to-b from-[#DADADA] to-[#A1A1A1] relative z-[1]">
                      <img
                        src="/images/quote.svg"
                        className="absolute w-8 m-3"
                      />
                      <div className="dark:bg-black p-12">
                        It&apos;s like having a 24/7 virtual assistant that can
                        engage with our customers intelligently and provide
                        instant support. The chatbot&apos;s natural language
                        understanding and quick responses have improved our
                        efficiency. It&apos;s truly a valuable addition to our
                        team!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1520px] mx-auto mt-28">
            <div className="flex justify-center px-2">
              <div className="w-full space-y-3">
                <div className="w-full flex justify-center text-center text-neutral-700 md:text-3xl text-2xl font-['Mulish'] capitalize leading-10 dark:text-white gap-4">
                  <img
                    src="/images/spiral-arrow-left.svg"
                    className="w-32 hidden sm:block"
                  />
                  <h1 className="max-w-lg w-full">
                    frequently asked questions
                  </h1>
                  <img
                    src="/images/spiral-arrow-right.svg"
                    className="w-32 hidden sm:block"
                  />
                </div>
                <div className="text-center text-neutral-700 font-[12px] font-['Mulish'] leading-7 dark:text-neutral-400">
                  Here, you can find some useful information about QuikAsk
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div className="flex border-t border-neutral-700  items-center justify-between px-4 sm:px-8">
                <div className="flex items-center py-4 sm:py-6 gap-3 sm:gap-6">
                  <div className="text-outline font-sans font-bold text-center align-middle text-3xl sm:text-5xl capitalize leading-10 text-transparent bg-clip-text">
                    01
                  </div>
                  <div className="text-neutral-700 text-md sm:text-xl font-['Mulish'] capitalize sm:leading-10 dark:text-white">
                    Is the content unique?
                  </div>
                </div>
                <img
                  src="/images/plus-green.svg"
                  className="w-6 cursor-pointer"
                />
              </div>
            </div>

            <div className="">
              <div className="flex border-t border-neutral-700 items-center justify-between px-4 sm:px-8">
                <div className="flex items-center py-4 sm:py-6 gap-3 sm:sm:gap-6">
                  <div className="text-outline font-sans font-bold text-center align-middle text-3xl sm:text-5xl capitalize leading-10 text-transparent bg-clip-text">
                    02
                  </div>
                  <div className="text-neutral-700 text-md sm:text-xl font-['Mulish'] capitalize sm:leading-10 dark:text-white">
                    How can I boost traffic with Quik ASk?
                  </div>
                </div>
                <img
                  src="/images/plus-green.svg"
                  className="w-6 cursor-pointer"
                />
              </div>
            </div>
            <div className="w-[440px] h-[440px] absolute right-1/3 bg-gradient-to-br from-orange-400/50 via-lime-500/50 to-green-600 blur-[420px] z-[0]" />

            <div className="">
              <div className="flex border-t border-neutral-700 items-center justify-between px-4 sm:px-8">
                <div className="flex items-center py-4 sm:py-6 gap-3 sm:sm:gap-6">
                  <div className="text-outline font-sans font-bold text-center align-middle text-3xl sm:text-5xl capitalize leading-10 text-transparent bg-clip-text">
                    03
                  </div>
                  <div className="text-neutral-700 text-md sm:text-xl font-['Mulish'] capitalize sm:leading-10 dark:text-white">
                    How long will it take to write an article with AI?
                  </div>
                </div>
                <img
                  src="/images/plus-green.svg"
                  className="w-6 cursor-pointer"
                />
              </div>
            </div>
            <div className="">
              <div className="flex border-t border-neutral-700 items-center justify-between px-4 sm:px-8">
                <div className="flex items-center py-4 sm:py-6 gap-3 sm:gap-6">
                  <div className="text-outline font-sans font-bold text-center align-middle text-3xl sm:text-5xl capitalize leading-10 text-transparent bg-clip-text">
                    04
                  </div>
                  <div className="text-neutral-700 text-md sm:text-xl font-['Mulish'] capitalize sm:leading-10 dark:text-white">
                    Is there a limit to the amount of stuff that I can create?
                  </div>
                </div>
                <img
                  src="/images/plus-green.svg"
                  className="w-6 cursor-pointer"
                />
              </div>
            </div>
            <div className="">
              <div className="flex border-t border-neutral-700 items-center justify-between px-4 sm:px-8">
                <div className="flex items-center py-4 sm:py-6 gap-3 sm:gap-6">
                  <div className="text-outline font-sans font-bold text-center align-middle text-3xl sm:text-5xl capitalize leading-10 text-transparent bg-clip-text">
                    05
                  </div>
                  <div className="text-neutral-700 text-md sm:text-xl font-['Mulish'] capitalize sm:leading-10 dark:text-white">
                    What languages do you support?
                  </div>
                </div>
                <img
                  src="/images/plus-green.svg"
                  className="w-6 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1520px] mx-auto mt-28">
            <div className="w-[440px] h-[440px] absolute bg-gradient-to-br from-blue-600 via-teal-500/50 to-green-600 blur-[420px] z-[0]" />

            <div className="text-neutral-700 text-4xl font-bold font-['Mulish'] capitalize pb-12 leading-10 dark:text-white px-4">
              Trusted By
            </div>
            <div className="border-y border-neutral-600 py-7 bg-transparent">
              <div className="px-3 flex  gap-2 flex-col min-[400px]:flex-row justify-between ">
                <div className="w-36 h-10 relative">
                  <img
                    className="w-36 h-10 left-0 top-0 absolute"
                    src="/images/paypal.png"
                  />
                </div>
                <div className="w-36 h-10 relative">
                  <img
                    className="w-36 h-10 left-0 top-0 absolute"
                    src="/images/visa.png"
                  />
                </div>
                <div className="w-36 h-10 relative">
                  <img
                    className="w-36 h-10 left-0 top-0 absolute"
                    src="/images/amazon.png"
                  />
                </div>
                <div className="w-36 h-10 relative">
                  <img
                    className="w-36 h-10 left-0 top-0 absolute"
                    src="/images/citibank.png"
                  />
                </div>
                <div className="w-28 h-10 relative">
                  <img
                    className="w-36 h-10 left-0 top-0 absolute"
                    src="/images/w.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-28 max-w-[1520px] mx-auto p-3 space-y-4">
            <div className="text-4xl font-bold font-['Mulish'] text-center capitalize leading-10 text-neutral-700 dark:text-white">
              Trade With Anyone
            </div>
            <div className="font-['Mulish'] capitalize text-neutral-700 justify-center flex pt-3 dark:text-neutral-400">
              <p className="max-w-[800px] text-sm sm:text-base w-full text-center">
                Lorem ipsum dolor sit amet consectetur. Nisi risus at ac
                vestibulum ut. Amet bibendum mi eu leo. Ut odio ipsum et quis id
                ridiculus commodo tincidunt ridiculus. Lacus ut sit vestibulum
                at.
              </p>
            </div>
            <div className="flex flex-wrap justify-center pt-3">
              <img src="/images/discord.svg" className="w-12 pl-2 pr-2" />
              <img src="/images/telegram.svg" className="w-12 pl-2 pr-2" />
              <img src="/images/twitter.svg" className="w-12 pl-2 pr-2" />
              <img src="/images/linkedin.svg" className="w-12 pl-2 pr-2" />
              <img src="/images/facebook.svg" className="w-12 pl-2 pr-2" />
              <img src="/images/instagram.svg" className="w-12 pl-2 pr-2" />
              <img src="/images/reddit.svg" className="w-12 pl-2 pr-2" />
            </div>
          </div>
          <div className="mt-28 border-t border-white/10 py-10">
            <div className="max-w-[1520px] mx-auto h-8 flex justify-between flex-col sm:flex-row px-4">
              <div className="text-neutral-700  font-normal font-['Mulish'] leading-loose dark:text-[#B1B2B1]">
                Contact Us: support@quikask.com
              </div>
              <div className="text-neutral-700  font-normal font-['Mulish'] leading-loose dark:text-[#B1B2B1]">
                © 2023 QuikAsk
              </div>
              <div className="text-neutral-700  font-normal font-['Mulish'] leading-loose dark:text-[#B1B2B1]">
                Privacy Policy
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
