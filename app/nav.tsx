import { useEffect, useState } from "react";
import styles from "./nav.module.css";
import Image from "next/image";

type Props = {
  className?: string;
};

export const Nav = (props: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleShow);

    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <div className={`${styles.nav} ${show && styles["nav-black"]}`}>
      <Image
        className={styles["nav-logo"]}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        height={30}
        width={30}
        alt="Netflix Logo"
      />
      <Image
        className={styles["nav-avatar"]}
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        height={30}
        width={30}
        alt="Avatar"
      />
    </div>
  );
};
