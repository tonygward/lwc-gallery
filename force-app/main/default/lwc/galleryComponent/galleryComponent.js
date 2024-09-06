import { LightningElement, api } from 'lwc';

export default class GalleryComponent extends LightningElement {
    @api name;
    @api description;

    get detailUrl() {
        return '/lightning/cmp/c__galleryComponentDetail';
    }
}