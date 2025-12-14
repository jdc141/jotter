import Link from "next/link";
import { CalendarDays, BarChart3, Target, ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-dust text-charcoal">
      <Nav />

      {/* Hero */}
      <section className="px-6 pt-24 pb-32 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
          Write it down.
          <br />
          <span className="text-dim">Keep it simple.</span>
        </h1>
        <p className="mt-6 text-lg text-dim max-w-md mx-auto">
          One line a day. Track what matters. That&apos;s it.
        </p>
        <div className="mt-10">
          <Link
            href="/login"
            className="inline-flex items-center justify-center gap-2 bg-charcoal text-dust px-6 py-3 rounded-lg font-medium hover:bg-dim transition-colors"
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Preview */}
      <section className="px-6 max-w-4xl mx-auto">
        <div className="bg-almond/50 rounded-2xl border border-almond p-8 aspect-video flex items-center justify-center">
          <span className="text-dim text-sm">App preview</span>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-32 max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-12">
          <Feature
            icon={<CalendarDays className="w-5 h-5" />}
            title="Daily journal"
            description="Just a few words. Enough to remember, not enough to overthink."
          />
          <Feature
            icon={<BarChart3 className="w-5 h-5" />}
            title="Your stats"
            description="Sleep, mood, water, whatever. You decide what to track."
          />
          <Feature
            icon={<Target className="w-5 h-5" />}
            title="Monthly goals"
            description="Set a few intentions. Check them off. Feel good."
          />
        </div>
      </section>

      {/* Simple pitch */}
      <section className="px-6 pb-32 max-w-xl mx-auto text-center">
        <p className="text-dim leading-relaxed">
          Most apps try to do too much. Jotter doesn&apos;t. 
          It's a notebook that fits in your pocket and stays out of your way.
        </p>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-32 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Ready?
        </h2>
        <p className="mt-2 text-dim">Free. No credit card. No nonsense.</p>
        <Link
          href="/login"
          className="mt-6 inline-flex items-center gap-2 bg-charcoal text-dust px-6 py-3 rounded-lg font-medium hover:bg-dim transition-colors"
        >
          Start writing
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-almond text-center text-sm text-dim">
        <p>© {new Date().getFullYear()} Jotter</p>
      </footer>
    </div>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-10 h-10 bg-almond/50 rounded-lg text-charcoal mb-4">
        {icon}
      </div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-dim text-sm leading-relaxed">{description}</p>
    </div>
  );
}