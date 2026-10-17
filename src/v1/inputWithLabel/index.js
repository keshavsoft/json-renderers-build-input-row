import spec from "../spec.json" with { type: "json" };
import inputOnly from "../inputOnly/index.js";

const inputWithLabel = ({ inOptions = {} } = {}) => {
    const localOptions = inOptions;

    const rowWrapper = structuredClone(spec.rowWrapper);
    const labelSpec = structuredClone(spec.label);

    const inputId = localOptions?.id ?? spec.input.attributes.id;

    if (localOptions?.wrapperClass) {
        rowWrapper.attributes.class = localOptions.wrapperClass;
    }

    if (localOptions?.label) {
        labelSpec.textContent = localOptions.label;
    }

    if (localOptions?.labelClass) {
        labelSpec.attributes.class = localOptions.labelClass;
    }

    labelSpec.attributes.for = inputId;

    const inputSpec = inputOnly({
        inOptions: {
            ...localOptions,
            id: inputId
        }
    });

    rowWrapper.children = [labelSpec, inputSpec];

    return rowWrapper;
};

export { inputWithLabel };
export default inputWithLabel;
