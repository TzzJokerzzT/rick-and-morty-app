import { useContext, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Badge,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { ProjectContext } from "@/provider/Project";
import { ProviderState } from "@/types/provider.interface";
import Sidebar from "../Navigation/Sidebar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isFavoriteChar, handleLogOut } = useContext(
    ProjectContext
  ) as ProviderState;

  const badgeNumber = isFavoriteChar.length;

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src="/Logo.png" alt="Logo" className="w-36" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-[#BAC7BD]" to={"/"}>
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Badge
            content={badgeNumber}
            isInvisible={badgeNumber === 0 ? true : false}
            color="success"
            variant="shadow"
          >
            <Link className="text-[#498256]" to={"/favorites"}>
              Favorites
            </Link>
          </Badge>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="success"
            to={"/"}
            variant="flat"
            onClick={handleLogOut}
          >
            Log Out
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <NavbarItem>
            <Link className="text-[#BAC7BD]" to={"/"}>
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Badge
              content={badgeNumber}
              isInvisible={badgeNumber === 0 ? true : false}
              color="success"
              variant="shadow"
            >
              <Link className="text-[#498256]" to={"/favorites"}>
                Favorites
              </Link>
            </Badge>
          </NavbarItem>
          <Sidebar className="row-start-1 row-end-3" />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
