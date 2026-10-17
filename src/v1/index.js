import registerGlobal from "./register/index.js";
import guardFunc from "./guard/index.js";
import inputOnly from "./inputOnly/index.js";
import inputWithLabel from "./inputWithLabel/index.js";
import inputWithLabelButton from "./inputWithLabelButton/index.js";

const FLAVOUR_MAP = {
    input: inputOnly,
    inputOnly: inputOnly,
    inputWithLabel: inputWithLabel,
    inputWithLabelButton: inputWithLabelButton
};

const render = ({
    type = "inputWithLabel",
    options = {},
    inType,
    inOptions,
    showLog = false
} = {}) => {
    const localType = inType ?? type;
    const localOptions = inOptions ?? options;
    const localShowLog = showLog;

    guardFunc({ inConfig: { type: localType, options: localOptions } });

    const builder = FLAVOUR_MAP[localType];
    if (!builder) {
        throw new Error(`Flavour for type "${localType}" not found.`);
    }

    const createdSpec = builder({ inOptions: localOptions });

    if (localShowLog) {
        console.log("json-renderers-build-input-row output:", createdSpec);
    }

    return createdSpec;
};

registerGlobal({
    render,
    inputOnly,
    inputWithLabel,
    inputWithLabelButton
});

export {
    render,
    inputOnly,
    inputWithLabel,
    inputWithLabelButton
};

export default render;
