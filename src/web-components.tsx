import ReactDOM from "react-dom/client";
import { MushroomProps, Mushroom } from "./components/Mushroom";
import { normalizeAttribute } from "./services/components";
import { Chest, ChestProps } from "./components/Chest";
import { Gnome, GnomeProps } from "./components/Gnome";


function getPropsFromAttributes<T>(component: HTMLElement): T {
  const props: Record<string, string> = {};

  for (let index = 0; index < component.attributes.length; index++) {
    const attribute = component.attributes[index];
    props[normalizeAttribute(attribute.name)] = attribute.value;
  }

  return props as T;
}

export class MushroomWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = getPropsFromAttributes<MushroomProps>(this);
    const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
    root.render(<Mushroom {...props} />);
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  attributeChangedCallback(
    name: unknown,
    oldValue: unknown,
    newValue: unknown
  ) {
    console.log("attribute changed", name, oldValue, newValue, this);
  }
}

export class ChestWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = getPropsFromAttributes<ChestProps>(this);
    const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
    root.render(<Chest {...props} />);
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }
  
  attributeChangedCallback(
    name: unknown,
    oldValue: unknown,
    newValue: unknown
  ) {
    console.log("attribute changed", name, oldValue, newValue, this);
  }
}

export class GnomeWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = getPropsFromAttributes<GnomeProps>(this);
    const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
    root.render(<Gnome {...props} />);
  }


  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }
  
  attributeChangedCallback(
    name: unknown,
    oldValue: unknown,
    newValue: unknown
  ) {
    console.log("attribute changed", name, oldValue, newValue, this);
  }
}
