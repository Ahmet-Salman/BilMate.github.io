import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, withStyles } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { useMediaQuery } from '@material-ui/core';

const styles = (theme) => ({
  card: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
  },
  cardHightlighted: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    color: theme.palette.primary.main,
  },
});

function PriceCard(props) {
  const isMobile = useMediaQuery('(max-width: 800px)');
  const { classes, theme, title, image, features, highlighted } = props;
  return (
    <div className={highlighted ? classes.cardHightlighted : classes.card}>
  <Box mb={2}>
    <Typography
      variant={highlighted ? "h5" : "h6"}
      className={highlighted ? "text-white" : classes.title}
    >
      {title}
    </Typography>
  </Box>
  <Box display="flex" alignItems="center" justifyContent="space-between">
    <Typography variant="h6">
    {features.map((feature, index) => (
    <Box display="flex" alignItems="center" mb={1} key={index}>
        <CheckIcon
          style={{
            color: highlighted
              ? theme.palette.common.white
              : theme.palette.primary.dark,
          }}
        /> {feature}
        </Box>
      ))}
    </Typography>
    <div>
      {isMobile ? 
        <div></div>
         : 
         <span>{image}</span>}
    </div>
  </Box>
  {isMobile ? 
        <Box display="flex" alignItems="center" justifyContent="center">
        {image}
      </Box>
         : 
         <div></div>}
  
</div>);
}

PriceCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  highlighted: PropTypes.bool,
};

export default withStyles(styles, { withTheme: true })(PriceCard);
