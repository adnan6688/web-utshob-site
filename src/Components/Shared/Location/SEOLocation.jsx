import { useEffect } from "react";
import { useLocation } from "react-router";

const SEO_DATA = {
    "/": {
        title: "Top Event Management & Wedding Planner Bangladesh | Utshob",
        keywords:
            "Event Management Bangladesh, Event Planning Platform, Wedding Planner Dhaka, Corporate Event Planning",
        description:
            "Plan your perfect event with Utshob, the premier online event management platform in Bangladesh. Find verified vendors for weddings, corporate events, and parties in Dhaka and beyond.",
    },
    "/privacy-policy": {
        title: "Privacy policy | Utshob.xyz: Event Planning Platform Bangladesh",
        description:
            "Review the official Utshob.xyz Privacy Policy. Learn how we collect, use, and protect your personal information when you use our event planning and vendor booking services in Bangladesh.",
    },
    "/terms-and-conditions": {
        title: "Terms of use | Utshob.xyz: Event Planning Platform Bangladesh",
        description:
            "Read the official Terms and Conditions for using the Utshob Event Management platform. Details on service agreements, vendor responsibilities, and user rights.",
    },
    "/abouts": {
        title: "About us | Utshob.xyz: Event Planning Platform Bangladesh",
        description:
            "Learn about Utshob's mission to revolutionize event planning in Bangladesh. Discover how we connect you with verified, high-quality vendors for stress-free weddings and corporate events.",
    },
    "/refund": {
        title:
            "Cancellation and refund | Utshob.xyz: Event Planning Platform Bangladesh",
        description:
            "View the Utshob Refund Policy details regarding bookings, and service cancellations. Learn about the process for requesting a refund.",
    },
};

const SEOLocation = () => {
    const location = useLocation();

    useEffect(() => {
        const seo = SEO_DATA[location.pathname];
        const titleEl = document.getElementById("title");
        const metaDes = document.getElementById("meta-des");
        const metaKey = document.getElementById("meta-key");

        if (seo) {
            if (titleEl) titleEl.innerText = seo.title;
            if (metaDes) metaDes.setAttribute("content", seo.description);

        
            if (location.pathname === "/" && metaKey) {
                metaKey.setAttribute("content", seo.keywords || "");
            }
        }
    }, [location]);

    return null;
};

export default SEOLocation;
