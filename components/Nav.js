import LogInModal from "./modals/LogInModal";

export default function Nav() {
  return (
    <nav className="h-[80px]">
      <div className="flex justify-between items-center max-w-[1070px] w-full h-full mx-auto px-[24px]">
        <figure className="max-w-[200px]">
          <img className="w-full h-full" src={"/assets/logo.png"} alt="logo" />
        </figure>
        <ul className="flex gap-[24px]">
          <LogInModal />
          <li className="text-[#032b41]  hidden xs:inline cursor-not-allowed">
            About
          </li>
          <li className="text-[#032b41] hidden xs:inline cursor-not-allowed">
            Contact
          </li>
          <li className="text-[#032b41]  hidden xs:inline cursor-not-allowed">
            Help
          </li>
        </ul>
      </div>
    </nav>
  );
}
