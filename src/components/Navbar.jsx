import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-end lg:gap-6">
      <Typography variant="small" color="blue-gray" className="p-1 font-normal">
        <Link to="/mission" className="flex items-end">
          Rules
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/projects" className="flex items-end">
          Characters
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto py-2 mt-5 pt-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to={"/"}>
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium ">
            Werewolf: Save the Village
          </Typography>
        </Link>
        <div className="flex items-end">
          <div className="hidden lg:block">{navList}</div>
          <Link to="/apps">
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block ml-7"
            >
              <span>Download App</span>
            </Button>
          </Link>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}

          <Link to="/apps">
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Download App</span>
            </Button>
          </Link>
        </div>
      </MobileNav>
    </Navbar>
  );
}
