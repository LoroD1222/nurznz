"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Trip } from "@/lib/trips";

const defaultIntro =
  "Choose from marine, culture, nature and coastal experiences with practical timings and clear partner-ready details.";

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

export function ActivityRail({
  activities,
  intro = defaultIntro,
}: {
  activities: Trip[];
  intro?: string | null;
}) {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: -1 | 1) {
    railRef.current?.scrollBy({
      left: direction * 330,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="edge-carousel-shell mt-[30px] overflow-hidden">
        <div
          ref={railRef}
          className="edge-carousel-padding flex gap-[17px] overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {activities.map((activity, index) => (
            <Link
              key={`${activity.title}-${index}`}
              href={activity.href}
              className="relative w-[292px] shrink-0 rounded-[11px] border border-[rgba(17,62,60,0.08)] bg-cream p-3 text-left shadow-[0_2px_26px_0_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-1 sm:w-[300px]"
            >
              <div className="relative h-[168px] overflow-hidden rounded-[7px] sm:h-[174px]">
                <Image
                  src={activity.image}
                  alt={activity.alt}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
                <span
                  className={`absolute right-3 top-[9px] flex h-7 min-w-[62px] items-center justify-center rounded-full px-3 text-[12px] font-bold leading-4 ${activity.durationClass ?? "bg-coral text-white"}`}
                >
                  {activity.duration}
                </span>
              </div>
              <p className="mt-3 text-[14px] font-bold uppercase leading-5 tracking-[3px] text-coral">
                {activity.category}
              </p>
              <h3 className="mt-1 text-[24px] font-extrabold leading-[29px] text-teal-deep">
                {activity.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`mx-auto mt-[26px] flex max-w-[1234px] flex-col items-center gap-5 sm:flex-row sm:items-end ${
          intro ? "sm:justify-between" : "sm:justify-center"
        }`}
      >
        {intro ? (
          <p className="max-w-[688px] text-[17px] leading-[26px] text-[rgba(12,51,49,0.76)]">
            {intro}
          </p>
        ) : (
          <span />
        )}
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
