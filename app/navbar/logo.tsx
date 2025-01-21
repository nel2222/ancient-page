import Image from "next/image";

const Logo = () => {
  return (
    <div className=" relative top-4">
      <Image
        src="/images/logo/logo.png"
        width={50}
        height={50}
        className="w-28 h-28"
        alt="logo"
      />
    </div>
  );
};

export default Logo;
