import "./index.css";
import "remixicon/fonts/remixicon.css";
import { render } from "solid-js/web";
import "solid-devtools";

import { Route, Router } from "@solidjs/router";
import Home from "./Home";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <div class="p-16 max-w-7xl mx-auto">
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  ),
  root!,
);
