import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../../hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-custom-accent20 backdrop-blur-[50px] sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between gap-4 items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-white  text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className=" text-white text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full w-fit text-nowrap font-bold bg-custom-accent text-custom-primary"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" text-white text-xs md:text-sm lg:text-xl h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-[1760px] mx-auto w-full grid grid-cols-12 items-start gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col col-span-3 h-full border border-1 border-custom-accent12 bg-custom-accent5 hover:bg-custom-accent20 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-80 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex   flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white  text-xl"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white font-light  text-secondary mt-4 md:text-left text-[28px]"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Lana Del Rey",
    description:
      "The 1800s-Inspired Target Holiday Gem I'm Buying Before It Sells Out",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Read More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          vitae reiciendis aspernatur laborum totam consectetur fugiat qui
          consequuntur ducimus minima ipsam ratione sit quaerat deleniti
          perspiciatis. <br /> <br /> ratione eligendi veniam, excepturi
          tenetur? Architecto consequuntur neque vitae cum. Porro cumque
          sapiente nisi tempore fuga nemo omnis nesciunt consequatur! Assumenda
          quaerat dolorum hic dolor beatae, dicta nulla quas. Ea aspernatur
          nobis corporis quisquam laudantium asperiores nulla.
        </p>
      );
    },
  },
  {
    title: "Babbu Maan",
    description:
      "If You Spot This “So Cute” $1 Kitchen Gem at Dollar Tree, Grab 6",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Read More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          vitae reiciendis aspernatur laborum totam consectetur fugiat qui
          consequuntur ducimus minima ipsam ratione sit quaerat deleniti
          perspiciatis. <br /> <br /> ratione eligendi veniam, excepturi
          tenetur? Architecto consequuntur neque vitae cum. Porro cumque
          sapiente nisi tempore fuga nemo omnis nesciunt consequatur! Assumenda
          quaerat dolorum hic dolor beatae, dicta nulla quas. Ea aspernatur
          nobis corporis quisquam laudantium asperiores nulla.
        </p>
      );
    },
  },

  {
    title: "Metallica",
    description: "The $5 IKEA Find That Saves Me 10 Minutes Each Morning",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Read More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          vitae reiciendis aspernatur laborum totam consectetur fugiat qui
          consequuntur ducimus minima ipsam ratione sit quaerat deleniti
          perspiciatis. <br /> <br /> ratione eligendi veniam, excepturi
          tenetur? Architecto consequuntur neque vitae cum. Porro cumque
          sapiente nisi tempore fuga nemo omnis nesciunt consequatur! Assumenda
          quaerat dolorum hic dolor beatae, dicta nulla quas. Ea aspernatur
          nobis corporis quisquam laudantium asperiores nulla.
        </p>
      );
    },
  },
  {
    title: "Lord Himesh",
    description:
      "The Practical 144-Year-Old Home Feature I Wish Every Home Still Had",
    src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
    ctaText: "Read More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          vitae reiciendis aspernatur laborum totam consectetur fugiat qui
          consequuntur ducimus minima ipsam ratione sit quaerat deleniti
          perspiciatis. <br /> <br /> ratione eligendi veniam, excepturi
          tenetur? Architecto consequuntur neque vitae cum. Porro cumque
          sapiente nisi tempore fuga nemo omnis nesciunt consequatur! Assumenda
          quaerat dolorum hic dolor beatae, dicta nulla quas. Ea aspernatur
          nobis corporis quisquam laudantium asperiores nulla.
        </p>
      );
    },
  },
];
