import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons/Build";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CloudIcon from "@material-ui/icons/Cloud";
import MeassageIcon from "@material-ui/icons/Message";
import CancelIcon from "@material-ui/icons/Cancel";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";

const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "Compatibility Matching",
    text:
      "BilMate uses machine learning to find the perfect roommate for you",
    icon: <CloudIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#6200EA",
    headline: "Flexibility",
    text:
      "Whether you want pets in your house or you prefer to live with people who share similar hobbies, " + 
      "BilMate places your decision in your hand",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#0091EA",
    headline: "Conflict Resolution",
    text:
      "A reporting system is in place to ensure that any disagreement" +  
      "is resolved quickly with the intervention of an admin",
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#d50000",
    headline: "Safety and Security",
    text:
      "Only Bilkent students are allowed access to BilMate, this is enforced by using an email-based verification system",
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200"
  },
  {
    color: "#DD2C00",
    headline: "Privacy",
    text:
      "The team behind BilMate's team takes the privacy of our users very seriously. " + 
      "We keep track only of the most essential data, and all the data on our server is encrypted",
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0"
  },
  {
    color: "#64DD17",
    headline: "Communication",
    text:
      "You decide how you want to be contacted, you can choose to hide your number for better privacy",
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200"
  }
  // {
  //   color: "#304FFE",
  //   headline: "Feature 7",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <CloudIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "0",
  //   smDelay: "0"
  // },
  // {
  //   color: "#C51162",
  //   headline: "Feature 8",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <CodeIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "200",
  //   smDelay: "200"
  // },
  // {
  //   color: "#00B8D4",
  //   headline: "Feature 9",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <CancelIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "400",
  //   smDelay: "0"
  // }
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Features
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map(element => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
