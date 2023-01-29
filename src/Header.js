import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import style from "./Header.module.css";
import { Link, withRouter } from "react-router-dom";
import { useRef } from "react";

function Header(props) {
  const search = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    let { history } = props;
    history.push("/movies?searchText=" + search.current.value);
    props.setSearch(search.current.value);
  };
  return (
    <div className={style.box}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                marginLeft: "6rem",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "#4c9be8" }}>
                Movie App
              </Link>
            </Typography>
            <form onSubmit={submitHandler}>
              <input
                placeholder="  Search…"
                ref={search}
                className={style.input}
              />
            </form>
            <img
              src="5cefa298257a0.png"
              alt="logo"
              height="55rem"
              width="220rem"
            />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
export default withRouter(Header);
