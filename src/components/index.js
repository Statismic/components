import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import StatismicButton from "./Button.vue";
import StatismicFormNumber from "./form/Number.vue";
import StatismicText from "./form/Text.vue";
import StatismicTextArea from "./form/TextArea.vue";

const components = {
  StatismicButton,
  StatismicFormNumber,
  StatismicText,
  StatismicTextArea
};

export default {
  install(Vue) {
    library.add(faSearch);
    Vue.component("fa", FontAwesomeIcon);

    Object.keys(components).forEach(name => {
      Vue.component(name, components[name]);
    });
  }
};
