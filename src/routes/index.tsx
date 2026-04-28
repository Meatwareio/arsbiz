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
          Phygital · Web3
        </p>

        <h1 className="mt-8 text-6xl font-light leading-[0.95] tracking-tight text-brand-red md:text-8xl lg:text-9xl">
          Coming
          <br />
          Soon
        </h1>

        <p className="mt-10 max-w-md text-base leading-relaxed text-brand-blue md:text-lg">
          A web3 marketplace for phygital NFTs — each token represents
          verifiable ownership of a real, physical work of art.
        </p>

        <div className="mt-14 flex flex-col items-center gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-charcoal">
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
