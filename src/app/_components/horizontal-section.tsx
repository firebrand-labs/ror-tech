"use client";

import { FC, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import ScaleAndSecure from "@/config/animated-svg/datapiechart10.json";
import AnimatedIcon from "@/app/_components/animated-icon";
import Link from "next/link";

import { useRef } from "react";
import { solutionsData } from "@/config/marketing";
import * as React from "react";
import { Minus, Plus } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { Button } from "@/app/_components/ui/button";

interface HorizontalSectionProps {}
const colors = ["#263C7B", "#322A5E", "#84357B", "#4A4A48"];
const HorizontalSection: FC<HorizontalSectionProps> = function () {
  const targetRef = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [scrollDistance, setScrollDistance] = useState("-95%");

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    if (isMobile) {
      setScrollDistance("-90%"); // Adjust this value for mobile
    } else {
      setScrollDistance("-45%");
    }
  }, [isMobile]);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", scrollDistance]);

  return (
    <section
      ref={targetRef}
      className="w-screen flex-col h-[200vh] items-center justify-center bg-transparent py-16 md:py-24 relative"
    >
      <div className="sticky container  top-0 flex flex-col items-start justify-center h-[100vh] md:h-screen  overflow-hidden">
        <h2 className="w-full font-normal leading-tight text-left text-primary font-heading text-secondary_heading mb-16 md:mb-12">
          Using Next Generation Digital Technologies
        </h2>
        <motion.div style={{ x }} className="flex gap-4 md:gap-8">
          {solutionsData.map((item, i) => (
            <div
              key={i}
              style={{ backgroundColor: `${colors[i]}` }}
              className="flex items-center min-w-[380px] md:min-w-[460px] flex-col group justify-between w-full flex-wrap gap-4 md:flex-nowrap py-8 md:py-8 shadow-lg backdrop-blur p-4 md:p-8 rounded-md"
            >
              <div className="w-full flex items-start justify-start">
                <AnimatedIcon
                  icon={item?.icon}
                  className="max-w-[200px] md:max-w-[200px]"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-6">
                <h4 className="text-tertiary_heading leading-tight font-heading font-normal text-foreground">
                  {item?.title}
                </h4>
                <span className="text-subtitle_heading font-paragraph font-normal text-foreground min-h-[100px]">
                  {item?.description}
                </span>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="default"
                      className="bg-transparent hover:bg-transparent/10 "
                    >
                      Read about our Technologies
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="py-8 md:py-16">
                    <SheetHeader>
                      <SheetTitle className="!text-secondary_heading text-left leading-tight font-heading font-normal text-primary mb-4">
                        {item?.title}
                      </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col items-start justify-start gap-4">
                      <ul className="flex flex-col items-start justify-start gap-2 w-full">
                        {item?.solutions.map((listItem, i) => (
                          <li
                            className="text-popover py-3 text-paragraph_heading font-heading last:border-0  border-b border-popover w-full"
                            key={i}
                          >
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="text-center flex mt-4 md:mt-8 text-extra_subtitle_heading font-paragraph font-light">
                      {item?.services}
                    </span>
                  </SheetContent>
                </Sheet>
                <span className="text-extra_paragraph_heading hidden font-paragraph font-normal text-foreground">
                  {item?.solutions}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalSection;
