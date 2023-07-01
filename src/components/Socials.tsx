import ButtonWithIcon from "./ButtonWithIcon";

const Socials = () => {
  return (
    <section className="mb-12">
      <h2 className="text-center text-[1.7rem] font-semibold mb-3">Socials</h2>
      <div className="flex flex-col gap-4">
        <ButtonWithIcon
          href="https://twitter.com/BendikMatej"
          name="Twitter"
          icon="twitter.webp"
          followers_count={12109}
        />
        <ButtonWithIcon
          href="https://www.linkedin.com/in/matejbendik/"
          name="linkedIn"
          icon="linkedin.webp"
          followers_count={269}
        />
        <ButtonWithIcon
          href="https://www.github.com/MatejBendik"
          name="GitHub"
          icon="github.webp"
          followers_count={217}
        />
        <ButtonWithIcon
          href="https://www.instagram.com/matejbendik"
          name="Instagram"
          icon="instagram.webp"
          followers_count={1869}
        />
      </div>
    </section>
  );
};

export default Socials;
