import VideoPlayer from "../players/VideoPlayer";
import { motion } from "framer-motion";

export default function HomeFirstSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <VideoPlayer />
    </motion.section>
  );
}
