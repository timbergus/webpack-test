import fonts from './../styles/fonts.styl';
import background from './../styles/background.styl';

import content from './content';

document.write(require('./../templates/index.jade')({ content }));
