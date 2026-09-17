import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, Instagram, Globe } from "lucide-react";

const socialLinks = [
  { href: "mailto:lidiadobos03@gmail.com", icon: Mail, label: "Email" },
  { href: "https://www.linkedin.com/in/lidia-dobos/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/lidiadobos/", icon: Instagram, label: "Instagram" },
];

const websiteLinks = [
  { href: "https://www.clarityroom.co.uk", label: "Clarity Room" },
  { href: "https://itpex.ro", label: "ITPEX" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container-tight flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="space-y-2">
          <Link to="/" className="font-serif text-lg tracking-tight text-foreground">
            Lidia Dobos
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            Graphic designer with 5+ years of experience. Open to full-time roles and
            collaborations.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Websites
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {websiteLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-primary hover:underline"
                >
                  <Globe className="h-3.5 w-3.5" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lidia Dobos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
