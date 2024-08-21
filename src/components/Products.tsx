import ButtonWithIcon from "./ButtonWithIcon";

const Products = () => {
  return (
    <section className="mb-12">
      <h2 className="text-center text-[1.7rem] font-semibold mb-3">Products</h2>
      <div className="flex flex-col gap-4">
        <ButtonWithIcon
          href="https://matejbendik.gumroad.com/"
          name="Gumroad"
          icon="gumroad.webp"
          followers_count={6}
        />
        <ButtonWithIcon
          href="https://www.producthunt.com/@bendikmatej"
          name="Product Hunt"
          icon="producthunt.webp"
          followers_count={2}
        />
      </div>
    </section>
  );
};

export default Products;
