import render from "../../docs/dist/v2/min.js";
import { buildSpecElement } from "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const startFunc = () => {
  try {
    const spec = render({
      type: "inputOnly",
      options: {
        type: "search",
        placeholder: "Search items, batches, godowns...",
        id: "inputOnlyId",
        class: "form-control"
      }
    });

    const specOutput = document.getElementById("spec-output");
    if (specOutput) {
      specOutput.textContent = JSON.stringify(spec, null, 2);
    }

    const target = document.getElementById("render-target");
    if (target && buildSpecElement) {
      const dom = buildSpecElement(spec);
      target.replaceChildren(...(Array.isArray(dom) ? dom : [dom]));
    }
  } catch (err) {
    console.error("Error rendering inputOnly sample:", err);
  }
};

startFunc();
