export default function Nav() {
  return (
    <nav className="h-[80px]">
      <div className="flex justify-between items-center max-w-[1070px] w-full h-full mx-auto px-[24px]">
        <figure className="max-w-[200px]">
          <img className="w-full h-full" src={"/assets/logo.png"} alt="logo" />
        </figure>
        <ul className="flex gap-[24px]">
          <li className="text-[#032b41] hover:text-[#2bd97c] cursor-pointer transition duration-100">
            Login
          </li>
          <li className="text-[#032b41] max-[576px]:hidden cursor-not-allowed">
            About
          </li>
          <li className="text-[#032b41] max-[576px]:hidden cursor-not-allowed">
            Contact
          </li>
          <li className="text-[#032b41] max-[576px]:hidden cursor-not-allowed">
            Help
          </li>
        </ul>
      </div>
    </nav>
  );
}
