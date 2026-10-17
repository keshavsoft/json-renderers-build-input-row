const VALID_TYPES = [
    "input",
    "inputOnly",
    "inputWithLabel",
    "inputWithLabelButton"
];

const guardFunc = ({ inConfig } = {}) => {
    const localConfig = inConfig;

    if (!localConfig || typeof localConfig !== "object") {
        console.error("Config must be an object");
        throw new TypeError("Config must be an object");
    }

    if (localConfig.type && (typeof localConfig.type !== "string" || !VALID_TYPES.includes(localConfig.type))) {
        console.error(`type must be one of: ${VALID_TYPES.join(", ")}`);
        throw new Error(`type must be one of: ${VALID_TYPES.join(", ")}`);
    }

    if (localConfig.options && typeof localConfig.options !== "object") {
        console.error("options must be an object");
        throw new TypeError("options must be an object");
    }

    return true;
};

export { guardFunc, VALID_TYPES };
export default guardFunc;
