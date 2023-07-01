const Button = (props: { href: string; name: string }) => {
  const { href, name } = props;

  return (
    <a
      type="button"
      className="w-full block text-center min-w-fit border-2 px-4 tracking-normal py-2 text-xl rounded-lg border-cyan-500 hover:bg-slate-200 transition duration-300"
      href={href}
      target="_blank"
    >
      {name}
    </a>
  );
};

export default Button;
