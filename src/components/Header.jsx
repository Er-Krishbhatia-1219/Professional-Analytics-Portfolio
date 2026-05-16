import { motion } from "framer-motion";

function Header() {
  return (
    <motion.h1
      className="mainHeading"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3 }}
    >
      DATA ANALYST 🔋
    </motion.h1>
  );
}

export default Header;