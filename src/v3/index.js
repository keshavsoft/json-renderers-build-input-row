import registerGlobal from "./register/index.js";
import inputOnly from "./inputOnly/index.js";
import inputWithLabel from "./inputWithLabel/index.js";
import inputWithLabelButton from "./inputWithLabelButton/index.js";

const RENDERER_MAP = {
    input: inputOnly,
    inputOnly: inputOnly,
    inputWithLabel: inputWithLabel,
    inputWithLabelButton: inputWithLabelButton
};

const render = ({
    type = "inputWithLabel",
    options = {},
    inType,
    inOptions
} = {}) => {
    const localType = inType ?? type;
    const localOptions = inOptions ?? options;

    const renderer = RENDERER_MAP[localType] || inputWithLabel;
    return renderer({ inOptions: localOptions, options: localOptions });
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
