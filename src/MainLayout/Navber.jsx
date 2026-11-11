
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router";
import logo from "../assets/logo-utsab (1).png";
import AuthHooks from "../Components/Shared/Hook/AuthHooks";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState("/");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    };

    const renderMenuItems = (mobile = false) =>
        menuItems.map((item) => {
            const className = `${mobile
                ? "block w-full cursor-pointer rounded-lg px-4 py-3"
                : "cursor-pointer whitespace-nowrap"
                } ${activeMenu === item.path ? "" : "text-[#5E6878]"
                } transition-colors duration-200`;

            if (item.label !== "Event Services" && location.pathname !== "/") {
                return (
                    <Link
                        key={item.label}
                        to="/"
                        onClick={() => {
                            setMobileMenuOpen(false);
                        }}
                        className={className}
                    >
                        {item.label}
                    </Link>
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
        >
            <div className="mx-auto max-w-[1180px] px-3 sm:px-4 lg:px-0">
                <div className="flex h-16 items-center justify-between gap-3">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="shrink-0"
                        onClick={() => {
                            setMobileMenuOpen(false);
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

                {/* Mobile & Tablet Dropdown */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${mobileMenuOpen
                        ? "max-h-[620px] pb-2 opacity-100"
                        : "max-h-0 pb-0 opacity-0"
                        }`}
                >
                    <nav className="flex flex-col text-sm font-medium gap-1 border-t border-[#E2E6EB] pt-2">
                        {renderMenuItems(true)}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
