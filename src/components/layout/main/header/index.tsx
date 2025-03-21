"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ResponsiveContainer from "@/components/common/responsive-container";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ChevronDown, ChevronUp, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "./nav-config";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const ListItem = ({
  name,
  href,
  description,
}: {
  name: string;
  href: string;
  description: string;
}) => {
  return (
    <li>
      <Link
        href={href}
        className="block p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
      >
        <div className="text-sm font-medium text-gray-900">{name}</div>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </Link>
    </li>
  );
};

export default function Header() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);

  const handleMouseEnter = (itemName: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 150);
  };

  const handleCallClick = () => {
    window.location.href = "tel:469-345-6419";
  };

  const handleMobileItemClick = (itemName: string) => {
    setOpenMobileItem(openMobileItem === itemName ? null : itemName);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <ResponsiveContainer variant="wide" paddingX="xs" paddingY="sm">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/image.png"
              alt="Yeti PM Logo"
              width={120}
              height={80}
              className="h-14 w-auto"
            />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.items ? (
                  <>
                    <button
                      type="button"
                      className={cn(
                        "flex items-center space-x-1 mx-4 py-1 rounded-lg text-sm font-bold transition-colors duration-200",
                        pathname === item.href
                          ? "text-primary"
                          : "text-gray-700 hover:text-primary",
                        hoveredItem === item.name && "text-primary"
                      )}
                    >
                      <span>{item.name}</span>
                      {hoveredItem === item.name ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    {hoveredItem === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-[280px] bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <ul className="py-2">
                          {item.items.map((subItem) => (
                            <ListItem key={subItem.name} {...subItem} />
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 font-bold rounded-lg text-sm transition-colors duration-200",
                      pathname === item.href
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Call Button */}
            <Button
              onClick={handleCallClick}
              variant="default"
              size="default"
              className="bg-[#003d21] hover:bg-[#003d21]/90 text-white font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
              <span className="ml-1 text-sm opacity-90">469-345-6419</span>
            </Button>
          </nav>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <SheetTitle hidden>Menu</SheetTitle>
                <div className="mt-4 py-2">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <button
                        type="button"
                        className="flex items-center justify-between w-full px-4 py-2.5 cursor-pointer"
                        onClick={() =>
                          item.items && handleMobileItemClick(item.name)
                        }
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "text-sm font-medium transition-colors duration-200 flex-1",
                            pathname === item.href
                              ? "text-primary"
                              : "text-gray-700"
                          )}
                          onClick={(e) => item.items && e.preventDefault()}
                        >
                          {item.name}
                        </Link>
                        {item.items && (
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 text-gray-500 transition-transform duration-200",
                              openMobileItem === item.name && "rotate-180"
                            )}
                          />
                        )}
                      </button>
                      {item.items && openMobileItem === item.name && (
                        <div className="bg-gray-50 px-4 py-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2 text-sm text-gray-600 hover:text-primary"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Mobile Call Button */}
                  <div className="px-4 pt-4">
                    <Button
                      onClick={handleCallClick}
                      variant="default"
                      size="default"
                      className="w-full bg-[#003d21] hover:bg-[#003d21]/90 text-white font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Us</span>
                      <span className="ml-1 text-sm opacity-90">
                        469-345-6419
                      </span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </ResponsiveContainer>
    </header>
  );
}
