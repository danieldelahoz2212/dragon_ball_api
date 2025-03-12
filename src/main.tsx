import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")!).render(
<SnackbarProvider
  preventDuplicate
  autoHideDuration={6000}
  anchorOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
>
    <App />
  </SnackbarProvider>
);
