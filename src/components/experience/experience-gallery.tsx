"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/lib/experiences";

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d={direction === "left" ? "M11 4 6 9l5 5M6.8 9H14" : "m7 4 5 5-5 5M11.2 9H4"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function GalleryArrow({
  direction,
  onClick,
  label,
}: {
  direction: "left" | "right";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="grid size-[38px] place-items-center rounded-full bg-coral text-white shadow-[0_8px_16px_rgba(15,31,28,0.12)] transition-colors hover:bg-[#dc5f4e]"
      aria-label={label}
    >
      <ArrowIcon direction={direction} />
    </button>
  );
}

export function ExperienceGallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const activeImage = images[activeIndex] ?? images[0];

  function move(direction: -1 | 1) {
    setActiveIndex((current) => (current + direction + images.length) % images.length);
  }

  if (!activeImage) return null;

  return (
    <>
      <div className="grid h-full gap-3 lg:grid-rows-[1fr_auto]">
        <div className="relative min-h-[310px] overflow-hidden rounded-[8px] bg-cream shadow-[0_10px_34px_rgba(15,31,28,0.08)] lg:min-h-0">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="absolute inset-0 z-10 cursor-zoom-in"
            aria-label="Open image gallery"
          />
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-y-0 left-4 z-20 flex items-center">
            <GalleryArrow direction="left" onClick={() => move(-1)} label="Show previous gallery image" />
          </div>
          <div className="absolute inset-y-0 right-4 z-20 flex items-center">
            <GalleryArrow direction="right" onClick={() => move(1)} label="Show next gallery image" />
          </div>
        </div>
        <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max min-w-full justify-center gap-3">
            {images.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show gallery image ${index + 1}`}
                className={`relative h-[92px] w-[118px] shrink-0 overflow-hidden rounded-[6px] border-2 transition ${
                  index === activeIndex ? "border-coral" : "border-transparent opacity-80"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="118px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      {isOpen ? (
        <div
          className="fixed inset-0 z-50 bg-[rgba(17,62,60,0.92)] px-5 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Experience image gallery"
        >
          <div className="mx-auto flex h-full max-w-[1100px] flex-col">
            <div className="mb-4 flex items-center justify-between gap-4 text-white">
              <p className="text-[14px] font-bold leading-5">
                {activeIndex + 1} / {images.length}
              </p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-[6px] border border-white/40 px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Close
              </button>
            </div>
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-[10px] bg-black/20">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <div className="absolute inset-y-0 left-4 flex items-center">
                <GalleryArrow direction="left" onClick={() => move(-1)} label="Show previous gallery image" />
              </div>
              <div className="absolute inset-y-0 right-4 flex items-center">
                <GalleryArrow direction="right" onClick={() => move(1)} label="Show next gallery image" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
