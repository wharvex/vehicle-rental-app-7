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
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { DirectionsCar } from "@mui/icons-material";

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

  type ListItemTuple = [string, string, React.ReactElement];

  const drawerContents: ListItemTuple[] = [
    ["Browse", "/browse_choose_lots", <TravelExploreIcon key="1" />],
    [
      (isLoaded && user && "Dashboard") || "Login",
      "/dashboard",
      (isLoaded && user && <UserButton afterSignOutUrl="/" />) || <LoginIcon />,
    ],
    ["See Cars", "/test-db-cars", <DirectionsCar key="2" />],
  ];

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {drawerContents.map((item, index) => (
          <Link key={item[0]} href={item[1]}>
            <ListItem key={item[0]} disablePadding>
              <ListItemButton>
                <ListItemIcon key={item[0]}>
                  {React.cloneElement(item[2], { fontSize: "large" })}
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
