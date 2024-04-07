<script lang="ts">
  import { onMount } from "svelte";
  import Reload from "svelte-radix/Reload.svelte";
  import { Button } from "@/components/ui/button/index";
  import { toast } from "svelte-sonner";

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
          toast("Subscription successful", {
            description: "You have been subscribed to the newsletter.",
          });
        } else {
          formStatus = "error";
          toast("Subscription failed", {
            description:
              "There was an error subscribing you to the newsletter.",
          });
        }
      } else {
        formStatus = "error";
        toast("Subscription failed", {
          description: "There was an error subscribing you to the newsletter.",
        });
      }
    } catch (err) {
      console.error(err);
      formStatus = "error";
      toast("Subscription failed", {
        description: "There was an error subscribing you to the newsletter.",
      });
    } finally {
      loading = false;
    }
  };

  // Log any errors during component initialization
  onMount(() => {
    window.onerror = function (msg, url, lineNo, columnNo, error) {
      console.error(
        "Error occurred:",
        msg,
        "URL:",
        url,
        "Line:",
        lineNo,
        "Column:",
        columnNo,
        "Error object:",
        error
      );
    };
  });
</script>

<form on:submit={handleSubmit}>
  <div class="overflow-hidden py-16 sm:py-24 lg:py-32">
    <div
      class="max-w-2xl gap-x-8 gap-y-16 lg:max-w-none flex place-content-center mx-auto"
    >
      <div class="max-w-xl lg:max-w-lg">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Subscribe to my Newsletter.
        </h2>
        <p class="mt-4 text-lg leading-8 text-gray-300">
          A Newsletter for Designers, Developers and Humans.
        </p>
        <div class="mt-6 flex max-w-md gap-x-4">
          <label for="email-address" class="sr-only"> Email address </label>
          <input
            name="email"
            type="email"
            autocomplete="email"
            required
            class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-neutral-500 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
            bind:value={email}
          />
          <Button
            type="submit"
            class="flex-none rounded-md bg-neutral-200 px-3.5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:neutral-indigo-500"
          >
            {#if loading}
              <Reload class="mr-2 h-4 w-4 animate-spin" />
            {/if}
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  </div>
</form>
