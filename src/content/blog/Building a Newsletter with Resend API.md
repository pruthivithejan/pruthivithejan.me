---
title: Building a Newsletter with Resend API
date: 2024-09-16
edited:
image: { src: "/images/blog/Resend.png", alt: "A picture of a coder" }
description: This guide shows developers how to create a newsletter using Resend API. 
draft: false
category: Guides
---

This next section is a part of the first article I published on my newsletter. If you have some time read it or just skip to the coding part. 

If you want to subscribe visit [pruthivithejan.me/newsletter](http://pruthivithejan.me/newsletter) or scroll to the bottom.

## **Why a Newsletter?**

If you are reading this far, you might be wondering why in the heck someone needs a mailing list or a newsletter. Let me break it down for you. Most of the audience on the internet is owned by somebody. For example, if you make a **Facebook** page and gather a following there by creating content, that is owned by Meta Inc. The same goes for **Instagram**, **WhatsApp**, and Threads. As valuable as it seems, emails are owned by nobody. Google owns **Gmail**, and Microsoft owns **Outlook**, but not emails in general. As we all learned back in school, email was created by Raymond Tomlinson and is controlled by a set of protocols like **SMTP** and **POP**.

As for the latest stats I can find on the internet, here is an overview of roughly what happens in every 60 seconds on the internet.

- YouTube Views: 4.3 million views
- Facebook Posts: 500,000 posts
- Instagram Posts: 347,000 posts
- Tweets: 456,000 tweets
- Pinterest Pins: 3,000 pins
- Emails Sent: 187 million emails

As you can see Emails are clearly not a dead medium but we are not using it as much as professionals do. On the other hand, a quality 1000 email readers are worth more than 10,000 followers on any social media platform. So I encourage my fellow ICT undergraduates to start with me and maintain a mailing list. You can use a free medium like [Substack](https://substack.com/) or make a custom newsletter on an email server like me. I'm using [Resend](https://resend.com/) for this newsletter and [Astro](https://astro.build/) on the client side and I'm willing to write a blog article on how I made this very soon. So stay tuned for that. And there are tons of alternatives too. Search and you'll find them.

## Using Resend API to Subscribe

It’s very easy and straightforward to subscribe to contacts in your Resend mailing list.

First Sign in and go to your dashboard.

Then go to **API Keys** and **Create API Key.** Name your API key and give it *Full access* and if you prefer select a *Domain* you have. Copy this key into somewhere safe and by any mean do not share this.

If you are using the free plan, you'll have only one *Domain* and one *Audience*.

Also go into **Audiences** and copy you Audience ID. 

You can use this code snippet from the Documentation for [Create Contact](https://resend.com/docs/api-reference/contacts/create-contact) in API reference. For more examples and programming languages look into the documentation. 

```tsx
import { Resend } from 'resend';

const resend = new Resend('re_123456789');

resend.contacts.create({
  email: 'steve.wozniak@gmail.com',
  firstName: 'Steve',
  lastName: 'Wozniak',
  unsubscribed: false,
  audienceId: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
});
```

It’s very important to read documentations in programming if you’re a beginner. If you want to ChatGPT it better provide the documentation in the prompt. It’ll save you much time in debugging.

I’m going to use `Typescript` with a Framework called `Astro` and a library called for `Svelte` for making the form. If you’re using something else refer to their respected documentation.

If you happen to use the same Tech Stack things will be easier for you.

## Creating the Form

Before creating the form I’m going to create an API route to send the email to the Resend backend on a POST request. 

It’ll be `src/pages/api/sendEmail.json.ts`  . You can name your route whatever you like. 

```tsx
import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
	try {
		const { email } = await request.json();
		console.log(email);
		const send = await resend.contacts.create({
			email,
			firstName: "",
			lastName: "",
			unsubscribed: false,
			audienceId: import.meta.env.RESEND_AUDIENCE_ID,
		});

		if (send.data) {
			return new Response(
				JSON.stringify({ message: "Subscription successful" }),
				{
					status: 200,
					statusText: "OK",
				},
			);
			// biome-ignore lint/style/noUselessElse: <explanation>
		} else {
			return new Response(JSON.stringify({ message: "Subscription failed" }), {
				status: 500,
				statusText: "Error",
			});
		}
	} catch (error) {
		console.error("Error parsing request body:", error);
		return new Response(JSON.stringify({ message: "Invalid request body" }), {
			status: 400,
			statusText: "Bad Request",
		});
	}
};
```

I’ve replaced the API Key and Audience ID with environment variables. It’s mandatory to use `export const prerender = false;` in Astro if you’re using a `hybrid` rendering mode or it will not work. The rest is error handling. The response object in a successful submission should look something like this.

```tsx
{
  "object": "contact",
  "id": "479e3145-dd38-476b-932c-529ceb705947"
}
```

Now it’s time to create the form. I made it change the state after submitting to turn green and spell successful, you can use a toast or whatever you like.

And this is a Svelte component. `newsletter-form.svelte`  and I’ve used TailwindCSS for styling and shadcn-svlete *Input* and *Button* components.

```tsx
<script lang="ts">
import Reload from "svelte-radix/Reload.svelte";
import { Button } from "@/components/ui/button/index";
import { Input } from "@/components/ui/input/index";

let email = "";
let loading = false;
let formStatus = "";

const handleSubmit = async (e) => {
	e.preventDefault();
	loading = true;
	formStatus = "";

	try {
		console.log(email);
		const response = await fetch("/api/sendEmail.json", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
			}),
		});

		if (response.ok) {
			const data = await response.json();
			if (data.message === "Subscription successful") {
				formStatus = "success";
				setTimeout(() => {
					formStatus = "";
				}, 2000);
			} else {
				formStatus = "error";
				setTimeout(() => {
					formStatus = "";
				}, 2000);
			}
		} else {
			formStatus = "error";
			setTimeout(() => {
				formStatus = "";
			}, 2000);
		}
	} catch (err) {
		console.error(err);
		formStatus = "error";
		setTimeout(() => {
			formStatus = "";
		}, 2000);
	} finally {
		loading = false;
		email = "";
	}
};
</script>

<div
  class="glass-container font-body mx-auto flex flex-col justify-center space-y-6 w-[300px] md:w-[350px]"
>
  <div class="bg-neutral-950 p-5 rounded-lg">
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight text-neutral-50">
        Subscribe to Newsletter
      </h1>
      <p class="text-sm text-muted-foreground">
        A Newsletter for Designers, Developers and Humans
      </p>
    </div>
    <div class="grid gap-6 pt-4">
      <form on:submit|preventDefault={handleSubmit}>
        <div class="grid gap-2">
          <div class="grid gap-1">
            <label class="sr-only" for="email">Email</label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autocapitalize="none"
              autocomplete="email"
              autocorrect="off"
              disabled={loading}
              bind:value={email}
              class="dark text-white"
              required
            />
          </div>
          <Button
            type="submit"
            class="dark {formStatus === 'success'
              ? 'bg-green-500'
              : formStatus === 'error'
                ? 'bg-red-500'
                : ''}"
            disabled={loading}
          >
            {#if loading}
              <Reload class="mr-2 h-4 w-4 animate-spin" />
            {/if}
            {#if formStatus === "success"}
              Subscribed Successfully
            {:else if formStatus === "error"}
              Failed To Subscribe
            {:else}
              Subscribe
            {/if}
          </Button>
        </div>
      </form>
    </div>
  </div>
</div>
```

If you’re using React you can try and convert this example into React using an LLM or a framework of your choice. 

The full source code to this and my whole website is available on [GitHub](https://github.com/pruthivithejan/pruthivithejan.me) and I highly encourage you to enter your email below and subscribe for more articles like above.
