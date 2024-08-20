import ButtonWithIcon from "./ButtonWithIcon";

const socials = [
  {
    href: "https://twitter.com/bendikmatej",
    name: "𝕏",
    icon: "x.webp",
    followers_count: 14816,
  },
  {
    href: "https://www.threads.net/@matejbendik",
    name: "Threads",
    icon: "threads.webp",
    followers_count: 757,
  },
  {
    href: "https://www.linkedin.com/in/matejbendik/",
    name: "linkedIn",
    icon: "linkedin.webp",
    followers_count: 329,
  },
  {
    href: "https://www.github.com/MatejBendik",
    name: "GitHub",
    icon: "github.webp",
    followers_count: 322,
  },
  {
    href: "https://www.instagram.com/matejbendik",
    name: "Instagram",
    icon: "instagram.webp",
    followers_count: 1869,
  },
];

const Socials = () => {
  return (
    <section className="mb-12">
      <h2 className="text-center text-[1.7rem] font-semibold mb-3">Socials</h2>
      <div className="flex flex-col gap-4">
        {socials.map((social) => (
          <ButtonWithIcon
            href={social.href}
            name={social.name}
            icon={social.icon}
            followers_count={social.followers_count}
          />
        ))}
      </div>
    </section>
  );
};

export default Socials;
