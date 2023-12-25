"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LoginIcon from "@mui/icons-material/Login";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ImageHeaderPageHamgurge from "./image-header-page-hamgurge";
import ImageIcon from "@mui/icons-material/Image";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { Typography, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
  const { user, isLoaded } = useUser();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const theme = createTheme({
    components: {
      MuiListItemText: {
        styleOverrides: {
          root: {
            fontSize: "2rem",
          },
        },
      },
    },
  });

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="text-11xl">
        {[
          ["Browse", "/browse_choose_lots"],
          [(isLoaded && user && "Dashboard") || "Login", "/dashboard"],
          ["See Users", "/test-db"],
          ["See Cars", "/test-db-cars"],
          ["My Account", "/my-account"],
        ].map((item, index) => (
          <Link key={item[0]} href={item[1]}>
            <ListItem key={item[0]} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <TravelExploreIcon />
                  ) : index === 1 ? (
                    (isLoaded && user && (
                      <UserButton afterSignOutUrl="/" />
                    )) || <LoginIcon />
                  ) : (
                    <ImageIcon fontSize="large" />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={item[0]}
                  primaryTypographyProps={{
                    fontSize: "28px",
                    fontFamily: "Cabin",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <ImageHeaderPageHamgurge
            image="/image@2x.png"
            onClick={toggleDrawer(anchor, true)}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
