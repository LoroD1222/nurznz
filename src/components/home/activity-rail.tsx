"use client";

import { useRef } from "react";
import Image from "next/image";

type Activity = {
  title: string;
  category: string;
  duration: string;
  durationClass: string;
  image: string;
  alt: string;
};

function ArrowLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M11 4 6 9l5 5M6.8 9H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="m7 4 5 5-5 5M11.2 9H4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ActivityRail({ activities }: { activities: Activity[] }) {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: -1 | 1) {
    railRef.current?.scrollBy({
      left: direction * 326,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div
        ref={railRef}
        className="mt-[30px] flex snap-x gap-[17px] overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {activities.map((activity, index) => (
          <article
            key={`${activity.title}-${index}`}
            className={`relative w-[289px] shrink-0 snap-start rounded-[11px] border border-[rgba(17,62,60,0.08)] bg-cream p-[9px] shadow-[0_2px_26px_0_rgba(0,0,0,0.04)] ${
              index === 3 ? "opacity-35" : ""
            }`}
          >
            <div className="relative h-[162px] overflow-hidden rounded-[7px]">
              <Image
                src={activity.image}
                alt={activity.alt}
                fill
                sizes="289px"
                className="object-cover"
              />
              <span
                className={`absolute right-3 top-[9px] flex h-7 min-w-[62px] items-center justify-center rounded-full px-3 text-[12px] font-bold leading-4 ${activity.durationClass}`}
              >
                {activity.duration}
              </span>
            </div>
            <p className="mt-2 text-[15px] font-bold uppercase leading-[29px] tracking-[3px] text-coral">
              {activity.category}
            </p>
            <h3 className="text-[25px] font-extrabold leading-[29px] text-teal-deep">
              {activity.title}
            </h3>
          </article>
        ))}
      </div>
      <div className="mt-[26px] flex items-end justify-between gap-8">
        <p className="max-w-[688px] text-[17px] leading-[26px] text-[rgba(12,51,49,0.76)]">
          The Home page should show breadth quickly. This rail can scroll
          horizontally and expose more than four products without making the
          section feel heavy.
        </p>
        <div className="flex gap-[15px] pb-[5px]">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="grid size-[38px] place-items-center rounded-full bg-coral text-white transition-colors hover:bg-[#dc5f4e]"
            aria-label="Scroll activities left"
          >
            <ArrowLeftIcon />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="grid size-[38px] place-items-center rounded-full bg-coral text-white transition-colors hover:bg-[#dc5f4e]"
            aria-label="Scroll activities right"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </>
  );
}
