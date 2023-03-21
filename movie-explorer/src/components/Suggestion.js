import React from "react";
import { TextField, Paper, MenuItem, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/search";
import Downshift from "downshift";
import { Link } from "react-router-dom";
import { IMAGES_PATH, COVER_PLACEHOLDER } from "../config";
import styled from "@emotion/styled";

//STYLES

const PaperStyled = styled(Paper)({
  backgroundColor: "darkgoldenrod",
  top: -40,
  position: "relative",
});

const MenuItemStyled = styled(MenuItem)({
  paddingTop: 5,
  paddingBottom: 5,
});

const ImgStyled = styled("img")({
  height: "100%",
});

const LinkStyled = styled(Link)({
  display: "block",
  textDecoration: "none",
});

//COMPONENT STARTS

const Suggestion = ({ movies }) => {
  const dispatch = useDispatch();

  const inputOnChange = (event) => {
    if (!event.target.value) {
      return;
    }

    dispatch(searchMovies(event.target.value));
  };

  return (
    <Downshift>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <div>
          <TextField
            id="search"
            placeholder="Search"
            fullWidth={true}
            sx={{ mb: 5 }}
            variant="standard"
            InputProps={{
              ...getInputProps({
                onChange: inputOnChange,
              }),
            }}
          />
          {isOpen ? (
            <PaperStyled square={true} {...getMenuProps()}>
              {movies.results
                .slice(0, 10)
                .filter(
                  (item) =>
                    !inputValue ||
                    item.title.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <MenuItemStyled
                    {...getItemProps({
                      item,
                      key: item.id,
                      selected: highlightedIndex === index,
                      style: {
                        fontWeight: selectedItem === item ? 500 : 400,
                      },
                    })}
                  >
                    <LinkStyled to={`/movie/${item.id}`}>
                      <Grid container={true} spacing={8}>
                        <Grid item={true}>
                          {item.poster_path ? (
                            <ImgStyled
                              src={`${IMAGES_PATH}/w92${item.poster_path}`}
                              alt={item.title}
                            />
                          ) : (
                            <ImgStyled
                              src={COVER_PLACEHOLDER}
                              alt={item.title}
                            />
                          )}
                        </Grid>
                        <Grid item={true}>
                          <Typography variant="h4">{item.title}</Typography>
                          <Typography variant="caption">
                            {item.title}
                          </Typography>
                        </Grid>
                      </Grid>
                    </LinkStyled>
                  </MenuItemStyled>
                ))}
            </PaperStyled>
          ) : null}
        </div>
      )}
    </Downshift>
  );
};

export default Suggestion;
