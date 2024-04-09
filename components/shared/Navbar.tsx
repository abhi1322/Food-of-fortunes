"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Navbar = () => {
  return (
    <nav className=" px-8 pb-4 border-b">
      <div className="flex justify-between items-center py-4">
        <div>
          <a href="/" className="font-bold text-xl">
            Food of Fortuens
          </a>
        </div>

        <div className="flex gap-4">
          <div className="flex gap-1">
            <Input type="text" placeholder="Search" />
            <Button>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/forma-bold/24/ffffff/search.png"
                alt="search"
              />
            </Button>
          </div>
          <Link
            href={""}
            className={buttonVariants({
              variant: "outline",
              className:
                "border-green-600 text-green-600 hover:bg-green-800 hover:text-white",
            })}
          >
            Log In
          </Link>
          <a
            href={""}
            className={buttonVariants({
              className: "bg-green-600 hover:bg-green-700 px-8",
            })}
          >
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/sf-regular-filled/48/ffffff/shopping-cart.png"
              alt="shopping-cart"
            />{" "}
            My Cart
          </a>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <ul className="flex items-center gap-6 text-neutral-500 text-sm">
          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuTrigger>All Departments</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <a
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </a>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>

          <li className="border-b-2 border-green-600">
            <a href="/">Home</a>
          </li>
          <li className="hover:border-b-2 border-green-600">
            <a href="/">About Us</a>
          </li>
          <li className="hover:border-b-2 border-green-600">
            <a href="/">Contact Us</a>
          </li>
          <li className="hover:border-b-2 border-green-600">
            <a href="/">Shop Location</a>
          </li>
        </ul>
        <div className="flex">
          <img
            width="36"
            height="36"
            src="https://img.icons8.com/sf-regular/48/B4B4B4/instagram-new.png"
            alt="instagram-new"
          />
          <img
            width="36"
            height="36"
            src="https://img.icons8.com/sf-regular/48/B4B4B4/facebook-circled.png"
            alt="facebook-circled"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
