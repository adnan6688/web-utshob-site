

import { useRef } from 'react';
import { AuthContext } from './AuthContext';


const Authprovider = ({ children }) => {


    const homeRef = useRef(null)
    const eventServicesRef = useRef(null)
    const serviceRef = useRef(null)
    const whyRef = useRef(null)
    const partnerRef = useRef(null)
    const customerRef = useRef(null)
    const howRef = useRef(null)




    const scroll = (value) => {
        if (!value?.current || typeof window === 'undefined') return;

        const rect = value.current.getBoundingClientRect();
        const offset = rect.top + window.scrollY - 96;

        window.scrollTo({
            top: offset,
            behavior: 'smooth',
        });
    }

    const info = {
        scroll,
        homeRef,
        eventServicesRef,
        serviceRef,
        whyRef,
        partnerRef,
        customerRef,
        howRef
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;