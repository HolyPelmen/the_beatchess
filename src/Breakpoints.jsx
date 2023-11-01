//* Base imports -----------------------------------------------------------------
import { useMediaQuery } from "react-responsive";

//#region Mobile Breakpoints
/**
 * A component that renders its children only on mobile devices.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on mobile devices.
 * @returns {JSX.Element | null} The rendered component or null if not on a mobile device.
 *
 * * Width - 320px-480px
 */
export const OnlyMobile = ({ children }) => {
  return useMediaQuery({ minWidth: 320, maxWidth: 480 }) ? children : null;
};

/**
 * A component that renders its children only from mobile devices to small tablets.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on mobile devices.
 * @returns {JSX.Element | null} The rendered component or null if not on a mobile device.
 *
 * * Width - 320px-640px
 */
export const MobileToSmallTablet = ({ children }) => {
  return useMediaQuery({ minWidth: 320, maxWidth: 640 }) ? children : null;
};

/**
 * A component that renders its children only from mobile devices to portrait tablets.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on mobile devices.
 * @returns {JSX.Element | null} The rendered component or null if not on a mobile device.
 *
 * * Width - 320px-960px
 */
export const MobileToPortTablet = ({ children }) => {
  return useMediaQuery({ minWidth: 320, maxWidth: 960 }) ? children : null;
};

/**
 * A component that renders its children only from mobile devices to tablets.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on mobile devices.
 * @returns {JSX.Element | null} The rendered component or null if not on a mobile device.
 *
 * * Width - 320px-1024px
 */
export const MobileToTablet = ({ children }) => {
  return useMediaQuery({ minWidth: 320, maxWidth: 1024 }) ? children : null;
};

/**
 * A component that renders its children only from mobile devices to laptops.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on mobile devices.
 * @returns {JSX.Element | null} The rendered component or null if not on a mobile device.
 *
 * * Width - 320px-1280px
 */
export const MobileToLaptop = ({ children }) => {
  return useMediaQuery({ minWidth: 320, maxWidth: 1280 }) ? children : null;
};

/**
 * A component that renders its children on all devices starting from mobile.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on mobile devices.
 * @returns {JSX.Element | null} The rendered component or null if not on a mobile device.
 *
 * * Width - from 320px
 */
export const FromMobile = ({ children }) => {
  return useMediaQuery({ minWidth: 320 }) ? children : null;
};
//#endregion

//#region Small Tablet Breakpoints
/**
 * A component that renders its children only on small tablets.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on small tablets.
 * @returns {JSX.Element | null} The rendered component or null if not on a small tablet.
 *
 * * Width - 481px-640px
 */
export const OnlySmallTablet = ({ children }) => {
  return useMediaQuery({ minWidth: 481, maxWidth: 640 }) ? children : null;
};

/**
 * A component that renders its children only from small tablets to portraits tablets.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on small tablets.
 * @returns {JSX.Element | null} The rendered component or null if not on a small tablet.
 *
 * * Width - 481px-960px
 */
export const SmallTabletToPortTablet = ({ children }) => {
  return useMediaQuery({ minWidth: 481, maxWidth: 960 }) ? children : null;
};

/**
 * A component that renders its children only from small tablets to tablets.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on small tablets.
 * @returns {JSX.Element | null} The rendered component or null if not on a small tablet.
 *
 * * Width - 481px-1024px
 */
export const SmallTabletToTablet = ({ children }) => {
  return useMediaQuery({ minWidth: 481, maxWidth: 1024 }) ? children : null;
};

/**
 * A component that renders its children only from small tablets to laptops.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on small tablets.
 * @returns {JSX.Element | null} The rendered component or null if not on a small tablet.
 *
 * * Width - 481px-1280px
 */
export const SmallTabletToLaptop = ({ children }) => {
  return useMediaQuery({ minWidth: 481, maxWidth: 1280 }) ? children : null;
};

/**
 * A component that renders its children on all devices starting from small tablets.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on small tablets.
 * @returns {JSX.Element | null} The rendered component or null if not on a small tablet.
 *
 * * Width - from 481px
 */
export const FromSmallTablet = ({ children }) => {
  return useMediaQuery({ minWidth: 481 }) ? children : null;
};
//#endregion

//#region Portrait Tablet Breakpoints
/**
 * A component that renders its children only on portrait tablets.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on portrait tablets.
 * @returns {JSX.Element | null} The rendered component or null if not on a portrait tablet.
 *
 * * Width - 641px-960px
 */
export const OnlyPortTablet = ({ children }) => {
  return useMediaQuery({ minWidth: 641, maxWidth: 960 }) ? children : null;
};

/**
 * A component that renders its children only from portrait tablets to tablets.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on portrait tablets.
 * @returns {JSX.Element | null} The rendered component or null if not on a portrait tablet.
 *
 * * Width - 641px-1024px
 */
