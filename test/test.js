import render, { inputOnly, inputWithLabel, inputWithLabelButton } from "../src/index.js";

console.log("--- Testing json-renderers-build-input-row ---");

// Test 1: inputOnly
console.log("\n1. Testing 'inputOnly' flavour...");
const spec1 = render({
    type: "inputOnly",
    options: {
        placeholder: "Search items...",
        id: "mySearchInput"
    }
});
console.log("Result:", JSON.stringify(spec1, null, 2));

if (spec1.tagName !== "input" || spec1.attributes.id !== "mySearchInput") {
    throw new Error("Test 1 Failed: Expected input element");
}
console.log("Test 1 Passed!");

// Test 2: inputWithLabel
console.log("\n2. Testing 'inputWithLabel' flavour...");
const spec2 = render({
    type: "inputWithLabel",
    options: {
        label: "Search Products:",
        placeholder: "Type to filter...",
        id: "productSearchInput"
    }
});
console.log("Result:", JSON.stringify(spec2, null, 2));

if (spec2.tagName !== "div" || spec2.children.length !== 2) {
    throw new Error("Test 2 Failed: Expected wrapper with label and input");
}
if (spec2.children[0].tagName !== "label" || spec2.children[1].tagName !== "input") {
    throw new Error("Test 2 Failed: Expected children [label, input]");
}
if (spec2.children[0].textContent !== "Search Products:") {
    throw new Error("Test 2 Failed: Expected label text");
}
console.log("Test 2 Passed!");

// Test 3: inputWithLabelButton
console.log("\n3. Testing 'inputWithLabelButton' flavour...");
const spec3 = render({
    type: "inputWithLabelButton",
    options: {
        label: "Filter:",
        placeholder: "Keyword...",
        id: "keywordSearchInput",
        buttonText: "Find",
        buttonClass: "btn btn-outline-primary"
    }
});
console.log("Result:", JSON.stringify(spec3, null, 2));

if (spec3.tagName !== "div" || spec3.children.length !== 3) {
    throw new Error("Test 3 Failed: Expected wrapper with label, input, and button");
}
if (spec3.children[0].tagName !== "label" || spec3.children[1].tagName !== "input" || spec3.children[2].tagName !== "button") {
    throw new Error("Test 3 Failed: Expected children [label, input, button]");
}
if (spec3.children[2].textContent !== "Find") {
    throw new Error("Test 3 Failed: Expected button text 'Find'");
}
console.log("Test 3 Passed!");

console.log("\n All 3 flavours PASSED successfully!");
