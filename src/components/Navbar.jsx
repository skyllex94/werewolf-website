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
      {/* <Typography variant="small" color="blue-gray" className="p-1 font-normal">
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
        <Link to="/126c3cb75cb3fbac5432732b23eef6bd" className="flex items-end">
          Villager
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/bbb3606b5cab898386e0d9590278068e" className="flex items-end">
          Werewolf
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/34b81f08e80d23ea2454472421070786" className="flex items-end">
          Seer
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/f9f16d97c90d8c6f2cab37bb6d1f1992" className="flex items-end">
          Doctor
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/6766992ca3827afeb1181bf1c123b230" className="flex items-end">
          Tanner
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/c59fdcefd9c65f5471cdee9acbeb3c10" className="flex items-end">
          Cupid
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/97c8f692a928a55577aaf6cd98c56bb5" className="flex items-end">
          Prince
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/c79f034d0174707f425a0e523b7a76d5" className="flex items-end">
          Bodyguard
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/d89e6a000cd7cd4f8270a17a95497fe8" className="flex items-end">
          Cursed Villager
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/e5ea56a64dedf72d7bfffbd4251d52bc" className="flex items-end">
          Priest
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/5e409e09f43d85c6e61301149e4f803b" className="flex items-end">
          Hunter
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/50b137850dcf8a520f48ef958e6b4e3c" className="flex items-end">
          Lycan
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/1e5801f6c2ee2ba36fb7c41edab701e3" className="flex items-end">
          Witch
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/e96301d78cf51cca1cc8bdc69072c4a0" className="flex items-end">
          Alpha Werewolf
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/ab1f6afa66043c6763eab729c64bf14a" className="flex items-end">
          Wolf Cub
        </Link>
      </Typography>  */}
    </ul>
  );

  return (
    <Navbar className="bg-gray-800 mx-auto py-2 pt-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to={"/"}>
          <Typography className="text-white mr-4 cursor-pointer py-1.5 font-medium ">
            Werewolf: Save the Village
          </Typography>
        </Link>
        <div className="flex items-end">
          <div className="hidden lg:block">{navList}</div>
          <Link to="https://apps.apple.com/us/app/id6738326023">
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

          <Link to="https://apps.apple.com/us/app/id6738326023">
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Download App</span>
            </Button>
          </Link>
        </div>
      </MobileNav>
    </Navbar>
  );
}
