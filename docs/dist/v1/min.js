const h = {
  version: "1.1.0",
  name: "json-renderers-build-input-row"
}, y = (r) => {
  const t = r;
  if (typeof globalThis > "u" || !t) return;
  globalThis.ks ?? (globalThis.ks = {});
  const e = typeof t == "function" ? t : t.render;
  globalThis.ks.jsonRenderersBuildInputRow = {
    meta: h,
    render: e,
    ...typeof t == "object" ? t : {}
  };
}, c = [
  "input",
  "inputOnly",
  "inputWithLabel",
  "inputWithLabelButton"
], w = ({ inConfig: r } = {}) => {
  const t = r;
  if (!t || typeof t != "object")
    throw console.error("Config must be an object"), new TypeError("Config must be an object");
  if (t.type && (typeof t.type != "string" || !c.includes(t.type)))
    throw console.error(`type must be one of: ${c.join(", ")}`), new Error(`type must be one of: ${c.join(", ")}`);
  if (t.options && typeof t.options != "object")
    throw console.error("options must be an object"), new TypeError("options must be an object");
  return !0;
}, C = {
  tagName: "input",
  attributes: {
    type: "search",
    placeholder: "Search...",
    class: "form-control",
    id: "searchInputId"
  }
}, m = {
  tagName: "label",
  textContent: "Search:",
  attributes: {
    class: "form-label mb-0 text-nowrap fw-semibold",
    for: "searchInputId"
  }
}, g = {
  tagName: "button",
  textContent: "Search",
  attributes: {
    type: "button",
    class: "btn btn-primary text-nowrap",
    id: "searchButtonId"
  }
}, W = {
  tagName: "div",
  attributes: {
    class: "d-flex align-items-center gap-2"
  },
  children: []
}, u = {
  input: C,
  label: m,
  button: g,
  rowWrapper: W
}, i = ({ inOptions: r = {} } = {}) => {
  const t = r, e = structuredClone(u.input);
  return t != null && t.placeholder && (e.attributes.placeholder = t.placeholder), t != null && t.class && (e.attributes.class = t.class), t != null && t.id && (e.attributes.id = t.id), t != null && t.name && (e.attributes.name = t.name), t != null && t.type && (e.attributes.type = t.type), t != null && t.value && (e.attributes.value = t.value), e;
}, l = ({ inOptions: r = {} } = {}) => {
  const t = r, e = structuredClone(u.rowWrapper), n = structuredClone(u.label), s = (t == null ? void 0 : t.id) ?? u.input.attributes.id;
  t != null && t.wrapperClass && (e.attributes.class = t.wrapperClass), t != null && t.label && (n.textContent = t.label), t != null && t.labelClass && (n.attributes.class = t.labelClass), n.attributes.for = s;
  const o = i({
    inOptions: {
      ...t,
      id: s
    }
  });
  return e.children = [n, o], e;
}, f = ({ inOptions: r = {} } = {}) => {
  const t = r, e = structuredClone(u.rowWrapper), n = structuredClone(u.label), s = structuredClone(u.button), o = (t == null ? void 0 : t.id) ?? u.input.attributes.id, a = (t == null ? void 0 : t.buttonId) ?? u.button.attributes.id;
  t != null && t.wrapperClass && (e.attributes.class = t.wrapperClass), t != null && t.label && (n.textContent = t.label), t != null && t.labelClass && (n.attributes.class = t.labelClass), n.attributes.for = o;
  const b = i({
    inOptions: {
      ...t,
      id: o
    }
  });
  return t != null && t.buttonText && (s.textContent = t.buttonText), t != null && t.buttonClass && (s.attributes.class = t.buttonClass), t != null && t.buttonType && (s.attributes.type = t.buttonType), s.attributes.id = a, e.children = [n, b, s], e;
}, j = {
  input: i,
  inputOnly: i,
  inputWithLabel: l,
  inputWithLabelButton: f
}, S = ({
  type: r = "inputWithLabel",
  options: t = {},
  inType: e,
  inOptions: n,
  showLog: s = !1
} = {}) => {
  const o = e ?? r, a = n ?? t, b = s;
  w({ inConfig: { type: o, options: a } });
  const p = j[o];
  if (!p)
    throw new Error(`Flavour for type "${o}" not found.`);
  const d = p({ inOptions: a });
  return b && console.log("json-renderers-build-input-row output:", d), d;
};
y({
  render: S,
  inputOnly: i,
  inputWithLabel: l,
  inputWithLabelButton: f
});
export {
  S as default,
  i as inputOnly,
  l as inputWithLabel,
  f as inputWithLabelButton,
  S as render
};
