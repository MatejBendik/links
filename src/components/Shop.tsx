import ButtonWithIcon from "./ButtonWithIcon";

const Shop = () => {
  return (
    <section className="mb-12">
      <h2 className="text-center text-[1.7rem] font-semibold mb-3">Shop</h2>
      <div className="flex flex-col gap-4">
        <ButtonWithIcon
          href="https://matejbendik.gumroad.com/"
          name="Gumroad"
          icon="gumroad.webp"
          followers_count={3}
        />
      </div>
    </section>
  );
};

export default Shop;
