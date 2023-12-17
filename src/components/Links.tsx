import Link from "../components/Link.astro";

const Items = [
  {
    href: "https://github.com/pruthivithejan",
    icon: "mdi:github",
  },
  {
    href: "https://lk.linkedin.com/in/pruthivithejan",
    icon: "mdi:linkedin",
  },
  {
    href: "https://x.com/pruthivithejan",
    icon: "akar-icons:x-fill",
  },
  {
    href: "https://www.threads.net/@pruthivithejan",
    icon: "bi:threads",
  },
  {
    href: "https://www.instagram.com/pruthivithejan/",
    icon: "mdi:instagram",
  },
  {
    href: "https://www.reddit.com/user/pruthivithejan/",
    icon: "simple-icons:reddit",
  },
];

function Links() {
  {
    Items.map((link) => {
      return (
        <Link
          target="_blank"
          href={link.href}
          classes="text-neutral-950 rounded-md bg-neutral-100 border border-neutral-500 p-3"
          icon={{
            name: "simple-icons:reddit",
            side: "right",
            height: "32",
            width: "32",
          }}
        />
      );
    });
  }
}

export default Links;
