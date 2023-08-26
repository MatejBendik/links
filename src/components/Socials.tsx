import ButtonWithIcon from "./ButtonWithIcon";

const socials = [
  {
    href: "https://twitter.com/BendikMatej",
    name: "𝕏",
    icon: "x.webp",
    followers_count: 13893,
  },
  {
    href: "https://www.linkedin.com/in/matejbendik/",
    name: "linkedIn",
    icon: "linkedin.webp",
    followers_count: 294,
  },
  {
    href: "https://www.github.com/MatejBendik",
    name: "GitHub",
    icon: "github.webp",
    followers_count: 316,
  },
  {
    href: "https://www.producthunt.com/@bendikmatej",
    name: "Product Hunt",
    icon: "producthunt.webp",
    followers_count: 1,
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
