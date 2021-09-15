import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.locale('zh-cn');

dayjs.extend(customParseFormat);
