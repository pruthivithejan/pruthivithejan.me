import { useState } from "react";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function Newsletter() {
  const externalId = "LK_" + Date.now();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setFormStatus("");

    fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Api-Key": import.meta.env.PUBLIC_BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        ext_id: externalId,
        attributes: { FNAME: "", LNAME: "" },
        emailBlacklisted: false,
        smsBlacklisted: false,
        listIds: [36],
        updateEnabled: false,
        smtpBlacklistSender: ["user@example.com"],
      }),
    })
      .then((res) => res.json())
      .then((response) => console.log(response))
      .then((data) => {
        setLoading(false);
        setFormStatus("success");
      })
      .catch(() => {
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
                Subscribe &nbsp;
                {formStatus === "success" && (
                  <span className="text-green-500">Successful</span>
                )}
                {formStatus === "error" && (
                  <span className="text-red-500">Fail</span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Newsletter;
