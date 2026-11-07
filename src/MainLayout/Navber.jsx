
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router";
import logo from "../assets/logo-utsab (1).png";
import AuthHooks from "../Components/Shared/Hook/AuthHooks";
import Button from "../Components/Shared/Button";
import Megamenu from "../Components/MegaMenu/Megamenu";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState("/");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileEventOpen, setMobileEventOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Event Decoration");

    const { scroll, eventServicesRef, serviceRef, partnerRef, howRef } = AuthHooks();
    const location = useLocation();

    const menuItems = [
        { label: "Event Services", ref: eventServicesRef, path: "/" },
        { label: "Planning Solutions", ref: serviceRef, path: "/services" },
        { label: "How Utshob Works", ref: howRef, path: "/how" },
        { label: "Join as Partner", ref: partnerRef, path: "/partner" },
    ];

    const handleClick = (item) => {
        scroll(item.ref);
        setActiveMenu(item.path);
        setMobileMenuOpen(false);
        setMegaMenuOpen(false);
    };

    const renderMenuItems = (mobile = false) =>
        menuItems.map((item) => {
            const className = `${mobile
                ? "block w-full cursor-pointer rounded-lg px-4 py-3"
                : "cursor-pointer whitespace-nowrap"
                } ${activeMenu === item.path ? "" : "text-gray-700"
                } transition-colors duration-200`;

            if (location.pathname !== "/") {
                return (
                    <Link
                        key={item.label}
                        to="/"
                        onClick={() => {
                            setMobileMenuOpen(false);
                            setMegaMenuOpen(false);
                            setMobileEventOpen(false);
                        }}
                        className={className}
                    >
                        {item.label}
                    </Link>
                );
            }

            if (mobile && item.label === "Event Services") {
                return (
                    <button
                        key={item.label}
                        type="button"
                        onClick={() => {
                            setMobileEventOpen(true);
                            setMegaMenuOpen(false);
                        }}
                        className={`${className} flex items-center justify-between text-left`}
                    >
                        <span>{item.label}</span>
                        <FiChevronDown size={16} className="text-[#E62E77]" />
                    </button>
                );
            }

            if (!mobile && item.label === "Event Services") {
                return (
                    <button
                        key={item.label}
                        type="button"
                        onClick={() => handleClick(item)}
                        onMouseEnter={() => setMegaMenuOpen(true)}
                        aria-expanded={megaMenuOpen}
                        className={`${className} flex items-center gap-1`}
                    >
                        {item.label}
                        <FiChevronDown
                            className={`transition-transform duration-200 ${megaMenuOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>
                );
            }

            return (
                <button
                    key={item.label}
                    type="button"
                    onClick={() => handleClick(item)}
                    className={`${className} text-left`}
                >
                    {item.label}
                </button>
            );
        });

    return (
        <header
            className="fixed left-0 top-0 z-50 w-full border-b border-white/30 bg-white/80 shadow-sm backdrop-blur-xl"
            onMouseLeave={() => setMegaMenuOpen(false)}
        >
            <div className="mx-auto max-w-[1180px] px-3 sm:px-4 lg:px-0">
                <div className="flex h-16 items-center justify-between gap-3">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="shrink-0"
                        onClick={() => {
                            setMobileMenuOpen(false);
                            setMegaMenuOpen(false);
                        }}
                    >
                        <img
                            className="w-[70px] sm:w-[85px] lg:w-[90px]"
                            src={logo}
                            alt="Utshob Logo"
                            width="507"
                            height="255"
                            decoding="async"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden text-sm font-medium items-center gap-3 lg:flex xl:gap-4">
                        {renderMenuItems()}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex shrink-0 items-center gap-2">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://play.google.com/store/apps/details?id=xyz.Utshob"
                            className="hidden cursor-pointer items-center justify-center whitespace-nowrap rounded-[10px] border border-[#DF266F] bg-white px-4 py-2.5 text-xs font-semibold text-[#111318] transition-all duration-300 hover:bg-[#FFF1F6] sm:inline-flex lg:px-5 lg:py-3 lg:text-sm"
                        >
                            Download App
                        </a>

                        <button
                            type="button"
                            onClick={() => {
                                if (mobileMenuOpen && mobileEventOpen) {
                                    setMobileEventOpen(false);
                                }
                                setMobileMenuOpen(!mobileMenuOpen);
                            }}
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileMenuOpen}
                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] border border-[#E62E77] bg-white text-[#E62E77] transition-all duration-300 hover:bg-[#FFF1F6] active:scale-95 lg:hidden"
                        >
                            {mobileMenuOpen ? (
                                <FiX size={21} />
                            ) : (
                                <FiMenu size={21} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Desktop Mega Menu */}
                <div
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    className={`absolute left-1/2 top-full hidden w-[calc(100%-32px)] max-w-[1180px] -translate-x-1/2 pt-2 lg:block transition-all duration-300 ${megaMenuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0 pointer-events-none"
                        }`}
                >
                    <div className="rounded-2xl border border-[#C7CAD1] bg-white mt-2  shadow-[0_4px_16px_rgba(0,0,0,0.06)]">

                        <Megamenu
                            setMegaMenuOpen={setMegaMenuOpen}
                            eventServicesRef={eventServicesRef}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    </div>
                </div>

                {/* Mobile & Tablet Dropdown */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${mobileMenuOpen
                        ? "max-h-[620px] pb-2 opacity-100"
                        : "max-h-0 pb-0 opacity-0"
                        }`}
                >
                    {mobileEventOpen ? (
                        <div className="pt-1">
                            <Megamenu
                                mobile
                                setMegaMenuOpen={setMobileEventOpen}
                                eventServicesRef={eventServicesRef}
                                scroll={scroll}
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                                onCloseMenu={() => {
                                    setMobileMenuOpen(false);
                                    setMobileEventOpen(false);
                                }}
                            />
                        </div>
                    ) : (
                        <nav className="flex flex-col text-sm font-medium gap-1 border-t border-gray-100 pt-2">
                            {renderMenuItems(true)}
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
