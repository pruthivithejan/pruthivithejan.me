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
  class="glass-container mx-auto flex flex-col justify-center space-y-6 w-[300px] md:w-[350px]"
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
