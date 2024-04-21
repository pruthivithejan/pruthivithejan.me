<script lang="ts">
  import Reload from "svelte-radix/Reload.svelte";
  import { Button } from "@/components/ui/button/index";
  import { Input } from "@/components/ui/input/index";
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
</script>

<div
  class="glass-container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
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
    <div class="grid gap-6">
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
              required
            />
          </div>
          <Button type="submit" disabled={loading}>
            {#if loading}
              <Reload class="mr-2 h-4 w-4 animate-spin" />
            {/if}
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  </div>
</div>
