"use client";

import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="relative z-[100] mt-9 space-y-4 text-left">
      {faqs.map((faq, index) => {
        const open = openIndex === index;

        return (
          <div
            key={faq.question}
            className="relative z-[100] rounded-[10px] border border-[#c9d2d9] bg-white p-6"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-[16px] font-medium leading-6 text-[#2e3138]"
              aria-expanded={open}
            >
              <span>{faq.question}</span>
              <span className="grid size-8 shrink-0 place-items-center rounded-[4px] bg-coral text-[22px] font-medium leading-none text-white">
                {open ? "-" : "+"}
              </span>
            </button>
            {open ? (
              <p className="mt-2 text-[16px] leading-6 text-[#5e6573]">
                {faq.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
