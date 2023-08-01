export default function Nav() {
  return (
    <nav className="h-[80px]">
      {/* nav__wrapper  */}
      <div className="flex justify-between items-center max-w-[1070px] w-full h-full mx-auto px-[24px]">
        {/* nav__img--mask */}
        <figure className="max-w-[200px]">
          {/* nav__img */}
          <img className="w-full h-full" src="" alt="logo" />
        </figure>
        {/* nav__list--wrapper */}
        <ul className="flex gap-[24px]">
            {/* nav__list */}
          <li className="text-[#032b41] hover:text-[#2bd97c] cursor-pointer transition duration-100">Login</li>
          <li className="cursor-not-allowed">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="max-[576px]:hidden">Help</li>
        </ul>
      </div>
    </nav>
  );
}
