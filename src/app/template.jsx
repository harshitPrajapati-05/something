"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {Nav} from "@/components";


const Template = ({ children }) => {
  return (
    <>
    <Nav/>
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0 ,y:1000}}
        animate={{ opacity: 1 ,y:0}}
        exit={{ opacity: 0,y:1000 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
    </>
  );
};

export default Template;
