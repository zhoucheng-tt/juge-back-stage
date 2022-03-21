
import * as demo from "./demo/demo.js";
import * as login from "./login/login.js";
import * as directoryManagement from "./directoryManagement/directoryManagement.js";
import * as articleManagement from "./articleManagement/articleManagement.js";

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
    $login: {
      get () {
        return login;
      }
    },
    $directoryManagement: {
      get () {
        return directoryManagement;
      }
    },
    $articleManagement: {
      get () {
        return articleManagement;
      }
    },
  });
};

export default { install };