export const PortTabletToTablet = ({ children }) => {
  return useMediaQuery({ minWidth: 641, maxWidth: 1024 }) ? children : null;
};

/**
 * A component that renders its children only from portrait tablets to laptop.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on portrait tablets.
 * @returns {JSX.Element | null} The rendered component or null if not on a portrait tablet.
 *
 * * Width - 641px-1280px
 */
export const PortTabletToLaptop = ({ children }) => {
  return useMediaQuery({ minWidth: 641, maxWidth: 1280 }) ? children : null;
};

/**
 * A component that renders its children on all devices starting from portraits tablets.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on portrait tablets.
 * @returns {JSX.Element | null} The rendered component or null if not on a portrait tablet.
 *
 * * Width - from 641px
 */
export const FromPortTablet = ({ children }) => {
  return useMediaQuery({ minWidth: 641 }) ? children : null;
};
//#endregion

//#region Tablet Breakpoints
/**
 * A component that renders its children only on tablets.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on tablets.
 * @returns {JSX.Element | null} The rendered component or null if not on a tablet.
 *
 * * Width - 961px-1024px
 */
export const OnlyTablet = ({ children }) => {
  return useMediaQuery({ minWidth: 961, maxWidth: 1024 }) ? children : null;
};

/**
 * A component that renders its children only from tablets to laptops.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on tablets.
 * @returns {JSX.Element | null} The rendered component or null if not on a tablet.
 *
 * * Width - 961px-1280px
 */
export const TabletToLaptop = ({ children }) => {
  return useMediaQuery({ minWidth: 961, maxWidth: 1280 }) ? children : null;
};

/**
 * A component that renders its children on all devices starting from tablets.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on portrait tablets.
 * @returns {JSX.Element | null} The rendered component or null if not on a portrait tablet.
 *
 * * Width - from 961px
 */
export const FromTablet = ({ children }) => {
  return useMediaQuery({ minWidth: 961 }) ? children : null;
};
//#endregion

//#region Laptop Breakpoints
/**
 * A component that renders its children only on laptops.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on laptops.
 * @returns {JSX.Element | null} The rendered component or null if not on a laptop.
 *
 * * Width - 1025px-1280px
 */
export const OnlyLaptop = ({ children }) => {
  return useMediaQuery({ minWidth: 1025, maxWidth: 1280 }) ? children : null;
};

/**
 * A component that renders its children on all devices starting from laptops.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on portrait tablets.
 * @returns {JSX.Element | null} The rendered component or null if not on a portrait tablet.
 *
 * * Width - from 1025px
 */
export const FromLaptop = ({ children }) => {
  return useMediaQuery({ minWidth: 1025 }) ? children : null;
};
//#endregion

//#region Desktop Breakpoints
/**
 * A component that renders its children on all devices starting from  desktops.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to render on desktops.
 * @returns {JSX.Element | null} The rendered component or null if not on a desktop.
 *
 * * Width - from 1281px
 */
export const Desktop = ({ children }) => {
  return useMediaQuery({ minWidth: 1281 }) ? children : null;
};
//#endregion

//#region Breakpoints inline check
/**
 * Determines if the current device is a mobile device.
 *
 * @function
 * @returns {boolean} `true` if the device is a mobile device, `false` otherwise.
 *
 * * Width - up to 480px
 */
export const isMobile = () => {
  return useMediaQuery({ maxWidth: 480 });
};

/**
 * Determines if the current device is a small tablet.
 *
 * @function
 * @returns {boolean} `true` if the device is a small tablet, `false` otherwise.
 *
 * * Width - up to 640px
 */
export const IsSmallTablet = () => {
  return useMediaQuery({ maxWidth: 640 });
};

/**
 * Determines if the current device is a portrait tablet.
 *
 * @function
 * @returns {boolean} `true` if the device is a portrait tablet, `false` otherwise.
 *
 * * Width - up to 960px
 */
export const IsPortTablet = () => {
  return useMediaQuery({ maxWidth: 960 });
};

/**
 * Determines if the current device is a tablet.
 *
 * @function
 * @returns {boolean} `true` if the device is a tablet, `false` otherwise.
 *
 * * Width - up to 1024px
 */
export const IsTablet = () => {
  return useMediaQuery({ maxWidth: 1024 });
};

/**
 * Determines if the current device is a laptop.
 *
 * @function
 * @returns {boolean} `true` if the device is a laptop, `false` otherwise.
 *
 * * Width - up to 1280px
 */
export const IsLaptop = () => {
  return useMediaQuery({ maxWidth: 1280 });
};

/**
 * Determines if the current device is a desktop.
 *
 * @function
 * @returns {boolean} `true` if the device is a desktop, `false` otherwise.
 *
 * * Width - from 1280px
 */
export const isDesktop = () => {
  return useMediaQuery({ minWidth: 1280 });
};
//#endregion
