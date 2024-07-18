// GlobalLoading.js
import React from "react";
import { useLoading } from "./LoadingComponent";

import Box from "@mui/material/Box";
import { Dialog, DialogContent } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

const GlobalLoading = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <Dialog open={isLoading}>
      <DialogContent>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
          }}
        >
          <CircularProgress />
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default GlobalLoading;
