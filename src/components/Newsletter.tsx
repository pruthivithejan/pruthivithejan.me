import { useState } from "react";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { Resend } from "resend";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setFormStatus("");

    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    resend.contacts
      .create({
        email: email,
        firstName: "",
        lastName: "",
        unsubscribed: false,
        audienceId: import.meta.env.RESEND_AUDIENCE_ID,
      })
      .then(() => {
        setLoading(false);
        setFormStatus("success");
      })
      .catch((err) => {
        const error = new Error(err.message);
        console.log(error);
        setLoading(false);
        setFormStatus("error");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="max-w-2xl gap-x-8 gap-y-16 lg:max-w-none flex place-content-center mx-auto">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to my newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              A Newsletter for Developers, Designers and Humans.
            </p>

            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-neutral-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Button
                type="submit"
                className="flex-none rounded-md bg-neutral-200 px-3.5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:neutral-indigo-500"
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Subscribe
                {formStatus === "success" &&
                  toast("Event has been created", {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  })}
                {formStatus === "error" &&
                  toast("Event has been created", {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo"),
                    },
                  })}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Newsletter;
