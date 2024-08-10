"use client";
import { Header, PageHeader } from "@/components/ui/topicHeader";
import { containerVariants, itemVariants } from "@/lib/animationVariants";
import { motion } from "framer-motion";
import Link from "next/link";

function Page() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-1 pt-9"
    >
      <motion.section variants={itemVariants} className="mb-6">
      <Header as="h1">Information</Header>
      <section className="pb-8">
        
      </section>

      </motion.section>
    </motion.div>
  );
}

export default Page;
