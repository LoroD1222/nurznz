import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { Button } from "@/components/ui/button";
import { SectionLabel, SiteFooter, SiteHeader } from "@/components/home/home-page";

export type PageCard = {
  id?: string;
  title: string;
  eyebrow: string;
  body: string;
  image: string;
  alt: string;
};

export function InnerPageShell({
  overline,
  title,
  description,
  image,
  imageAlt,
  aside,
  proofs,
  children,
}: {
  overline: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  aside?: React.ReactNode;
  proofs?: string[];
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white">
      <SiteHeader />
      <section className="relative overflow-hidden bg-teal px-5 py-16 sm:px-8 lg:px-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[rgba(17,62,60,0.58)]" />
        <div className="relative mx-auto grid max-w-[1136px] gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <SectionLabel>{overline}</SectionLabel>
            <h1 className="type-display mt-5 max-w-[760px] text-white">
              {title}
            </h1>
            <p className="mt-5 max-w-[680px] text-[18px] font-medium leading-8 text-white/80 sm:text-[20px]">
              {description}
            </p>
            {proofs?.length ? (
              <div className="mt-[30px] flex max-w-[720px] flex-wrap gap-3">
                {proofs.map((proof) => (
                  <span
                    key={proof}
                    className="rounded-full border border-white/20 bg-white/5 px-5 py-[9px] text-[13px] font-semibold leading-[18px] text-white shadow-[0_8px_9px_rgba(0,0,0,0.06)] backdrop-blur"
                  >
                    {proof}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          {aside ? <div className="relative hidden lg:block">{aside}</div> : null}
        </div>
      </section>
      {children}
      <SiteFooter />
    </main>
  );
}

export function CardGrid({ cards }: { cards: PageCard[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <article
          key={card.title}
          id={card.id}
          className="rounded-[11px] border border-[rgba(17,62,60,0.08)] bg-cream p-[9px] shadow-[0_2px_26px_0_rgba(0,0,0,0.04)]"
        >
          <div className="relative h-[172px] overflow-hidden rounded-[7px]">
            <Image
              src={card.image}
              alt={card.alt}
              fill
              sizes="(min-width: 1280px) 265px, (min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-[13px] font-bold uppercase leading-5 tracking-[3px] text-coral">
            {card.eyebrow}
          </p>
          <h2 className="type-h3 mt-1 text-teal-deep">
            {card.title}
          </h2>
          <p className="type-small mt-3 text-muted-copy">
            {card.body}
          </p>
        </article>
      ))}
    </div>
  );
}

export function CtaBand({
  title,
  body,
  primaryHref = "/contact",
  image = "/assets/figma/cta-boat.png",
  imageAlt = "Guests and a local guide on a Zanzibar boat activity",
}: {
  title: string;
  body: string;
  primaryHref?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="px-5 py-[60px] sm:px-8 lg:px-0">
      <div className="relative mx-auto min-h-[422px] max-w-[1136px] overflow-hidden rounded-[12px] bg-teal shadow-[0_4px_17px_0_rgba(0,0,0,0.1)]">
        <div
          className="absolute inset-y-0 right-0 hidden w-[58%] overflow-hidden md:block"
          style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 660px, 100vw"
            loading="eager"
            className="object-cover"
          />
        </div>
        <Image
          src="/assets/figma/map-coral-final.svg"
          alt="Coral silhouette map of Zanzibar"
          width={156}
          height={305}
          className="pointer-events-none absolute left-[38%] top-[86px] z-10 hidden w-[156px] opacity-95 md:block"
        />
        <div className="relative z-10 flex min-h-[422px] max-w-[500px] flex-col justify-center px-7 py-10 sm:px-12">
          <SectionLabel>Activity Catalogue</SectionLabel>
          <h2 className="mt-5 max-w-[451px] text-[34px] font-extrabold leading-[42px] text-white sm:text-[38px] sm:leading-[44px]">
            {title}
          </h2>
          <p className="mt-[22px] max-w-[395px] text-[16px] leading-[25px] text-[#d7f4ee]">
            {body}
          </p>
          <div className="mt-[30px] flex flex-wrap gap-[17px]">
            <Button asChild size="wide">
              <Link href={primaryHref}>Send enquiry</Link>
            </Button>
            <Button asChild variant="secondary-dark">
              <Link href="/experience">Open Trips</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
