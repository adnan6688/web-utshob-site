import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';

const AuthHooks = () => {
    const value = useContext(AuthContext);

    if (!value) {
        return {
            scroll: () => {},
            homeRef: { current: null },
            serviceRef: { current: null },
            whyRef: { current: null },
            partnerRef: { current: null },
            customerRef: { current: null },
            howRef: { current: null },
        };
    }

    return value;
};

export default AuthHooks;