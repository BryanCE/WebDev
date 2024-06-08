"use client";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import { GoogleSignInButton } from "./components/GoogleSignInButton";
import { useSession } from "next-auth/react";
import LinearProgress from "@mui/material/LinearProgress";
import Image from "next/image";

const backgroundComponent = (
  <Image
    src="/BlackBronzeAgeBoatLogo.png"
    alt="Background Image"
    fill
    style={{
      objectFit: "cover",
    }}
  />
);

export default function WelcomePage(props) {
  const { data: session, status } = useSession();

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {status === "loading" && (
            <div>
              <h1>Loading...</h1> <LinearProgress sx={{ width: 500 }} />
            </div>
          )}
          {status === "unauthenticated" && <GoogleSignInButton />}
          {status === "authenticated" && (
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
                <h1>Welcome, {session.user.name}!</h1>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    position: "relative",
                    width: "700px",
                    height: "700px",
                  }}
                >
                  <Image
                    src="/BlackBronzeAgeBoatLogo.png"
                    alt="Background Image"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </>
  );
}
