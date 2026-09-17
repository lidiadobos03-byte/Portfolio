import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckCircle2 } from "lucide-react";

// NOTE ON HOW THIS SUBMITS:
// There's no backend wired up for this form yet, so on submit it opens the
// visitor's own email client with a pre-filled message addressed to you
// (via a mailto: link) rather than silently doing nothing. This works with
// zero infrastructure, but it does depend on the visitor having a desktop
// mail client configured — it won't do anything visible on a phone/browser
// with no mail app set up.
//
// For a more reliable inbox (works on every device, lands directly in your
// inbox, no mail client required), swap the onSubmit body below for a call
// to a form backend such as Formspree, or a TanStack Start server function
// that sends via an email API (Resend, Postmark, etc).
const RECIPIENT_EMAIL = "lidiadobos03@gmail.com";

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Please add a short subject."),
  message: z.string().trim().min(10, "Message should be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (values: ContactFormValues) => {
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
      values.subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary" />
        <h3 className="mt-4 font-serif text-2xl text-card-foreground">Almost there</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Your email app should have opened with the message ready to send. If nothing opened,
          you can email me directly at{" "}
          <a href={`mailto:${RECIPIENT_EMAIL}`} className="font-medium text-foreground underline">
            {RECIPIENT_EMAIL}
          </a>
          .
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            form.reset();
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Project enquiry, job opportunity..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project or role."
                  rows={6}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full sm:w-auto">
          Send message
        </Button>
      </form>
    </Form>
  );
}
