const formatNumber = (num: number): string => {
  if (num < 1000) {
    return num.toString();
  }

  const suffixes = ["", "K", "M", "B", "T"];
  const suffixNum = Math.floor(("" + num).length / 3);

  let shortNum = parseFloat(
    (suffixNum !== 0 ? num / Math.pow(1000, suffixNum) : num).toPrecision(2)
  );
  if (shortNum % 1 !== 0) {
    shortNum = Number(shortNum.toFixed(1));
  }
  return shortNum + suffixes[suffixNum];
};

const ButtonWithIcon = (props: {
  href: string;
  name: string;
  icon: string;
  followers_count: number;
}) => {
  const { href, name, icon, followers_count } = props;

  return (
    <a
      type="button"
      className="w-full block min-w-fit border-2 tracking-normal rounded-lg border-cyan-500 hover:bg-slate-200 transition duration-300"
      href={href}
      target="_blank"
    >
      <div className="flex flex-row py-2 px-4 items-center">
        <div>
          <img
            src={`./icons/${icon}`}
            alt={name}
            width="32"
            height="32"
            loading="lazy"
          />
        </div>
        <div className="flex-1 px-4">
          <h2 className="text-xl font-bold -mb-1">{name}</h2>
          <p className="text-gray-500">
            {formatNumber(followers_count)}
            {name === "Gumroad" ? " products" : " followers"}
          </p>
        </div>
        <div>
          <img
            src={`./icons/right-arrow.webp`}
            alt="Next"
            width="24"
            height="24"
            loading="lazy"
          />
        </div>
      </div>
    </a>
  );
};

export default ButtonWithIcon;
