"use client";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { GoogleSignInButton } from "./components/GoogleSignInButton";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import LinearProgress from "@mui/material/LinearProgress";

export default function WelcomePage(props) {
  const { data: session, status } = useSession();

  return (
    <>
      <SessionProvider session={props.session}>
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
              <div>
                <h1>Welcome, {session.user.name}!</h1>
              </div>
            )}
          </Box>
        </Container>
      </SessionProvider>
    </>
  );
}
