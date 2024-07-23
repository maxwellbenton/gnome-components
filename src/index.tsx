import {
  ChestWebComponent,
  GnomeWebComponent,
  MushroomWebComponent,
} from "./web-components";

customElements.define("gc-mushroom", MushroomWebComponent);
customElements.define("gc-chest", ChestWebComponent);
customElements.define("gc-gnome", GnomeWebComponent);

console.warn("Gnome elements available: gc-mushroom, gc-chest, gc-gnome");
