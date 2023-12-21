import { useState } from "react";
import { Banner } from "./components/banner";
import { ConfigureSnippet } from "./components/configure-snippet";
export type Theme = "dark" | "light" | "system";

export type ConfigState = {
  base: string
  theme: Theme;
  fixed: boolean;
};

function App() {
  const [state, setState] = useState<ConfigState>({
    theme: "system",
    base: window.location.origin,
    fixed: false,
  });

  return (
    <>
      <Banner fixed={state.fixed} theme={state.theme} />
      <section className="py-24 space-y-12">
        <div className="mx-auto w-full max-w-screen-md space-y-12">
          <div className="space-y-8 text-center">
            <h1 className="font-medium text-8xl tracking-tighter">
              <span className="bg-green-700 text-white px-2">#Ceasefire</span>{" "} NOW!
            </h1>
            <p className="text-xl">
              Stand in solidarity with the people of Palestine and embed this banner on your
              website.
            </p>
          </div>
          <ConfigureSnippet state={state} onChange={setState} />
        </div>
      </section>
    </>
  );
}

export default App;
