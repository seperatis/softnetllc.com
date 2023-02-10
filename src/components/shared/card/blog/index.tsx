import React, { FC } from "react";
import { BlogType } from "@utils/types/blog";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { H3, H4 } from "@components/shared/heading";

const BlogCard: FC<BlogType> = () => {
    return (
        <Card
            className="home-blog-item"
            sx={{ maxWidth: 340, borderRadius: 0 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/temp/project1.png"
                    alt="green iguana"/>
            </CardActionArea>
            <CardContent>
                <H3 style={{ fontSize: 20, marginBottom: 8 }}>We are okay for start up!</H3>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default BlogCard;