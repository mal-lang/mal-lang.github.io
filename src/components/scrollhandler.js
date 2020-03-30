/*
 * Copyright 2020 Foreseeti AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
