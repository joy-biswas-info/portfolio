import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ setOpen }) => {
  const items = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blog" },
    { path: "/shop", label: "Shop" },
    { path: "/about", label: "About" },
  ];
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, i) => (
        <NavLink
          to={`${item.path}`}
          key={i}
          variants={itemVariants}
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.label}
        </NavLink>
      ))}
    </motion.div>
  );
};

export default Links;
