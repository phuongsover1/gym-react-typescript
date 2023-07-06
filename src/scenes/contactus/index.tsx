import { SelectedPage } from '@/shared/types';
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import HText from '@/shared/HText';

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefautl();
    }
    e.preventDefautl();
  };
  return (
    <section
      id={`${SelectedPage.ContactUs}`}
      className="mx-auto w-5/6 pb-32 pt-24"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5"
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            est autem quaerat voluptates, ex reiciendis sapiente totam non
            aliquam ipsum aut impedit modi similique, velit consequatur
            praesentium ab at cum?
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/b861c96c7ebb863e15694e7ddb2fb820"
              method="POST"
            >
              <input
                className={`${inputStyles}`}
                type="text"
                placeholder="NAME"
                {...register('name', {
                  required: true,
                  maxLength: 8,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === 'required' && 'This field is required'}
                  {errors.name.type === 'maxLength' &&
                    'Max length is 8 characters'}
                </p>
              )}

              <input
                className={`${inputStyles} mt-5`}
                type="email"
                placeholder="EMAIL"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === 'required' && 'This field is required'}
                  {errors.email.type === 'pattern' &&
                    'Email is not a valid format'}
                </p>
              )}

              <textarea
                className={`${inputStyles} mt-5`}
                cols={50}
                rows={4}
                placeholder="MESSAGE"
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === 'required' && 'This field is required'}
                  {errors.email.type === 'maxLength' &&
                    'Max length of a message is 2000 characters'}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          {/* IMAGE */}
          <motion.div className="relative mt-16 basis-2/5 md:mt-0">
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
