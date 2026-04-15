import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error) {
    console.error("[mise]", error);
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24, fontFamily: "system-ui, sans-serif", color: "#b00020", maxWidth: 560 }}>
          <h1 style={{ fontSize: 18, margin: "0 0 12px" }}>This app hit an error</h1>
          <pre style={{ whiteSpace: "pre-wrap", fontSize: 13, margin: 0, color: "#333" }}>
            {String(this.state.error)}
          </pre>
          <p style={{ fontSize: 13, marginTop: 16, color: "#555" }}>
            Open the browser console for the full stack. Use <strong>http://127.0.0.1:5173/</strong> if{" "}
            <code>localhost</code> fails in Simple Browser.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

function showBootFailure(rootEl, err) {
  console.error("[mise] boot failed", err);
  rootEl.replaceChildren();
  const wrap = document.createElement("div");
  wrap.style.cssText =
    "padding:24px;font-family:system-ui,sans-serif;max-width:520px;color:#b00020";
  wrap.innerHTML = `<h2 style="font-size:16px;margin:0 0 10px">Couldn’t start the app</h2>
<pre style="white-space:pre-wrap;font-size:13px;color:#333;margin:0 0 12px;border:0">${String(err)}</pre>
<p style="font-size:13px;color:#555;margin:0;line-height:1.5">If this stays blank in Cursor’s Simple Browser, run <code style="background:#f0f0f0;padding:2px 6px;border-radius:4px">npm run build && npm run preview</code> and open the printed URL, or try <strong>http://127.0.0.1:5173/</strong> with <code>npm run dev</code>.</p>`;
  rootEl.appendChild(wrap);
}

const rootEl = document.getElementById("root");
if (!rootEl) {
  document.body.textContent = "Missing #root element";
} else {
  let bootAborted = false;
  const bootTimeout = setTimeout(() => {
    bootAborted = true;
    showBootFailure(
      rootEl,
      new Error(
        "Timed out loading the app. Start the dev server with npm run dev, or run npm run build && npm run preview and open that URL.",
      ),
    );
  }, 12_000);

  const done = () => clearTimeout(bootTimeout);

  import("../mise-en-place.jsx")
    .then(({ default: App }) => {
      if (bootAborted) return;
      done();
      try {
        createRoot(rootEl).render(
          <StrictMode>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </StrictMode>
        );
      } catch (e) {
        showBootFailure(rootEl, e);
      }
    })
    .catch((err) => {
      if (bootAborted) return;
      done();
      showBootFailure(rootEl, err);
    });
}
