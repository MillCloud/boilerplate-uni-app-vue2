import dayjs from 'dayjs';
import Vue from 'vue';
import 'dayjs/locale/zh-cn';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.locale('zh-cn');

dayjs.extend(customParseFormat);

Vue.prototype.$dayjs = dayjs;

export default dayjs;
