import { SelectedPage } from '@/shared/types';
import React from 'react';
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import useMediaQuery from '@/hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-10 md:min-h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto mt-5 w-5/6 md:flex md:h-5/6 md:items-center md:justify-center"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <div className="md:-mt-20">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext ">
                <img src={HomePageText} alt="home-page-text" />
              </div>
              <p>
                Unrivaled Gym. Unparalleled Training Fitness Classes. World
                Class Studios to get the Body Shapes That you Dream of..Get Your
                Dream Body Now.
              </p>
            </motion.div>
            {/* ACTIONS */}
            <motion.div
              className="mt-8 flex items-center gap-8 md:justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink
                className="hover: font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                Learn More
              </AnchorLink>
            </motion.div>
          </div>
        </div>
        {/* IMAGE */}
        <div
          className="md:jml-40 flex basis-3/5 justify-center
              md:z-10 md:mt-16 md:justify-end"
        >
          <img src={HomePageGraphic} alt="home-pageGraphic" />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="mt-20 h-[150px] w-full bg-primary-100 py-10 ">
          <div className="mx-auto w-5/6">
            <div
              className="mx-auto flex w-3/5 items-center justify-between
            gap-8
            "
            >
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
