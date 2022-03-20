
import * as demo from "./demo/demo.js";

const install = function (Vue) {
  if (install.installed) {
    return (install.installed = true);
  }
  Object.defineProperties(Vue.prototype, {
    $demo: {
      get () {
        return demo;
      }
    },
  });
};

export default { install };
