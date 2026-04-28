import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coming Soon — Phygital NFTs" },
      {
        name: "description",
        content:
          "Coming soon: phygital NFTs representing verifiable ownership of physical works of art. Inquiries: admin@ars.business",
      },
      { property: "og:title", content: "Coming Soon — Phygital NFTs" },
      {
        property: "og:description",
        content:
          "A web3 marketplace where each NFT represents ownership of a real, physical work of art.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-foreground">
      <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="text-xs font-medium uppercase tracking-[0.4em] text-brand-teal">
          <span className="text-brand-red">Phygital</span>
          <span className="text-brand-charcoal"> · </span>
          <span className="text-brand-blue">Web3</span>
        </p>

        <h1 className="mt-8 text-6xl font-light leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">
          <span className="text-brand-red">Coming</span>
          <br />
          <span className="text-brand-blue">Soon</span>
        </h1>

        <p className="mt-10 max-w-md text-base leading-relaxed text-brand-charcoal md:text-lg">
          A web3 marketplace for{" "}
          <span className="font-medium text-brand-teal">phygital NFTs</span> —
          each token represents{" "}
          <span className="font-medium text-brand-blue">verifiable ownership</span>{" "}
          of a real,{" "}
          <span className="font-medium text-brand-red">physical work of art</span>.
        </p>

        <div className="mt-14 flex flex-col items-center gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-teal">
            Inquiries
          </p>
          <a
            href="mailto:admin@ars.business"
            className="text-lg font-medium text-brand-red underline-offset-8 transition-opacity hover:underline hover:opacity-80 md:text-xl"
          >
            admin@ars.business
          </a>
        </div>
      </section>

      <footer className="absolute bottom-6 text-xs tracking-widest text-muted-foreground">
        © 2026 objet d’autonomie
      </footer>
    </main>
  );
}
