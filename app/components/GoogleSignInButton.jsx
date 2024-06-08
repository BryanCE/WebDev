"use client";

import { signIn } from "next-auth/react";
import { Button, IconButton } from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

export const GoogleSignInButton = () => {
  const handleClick = () => {
    signIn("google", { callbackUrl: "/Map" });
  };

  return (
    <IconButton variant="outlined" color="primary" onClick={handleClick}>
      <FingerprintIcon />
      Sign in with Google
    </IconButton>
  );
};
