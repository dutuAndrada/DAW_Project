
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faUserGraduate, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBook, faUserGraduate, faChartLine)

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    FontAwesomeIcon
  },
  data() {
    return {
      logoUrl:require('@/assets/logo_purple.png'), 
    };
  },
};