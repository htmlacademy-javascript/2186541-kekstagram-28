import {exit} from './data.js';
import {createMiniature} from './miniature.js';
import './full-size.js';
import './upload-modal.js';
import './scale.js';
import './filters.js';
import './upload-form-validation.js';
import { createGallery } from './gallery.js';

createMiniature(exit);
createGallery(exit);
