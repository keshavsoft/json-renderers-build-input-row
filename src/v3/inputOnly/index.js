import spec from "./spec.json" with { type: "json" };

const inputOnly = ({ inOptions = {}, options = {} } = {}) => {
    const localOptions = inOptions && Object.keys(inOptions).length > 0 ? inOptions : options;
    const input = structuredClone(spec);

    if (localOptions.placeholder) input.attributes.placeholder = localOptions.placeholder;
    if (localOptions.class) input.attributes.class = localOptions.class;
    if (localOptions.id) input.attributes.id = localOptions.id;
    if (localOptions.name) input.attributes.name = localOptions.name;
    if (localOptions.type) input.attributes.type = localOptions.type;
    if (localOptions.value) input.attributes.value = localOptions.value;

    return input;
};

export { spec, inputOnly };
export default inputOnly;
