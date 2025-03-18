import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ({ currentView, children }) {
    const mainControls = useAnimation();

    useEffect(() => {
        if (currentView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [currentView])

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, x: -200 },
                visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
                duration: 0.5,
                type: "spring",
                bounce: 0.10,
                delay: 0.3
            }}
        >
            {children}
        </motion.div>

    );
}