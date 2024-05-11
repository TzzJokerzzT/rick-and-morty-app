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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isFavoriteChar } = useContext(ProjectContext) as ProviderState;

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

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
          <Link color="foreground" to={"/"}>
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
            <Link to={"/favorites"} aria-current="page">
              Favorites
            </Link>
          </Badge>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="success" to={"/"} variant="flat">
            Log Out
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              to="#"
              // size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
