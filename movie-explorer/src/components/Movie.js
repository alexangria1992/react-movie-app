import React from "react";
import { Grid, Typography } from "@mui/material";
import { IMAGES_PATH, COVER_PLACEHOLDER } from "../config";
import { styled } from "@mui/system";
import Movies from "./Movies";

const GridStyled = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const ImgStyled = styled("img")({
  width: "100%",
});

const Movie = ({ movie, genres }) => {
  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60) + "h";
    const minutes = (runtime % 60) + "m";

    return `${hours} ${minutes}`;
  };
  return (
    <>
      <GridStyled container={true} spacing={2}>
        <Grid item={true} md={3}>
          {movie.poster_path ? (
            <ImgStyled
              src={`${IMAGES_PATH}/w300${movie.poster_path}`}
              alt={movie.title}
            />
          ) : (
            <ImgStyled src={COVER_PLACEHOLDER} alt={movie.title} />
          )}
        </Grid>
        <Grid item={true} md={9}>
          <Typography component="h1" variant="h3" gutterBottom={true}>
            {movie.title}
          </Typography>

          {movie.tagline && (
            <>
              <Typography variant="h6" component="h3">
                Tagline:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {movie.tagline}
              </Typography>
            </>
          )}

          {movie.genres && (
            <>
              <Typography variant="h6" component="h3">
                Genre:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {movie.genres.map((genre) => genre.name).join(", ")}
              </Typography>
            </>
          )}

          {movie.production_countries && (
            <>
              <Typography variant="h6" component="h3">
                Country:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {movie.production_countries
                  .map((country) => country.name)
                  .join(", ")}
              </Typography>
            </>
          )}

          {movie.runtime && (
            <>
              <Typography variant="h6" component="h3">
                Runtime:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {formatRuntime(movie.runtime)}
              </Typography>
            </>
          )}

          {movie.release_date && (
            <>
              <Typography variant="h6" component="h3">
                Release Date:
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {new Date(movie.release_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </>
          )}

          {movie.overview && (
            <>
              <Typography variant="h6" component="h3">
                Overview
              </Typography>
              <Typography variant="body1" gutterBottom={true}>
                {movie.overview}
              </Typography>
            </>
          )}
        </Grid>
      </GridStyled>

      {movie.recommendations && (
        <>
          <Typography variant="h4" component="h2" gutterBottom={true}>
            Recommended
          </Typography>
          <Movies movies={movie.recommendations} genres={genres} />
        </>
      )}
    </>
  );
};

export default Movie;
