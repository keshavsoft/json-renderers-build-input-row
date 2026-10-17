import render from "../../docs/dist/v1/min.js";
import { buildSpecElement } from "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const startFunc = () => {
  try {
    const spec = render({
      type: "inputWithLabelButton",
      options: {
        label: "Search:",
        type: "search",
        placeholder: "Type keyword...",
        id: "labeledInputButtonId",
        class: "form-control",
        buttonText: "Find",
        buttonClass: "btn btn-primary text-nowrap",
        buttonId: "searchSubmitBtnId"
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
    console.error("Error rendering inputWithLabelButton sample:", err);
  }
};

startFunc();
