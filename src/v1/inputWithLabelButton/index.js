import spec from "../spec.json" with { type: "json" };
import inputOnly from "../inputOnly/index.js";

const inputWithLabelButton = ({ inOptions = {} } = {}) => {
    const localOptions = inOptions;

    const rowWrapper = structuredClone(spec.rowWrapper);
    const labelSpec = structuredClone(spec.label);
    const buttonSpec = structuredClone(spec.button);

    const inputId = localOptions?.id ?? spec.input.attributes.id;
    const buttonId = localOptions?.buttonId ?? spec.button.attributes.id;

    if (localOptions?.wrapperClass) {
        rowWrapper.attributes.class = localOptions.wrapperClass;
    }

    // Label configuration
    if (localOptions?.label) {
        labelSpec.textContent = localOptions.label;
    }

    if (localOptions?.labelClass) {
        labelSpec.attributes.class = localOptions.labelClass;
    }

    labelSpec.attributes.for = inputId;

    // Input configuration
    const inputSpec = inputOnly({
        inOptions: {
            ...localOptions,
            id: inputId
        }
    });

    // Button configuration
    if (localOptions?.buttonText) {
        buttonSpec.textContent = localOptions.buttonText;
    }

    if (localOptions?.buttonClass) {
        buttonSpec.attributes.class = localOptions.buttonClass;
    }

    if (localOptions?.buttonType) {
        buttonSpec.attributes.type = localOptions.buttonType;
    }

    buttonSpec.attributes.id = buttonId;

    rowWrapper.children = [labelSpec, inputSpec, buttonSpec];

    return rowWrapper;
};

export { inputWithLabelButton };
export default inputWithLabelButton;
