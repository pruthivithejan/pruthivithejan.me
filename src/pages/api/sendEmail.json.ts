import type { APIRoute } from "astro";
import { Resend } from "resend";

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
        }
      );
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
