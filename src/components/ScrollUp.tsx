import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

function ScrollUp() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    showTopBtn && (
      <div id="scrollUp" onClick={goToTop}>
        <FaAngleUp
          size="30"
          color="#fff"
          className="scroll-snap-align: center;"
        />
      </div>
    )
  );
}

export default ScrollUp;
