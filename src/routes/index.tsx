import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImage from "@/assets/hero-phygital.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Phygital — Where Physical Art Meets Web3" },
      {
        name: "description",
        content:
          "Coming soon: a curated marketplace for phygital NFTs that grant verifiable ownership of real, physical works of art.",
      },
      { property: "og:title", content: "Phygital — Where Physical Art Meets Web3" },
      {
        property: "og:description",
        content:
          "Phygital NFTs: one token, one masterpiece. Own the digital twin and the physical artwork it represents.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("You're on the list. Welcome to the future of art.");
      setEmail("");
      setLoading(false);
    }, 600);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient backgrounds */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      />

      {/* Nav */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary shadow-glow" />
          <span className="text-lg font-semibold tracking-tight">PHYGITAL</span>
        </div>
        <span className="rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
          Launching 2026
        </span>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-12 lg:grid-cols-2 lg:pt-20">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary-foreground/90">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Coming Soon
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            One token. <br />
            <span className="text-gradient">One masterpiece.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We're building a curated marketplace for{" "}
            <span className="text-foreground font-medium">phygital NFTs</span> — digital
            certificates on-chain that grant verifiable ownership of a real, physical
            work of art. The token is your title deed; the artwork is yours to display,
            store, or trade.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 flex-1 border-border/60 bg-card/40 text-base backdrop-blur placeholder:text-muted-foreground/60 focus-visible:ring-primary"
            />
            <Button
              type="submit"
              disabled={loading}
              className="h-12 bg-gradient-primary px-8 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] hover:opacity-95"
            >
              {loading ? "Joining..." : "Get Early Access"}
            </Button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">
            Be first to mint. No spam, ever.
          </p>
        </div>

        {/* Visual */}
        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div
            className="absolute inset-0 rounded-3xl opacity-60 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
            aria-hidden
          />
          <div className="relative animate-float overflow-hidden rounded-3xl border border-border/40 shadow-elegant">
            <img
              src={heroImage}
              alt="Iridescent geometric phygital artwork representing the fusion of physical sculpture and digital NFT"
              width={1536}
              height={1536}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-4 py-3 backdrop-blur-xl">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Genesis #001
                </p>
                <p className="text-sm font-semibold">Prism — Sealed Edition</p>
              </div>
              <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary-foreground">
                Phygital
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Verified Ownership",
              body: "Each NFT is cryptographically bound to a single physical artwork. The blockchain is the registry — provenance you can prove.",
            },
            {
              n: "02",
              title: "Physical Delivery",
              body: "Holders can redeem the physical piece at any time, shipped insured worldwide, or keep it secured in our climate-controlled vault.",
            },
            {
              n: "03",
              title: "Trade Seamlessly",
              body: "Sell the token, transfer the artwork. The phygital link travels with the NFT — no paperwork, no friction.",
            },
          ].map((f) => (
            <div
              key={f.n}
              className="group rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur transition-all hover:border-primary/40 hover:shadow-glow"
            >
              <span className="text-sm font-mono text-primary">{f.n}</span>
              <h3 className="mt-3 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-border/40 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Phygital. All rights reserved.</p>
          <p>Crafted for collectors of the physical and the digital.</p>
        </div>
      </footer>

      <Toaster />
    </main>
  );
}
