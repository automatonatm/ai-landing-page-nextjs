"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "How do I create an account?",
    answer:
      "Create an account by clicking on the sign up button on the login screen. Follow the instructions provided.",
  },
  {
    question: "What are the available premium features?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim doloribus totam sequi debitis ipsa voluptatum delectus laboriosam porro, expedita veniam a rem quibusdam, molestias voluptatem quasi quae, soluta nobis? Sit!",
  },
  {
    question: "How do I change my password?",
    answer:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim doloribus totam sequi debitis ipsa voluptatum delectus laboriosam porro, expedita veniam a rem quibusdam, molestias voluptatem quasi quae, soluta nobis? Sit!",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on the forgot password button on the login screen and follow the instructions provided.",
  },
];

interface AccordionProps {
  question: string;
  answer: string;
}

const AccordionItem = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-white/30 py-5 text-white">
      <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <span className="flex-1 text-lg font-bold">{question}</span>

        {isOpen ? (
          <Image
            src="/assets/icons/minus.svg"
            alt="minus"
            width={24}
            height={24}
          />
        ) : (
          <Image
            src="/assets/icons/plus.svg"
            alt="plus"
            width={24}
            height={24}
          />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: "16px",
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
           
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="faq-gradient py-[72px] sm:py-24">
      <div className="container">
        <div className="mx-auto flex max-w-[648px] flex-col gap-10 lg:max-w-[675px]">
          <h2 className="sm:h2-bold text-center text-[32px] font-semibold leading-10 text-white">
            Frequently asked questions
          </h2>

          <div className="">
            {items.map(({ question, answer }, index) => (
              <AccordionItem question={question} answer={answer} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
