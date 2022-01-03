import React from 'react'
import { Card, CardMedia, Typography, CardActions, Button, CardContent, Rating } from '@mui/material/';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "30px",
        display: "inline-block",
        [theme.breakpoints.down('md')]: {
            margin: "3px",
        },
    },
}));


const IITCards = (props) => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root} sx={{ maxWidth: 345, minHeight: 350 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={props.cimage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.cname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.tname}
                    </Typography>
                </CardContent>
                <CardActions >
                    <Rating name="read-only" value={props.crate} readOnly />
                    <Button size="small">{props.cprice}</Button>
                    <Button size="small"><ArrowCircleRightIcon sx={{ color: "#FF5166" }} /></Button>
                </CardActions>
            </Card>
        </>
    )
}

export default IITCards;
