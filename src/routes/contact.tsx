import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Download, Globe } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lidia Dobos" },
      {
        name: "description",
        content:
          "Get in touch with Lidia Dobos for graphic design roles, freelance projects, or collaborations. Download CV and portfolio.",
      },
      { property: "og:title", content: "Contact — Lidia Dobos" },
      {
        property: "og:description",
        content:
          "Get in touch with Lidia Dobos for graphic design roles, freelance projects, or collaborations. Download CV and portfolio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "lidiadobos03@gmail.com",
    href: "mailto:lidiadobos03@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+40 740 334 757",
    href: "tel:+40740334757",
  },
  { icon: MapPin, label: "Location", value: "Europe" },
  {
    icon: Globe,
    label: "Websites",
    value: "Clarity Room",
    href: "https://www.clarityroom.co.uk",
  },
];

function Contact() {
  return (
    <section className="container-tight py-20">
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Contact</p>
      <h1 className="mt-2 font-serif text-4xl text-foreground md:text-5xl">Let's work together</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Whether you're hiring for a design role or need support on a freelance project, I'd love to
        hear what you're building.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div className="space-y-8">
          <div className="space-y-6">
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <item.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-medium text-foreground hover:text-primary hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-serif text-xl text-card-foreground">Download CV</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Grab a one-page PDF with my experience, education, and tools.
            </p>
            <Button className="mt-4 w-full" asChild>
              <a href="/cv-lidia-dobos.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-serif text-xl text-card-foreground">Websites</h2>
            <p className="mt-2 text-sm text-muted-foreground">Other projects I'm involved with.</p>
            <div className="mt-4 space-y-2">
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://www.clarityroom.co.uk" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Clarity Room
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://itpex.ro" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  ITPEX
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-serif text-xl text-card-foreground">View work</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              See the projects that best match the role you're hiring for.
            </p>
            <Button variant="outline" className="mt-4 w-full" asChild>
              <Link to="/work">Browse portfolio</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 md:p-8">
          <h2 className="font-serif text-2xl text-card-foreground">Send a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            I'll reply as soon as I can — usually within one business day.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
