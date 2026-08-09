import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects information when you contact us or visit the site.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated: August 9, 2026. This policy explains how ${site.name} handles information when you use ${site.domain}.`}
      />

      <section className="pb-24">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-10 text-base leading-relaxed text-muted">
            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">Who we are</h2>
              <p>
                Shopify Service ({site.domain}) is operated by {site.legalName}, based in{" "}
                {site.location}. For privacy questions, email{" "}
                <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                  {site.email}
                </a>
                .
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
              <p>We may collect:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="text-foreground">Contact details</span> you submit through our
                  forms: name, email, company, website, approximate revenue range, and message.
                </li>
                <li>
                  <span className="text-foreground">Booking details</span> if you schedule a call
                  through Calendly or a similar tool.
                </li>
                <li>
                  <span className="text-foreground">Usage data</span> such as pages visited, device
                  type, approximate location, and referral source, via analytics tools (for
                  example Vercel Analytics, Google Analytics, or Meta Pixel) when enabled.
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">How we use information</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Respond to consultation requests and project inquiries</li>
                <li>Schedule and run discovery calls</li>
                <li>Improve the website and measure advertising performance</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>We do not sell your personal information.</p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">Sharing</h2>
              <p>
                We may share information with service providers that help us operate the site and
                communications (for example email delivery, hosting, analytics, and scheduling).
                Those providers process data only to provide their services. We may also disclose
                information if required by law.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">Cookies and ads</h2>
              <p>
                We may use cookies or similar technologies for analytics and advertising
                measurement, including Meta (Facebook/Instagram) and Google, so we can understand
                which campaigns bring visitors and whether contact forms convert. You can control
                cookies through your browser settings and platform ad preferences.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">Retention</h2>
              <p>
                Inquiry emails and related records are kept as long as needed to respond, manage
                potential client relationships, and meet legal or accounting requirements. Analytics
                data follows each provider&apos;s retention settings.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">Your choices</h2>
              <p>
                You can email us to request access, correction, or deletion of personal information
                you have provided, subject to applicable law. If you no longer want marketing
                follow-ups, say so in your reply and we will stop.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">Security</h2>
              <p>
                We use reasonable technical and organizational measures to protect information.
                No method of transmission over the internet is fully secure.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">Updates</h2>
              <p>
                We may update this policy from time to time. The &quot;Last updated&quot; date at
                the top will change when we do. Continued use of the site after updates means you
                accept the revised policy.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">Contact</h2>
              <p>
                Questions about this policy:{" "}
                <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                  {site.email}
                </a>
                {" · "}
                <a href={`tel:${site.phoneHref}`} className="text-accent hover:underline">
                  {site.phone}
                </a>
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
