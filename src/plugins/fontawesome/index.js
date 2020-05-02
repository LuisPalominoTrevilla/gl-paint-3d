import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faCube,
  faGlobe,
  faSquare,
  faIceCream,
  faBrush
} from '@fortawesome/free-solid-svg-icons';

library.add(faCube);
library.add(faGlobe);
library.add(faIceCream);
library.add(faSquare);
library.add(faBrush);

Vue.component('font-awesome-icon', FontAwesomeIcon);
