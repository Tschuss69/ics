/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import PeopleIcon from '@material-ui/icons/People';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import TodayIcon from '@material-ui/icons/Today';
import SlideshowIcon from '@material-ui/icons/Slideshow';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";
import {url_localisation} from "../../index";
import NotListedLocationIcon from "../../../node_modules/@material-ui/icons/NotListedLocation";
import {Description} from "@material-ui/icons";
import AirlineSeatFlatAngledIcon from "../../../node_modules/@material-ui/icons/AirlineSeatFlatAngled";

const useStyles = makeStyles(styles);

export default function ICSSecondaryHeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Patient"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={PeopleIcon}
          dropdownList={[
            <Link to={url_localisation} className={classes.dropdownLink}>
              <NotListedLocationIcon className={classes.dropdownIcons}/>Où sommes nous ?
            </Link>,
            <Link to="/components" className={classes.dropdownLink}>
              <Description className={classes.dropdownIcons}/>Les pathologies
            </Link>,
              <Link to="/components" className={classes.dropdownLink}>
                <AirlineSeatFlatAngledIcon className={classes.dropdownIcons}/>Les procédures
              </Link>,
              <Link to="/components" className={classes.dropdownLink}>
                <AssignmentIcon className={classes.dropdownIcons}/>Démarches avant procédure
              </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Médecins"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={LocalHospitalIcon}
          dropdownList={[
              <Link
                  to="/sections#blogs"
                  className={classes.dropdownLink}
                  onClick={e => smoothScroll(e, "blogs")}
              >
                  <TodayIcon className={classes.dropdownIcons} /> Evenements
              </Link>,
              <Link
                  to="/sections#blogs"
                  className={classes.dropdownLink}
                  onClick={e => smoothScroll(e, "blogs")}
              >
                  <AnnouncementIcon className={classes.dropdownIcons} /> News
              </Link>,
              <Link
                  to="/sections#blogs"
                  className={classes.dropdownLink}
                  onClick={e => smoothScroll(e, "blogs")}
              >
                  <Description className={classes.dropdownIcons} /> Cas cliniques
              </Link>,
              <Link
                  to="/sections#blogs"
                  className={classes.dropdownLink}
                  onClick={e => smoothScroll(e, "blogs")}
              >
                  <SlideshowIcon className={classes.dropdownIcons} /> Présentations
              </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}

ICSSecondaryHeaderLinks.defaultProps = {
  hoverColor: "primary"
};

ICSSecondaryHeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
