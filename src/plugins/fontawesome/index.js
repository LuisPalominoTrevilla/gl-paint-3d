import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faCube,
  faGlobe,
  faSquare,
  faIceCream,
  faBrush,
  faCircle,
  faGem,
  faEdit,
  faTrashAlt,
  faObjectGroup,
  faFileCode,
  faRing,
  faLifeRing
} from '@fortawesome/free-solid-svg-icons';

library.add(faCube);
library.add(faGlobe);
library.add(faIceCream);
library.add(faSquare);
library.add(faBrush);
library.add(faCircle);
library.add(faGem);
library.add(faEdit);
library.add(faTrashAlt);
library.add(faObjectGroup);
library.add(faFileCode);
library.add(faRing);
library.add(faLifeRing);

Vue.component('font-awesome-icon', FontAwesomeIcon);
