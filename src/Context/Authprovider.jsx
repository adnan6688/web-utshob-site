

import React, { useRef } from 'react';
import { AuthContext } from './AuthContext';


const Authprovider = ({ children }) => {


    const serviceRef = useRef(null)
    const whyRef = useRef(null)
    const partnerRef = useRef(null)
    const customerRef = useRef(null)
    const howRef = useRef(null)
    const homeRef = useRef(null)




    const scroll = (value) => {

        value?.current?.scrollIntoView({ behavior: "smooth" })
    }

    const info = {
        scroll,
        homeRef,
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