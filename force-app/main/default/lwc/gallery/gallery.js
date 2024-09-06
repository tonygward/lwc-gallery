import { LightningElement } from 'lwc';

export default class Gallery extends LightningElement {
    components = [
        {
            name: 'lightning:accordion',
            description: 'A simple accordion'
        },
        {
            name: 'lightning:alert',
            description: 'create an alert'
        },
        {
            name: 'lightning:avatar',
            description: 'create an avatar'
        },
        {
            name: 'lightning:badge',
            description: 'create a badge'
        },
        {
            name: 'lightning:breadcrumb',
            description: 'create a breadcrumb'
        }
    ];
}