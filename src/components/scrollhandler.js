import { useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const ScrollHandler = ({ location }) => {
  useEffect(() => {
    const loc = location.hash.replace("#", "");
    if (loc === '') {
      setTimeout(() => {
        window.scrollTo({
          behavior: "smooth",
          top: 0
        });
      }, 100);
    } else {

    const element = document.getElementById(loc);
      if (element) {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const pos = element.getBoundingClientRect();
        setTimeout(() => {
          window.scrollTo({
            behavior: element ? "smooth" : "auto",
            top: element ? currentScroll + (pos.y - 50) : 0
          });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

ScrollHandler.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.any,
    key: PropTypes.string
  }).isRequired
};

export default withRouter(ScrollHandler);
