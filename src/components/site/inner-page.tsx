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
  children,
}: {
  overline: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  aside?: React.ReactNode;
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
}: {
  title: string;
  body: string;
  primaryHref?: string;
}) {
  return (
    <section className="px-5 py-[60px] sm:px-8 lg:px-0">
      <div className="relative mx-auto overflow-hidden rounded-[12px] bg-teal px-7 py-10 sm:px-12">
        <Image
          src="/assets/figma/map-coral-final.svg"
          alt="Coral silhouette map of Zanzibar"
          width={156}
          height={305}
          className="pointer-events-none absolute right-8 top-8 hidden w-[138px] opacity-90 md:block"
        />
        <div className="relative max-w-[620px]">
          <SectionLabel>Enquiries</SectionLabel>
          <h2 className="type-h2 mt-5 max-w-[560px] text-white">
            {title}
          </h2>
          <p className="type-small mt-[22px] text-[#d7f4ee]">
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
