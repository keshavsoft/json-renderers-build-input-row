import spec from "../spec.json" with { type: "json" };

const inputOnly = ({ inOptions = {} } = {}) => {
    const localOptions = inOptions;

    const inputSpec = structuredClone(spec.input);

    if (localOptions?.placeholder) {
        inputSpec.attributes.placeholder = localOptions.placeholder;
    }

    if (localOptions?.class) {
        inputSpec.attributes.class = localOptions.class;
    }

    if (localOptions?.id) {
        inputSpec.attributes.id = localOptions.id;
    }

    if (localOptions?.name) {
        inputSpec.attributes.name = localOptions.name;
    }

    if (localOptions?.type) {
        inputSpec.attributes.type = localOptions.type;
    }

    if (localOptions?.value) {
        inputSpec.attributes.value = localOptions.value;
    }

    return inputSpec;
};

export { inputOnly };
export default inputOnly;
