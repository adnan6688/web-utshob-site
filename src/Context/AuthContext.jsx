import { createContext } from "react";

const defaultAuthContext = {
  scroll: () => {},
  homeRef: { current: null },
  serviceRef: { current: null },
  whyRef: { current: null },
  partnerRef: { current: null },
  customerRef: { current: null },
  howRef: { current: null },
};

export const AuthContext = createContext(defaultAuthContext);