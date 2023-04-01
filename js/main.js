import {exit} from './data.js';
import {createMiniature} from './miniature.js';
import './full-size.js';
import './upload-modal.js';
import { createGallery } from './gallery.js';

createMiniature(exit);
createGallery(exit);
