const u = {
  version: "1.2.0",
  name: "json-renderers-build-input-row"
}, b = (a) => {
  const s = a;
  if (typeof globalThis > "u" || !s) return;
  globalThis.ks ?? (globalThis.ks = {});
  const t = typeof s == "function" ? s : s.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: u,
    render: t,
    ...typeof s == "object" ? s : {}
  };
}, p = "input", d = {
  type: "search",
  placeholder: "Search...",
  class: "form-control",
  id: "searchInputId"
}, h = {
  tagName: p,
  attributes: d
}, i = ({ inOptions: a = {}, options: s = {} } = {}) => {
  const t = a && Object.keys(a).length > 0 ? a : s, e = structuredClone(h);
  return t.placeholder && (e.attributes.placeholder = t.placeholder), t.class && (e.attributes.class = t.class), t.id && (e.attributes.id = t.id), t.name && (e.attributes.name = t.name), t.type && (e.attributes.type = t.type), t.value && (e.attributes.value = t.value), e;
}, f = "div", m = {
  class: "d-flex align-items-center gap-2"
}, y = [
  {
    tagName: "label",
    textContent: "Search:",
    attributes: {
      class: "form-label mb-0 text-nowrap fw-semibold",
      for: "searchInputId"
    }
  },
  {
    tagName: "input",
    attributes: {
      type: "search",
      placeholder: "Search...",
      class: "form-control",
      id: "searchInputId"
    }
  }
], g = {
  tagName: f,
  attributes: m,
  children: y
}, c = ({ inOptions: a = {}, options: s = {} } = {}) => {
  const t = a && Object.keys(a).length > 0 ? a : s, e = structuredClone(g), n = e.children[0], l = e.children[1];
  return t.label && (n.textContent = t.label), t.id && (n.attributes.for = t.id, l.attributes.id = t.id), t.placeholder && (l.attributes.placeholder = t.placeholder), t.class && (l.attributes.class = t.class), t.name && (l.attributes.name = t.name), t.type && (l.attributes.type = t.type), t.wrapperClass && (e.attributes.class = t.wrapperClass), t.labelClass && (n.attributes.class = t.labelClass), e;
}, C = "div", x = {
  class: "d-flex align-items-center gap-2"
}, I = [
  {
    tagName: "label",
    textContent: "Search:",
    attributes: {
      class: "form-label mb-0 text-nowrap fw-semibold",
      for: "searchInputId"
    }
  },
  {
    tagName: "input",
    attributes: {
      type: "search",
      placeholder: "Search...",
      class: "form-control",
      id: "searchInputId"
    }
  },
  {
    tagName: "button",
    textContent: "Search",
    attributes: {
      type: "button",
      class: "btn btn-primary text-nowrap",
      id: "searchButtonId"
    }
  }
], N = {
  tagName: C,
  attributes: x,
  children: I
}, o = ({ inOptions: a = {}, options: s = {} } = {}) => {
  const t = a && Object.keys(a).length > 0 ? a : s, e = structuredClone(N), n = e.children[0], l = e.children[1], r = e.children[2];
  return t.label && (n.textContent = t.label), t.id && (n.attributes.for = t.id, l.attributes.id = t.id), t.placeholder && (l.attributes.placeholder = t.placeholder), t.class && (l.attributes.class = t.class), t.name && (l.attributes.name = t.name), t.type && (l.attributes.type = t.type), t.buttonText && (r.textContent = t.buttonText), t.buttonClass && (r.attributes.class = t.buttonClass), t.buttonId && (r.attributes.id = t.buttonId), t.wrapperClass && (e.attributes.class = t.wrapperClass), t.labelClass && (n.attributes.class = t.labelClass), e;
}, w = {
  input: i,
  inputOnly: i,
  inputWithLabel: c,
  inputWithLabelButton: o
}, $ = ({
  type: a = "inputWithLabel",
  options: s = {},
  inType: t,
  inOptions: e
} = {}) => {
  const n = t ?? a, l = e ?? s;
  return (w[n] || c)({ inOptions: l, options: l });
};
b({
  render: $,
  inputOnly: i,
  inputWithLabel: c,
  inputWithLabelButton: o
});
export {
  $ as default,
  i as inputOnly,
  c as inputWithLabel,
  o as inputWithLabelButton,
  $ as render
};
