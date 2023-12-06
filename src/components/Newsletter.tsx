import { useEffect, useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Api-Key":
          "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",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        ext_id: "externalId",
        attributes: { FNAME: "", LNAME: "" },
        emailBlacklisted: false,
        smsBlacklisted: false,
        listIds: [36],
        updateEnabled: false,
        smtpBlacklistSender: ["user@example.com"],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
              <button
                type="submit"
                className="flex-none rounded-md bg-neutral-200 px-3.5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:neutral-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Newsletter;
