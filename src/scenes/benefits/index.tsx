import { BenefitType, SelectedPage } from '@/shared/types';
import React from 'react';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'State of the Art Facilities',
    description:
      'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim',
  },

  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim',
  },

  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Expert and Pro Trainers',
    description:
      'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member
          </p>
        </div>
        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
      {/* GRAPHICS AND DESCRIPTION */}
      <div className="mt-14 items-center justify-between md:mt-24 md:flex">
        {/* GRAPHIC */}
        <img
          className="mx-auto"
          src={BenefitsPageGraphic}
          alt="benefits-page-graphic"
        />

        {/* DESCRIPTION */}
        <div>
          {/* TITLE */}
          <div className="relative">
            <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{' '}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
            </div>
          </div>
          {/* DESCRIPT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delaly: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="my-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              qui, animi quisquam iste explicabo reprehenderit odio quae
              laboriosam neque vel rem. Voluptates, recusandae impedit
              accusantium magnam est cumque obcaecati architecto!
            </p>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              atque ipsa vero, quia repudiandae molestias earum accusantium
              ullam maxime, officiis obcaecati tempore architecto eligendi! Nam
              repellat explicabo laudantium. Vero, vitae?
            </p>
          </motion.div>
          {/* BUTTON */}
          <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delaly: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
