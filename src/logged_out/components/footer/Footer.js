import {
  Box,
  Grid,
  Hidden,
  IconButton,
  Typography,
  isWidthUp,
  withStyles,
  withWidth
} from "@material-ui/core";
import transitions from "@material-ui/core/styles/transitions";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
  footerInner: {
    backgroundColor: theme.palette.common.darkBlack,
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
      paddingBottom: theme.spacing(10)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingBottom: theme.spacing(10)
    }
  },
  brandText: {
    fontFamily: "'Teko', cursive",
    fontWeight: 400,
    color: theme.palette.common.white
  },
  footerLinks: {
    marginTop: theme.spacing(2.5),
    marginBot: theme.spacing(1.5),
    color: theme.palette.common.white
  },
  infoIcon: {
    color: `${theme.palette.common.white} !important`,
    backgroundColor: "#33383b !important"
  },
  socialIcon: {
    fill: theme.palette.common.white,
    backgroundColor: "#33383b",
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    }
  },
  link: {
    cursor: "Pointer",
    color: theme.palette.common.white,
    transition: transitions.create(["color"], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeIn
    }),
    "&:hover": {
      color: theme.palette.primary.light
    }
  },
  whiteBg: {
    backgroundColor: theme.palette.common.white
  }
});

const infos = [
  {
    icon: <PhoneIcon />,
    description: "+905050770339"
  },
  {
    icon: <MailIcon />,
    description: "bilmate.feedback@gmail.com"
  }
];

function Footer(props) {
  const { classes, theme, width } = props;
  return (
    <footer className="lg-p-top">
      <div className={classes.footerInner}>
        <Grid container spacing={isWidthUp("md", width) ? 10 : 5}>
          <Grid item xs={12} md={8} lg={3} style={{padding:6}}>
            <Typography variant="h6" paragraph className="text-white">
              About Us
            </Typography>

            <Typography style={{ color: "#8f9296" }} paragraph>
            We are Ghost in The Toast (GiT), we are the team behind
            flatmate sharing app, BilMate. Our group consists of highly 
            motivated and talented graduates from Bilkent University. We 
            have a diverse range of academic backgrounds, including computer 
            engineering, business, and graphic design which gives 
            us a unique perspective when it comes to developing innovative solutions 
            for everyday problems.
            <br></br>
            If you are interested in a colaboration, don't hesitate to contact us
            </Typography>
            <Box display="flex" justifyContent="center">
                <div>
                  {infos.map((info, index) => (
                    <Box display="flex" mb={1} key={index}>
                      <Box mr={2}>
                        <IconButton className={classes.infoIcon} tabIndex={-1} disabled>
                          {info.icon}
                        </IconButton>
                      </Box>
                      <Box display="flex" flexDirection="column" justifyContent="center">
                        <Typography variant="h7" className="text-white">
                          {info.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </div>
              </Box>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles, { withTheme: true })(Footer));
