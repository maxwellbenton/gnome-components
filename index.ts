import {
  ChestWebComponent,
  GnomeWebComponent,
  MushroomWebComponent,
} from "./src/web-components";

customElements.define("gc-mushroom", MushroomWebComponent);
customElements.define("gc-chest", ChestWebComponent);
customElements.define("gc-gnome", GnomeWebComponent);
