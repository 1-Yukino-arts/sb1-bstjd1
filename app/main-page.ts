import { EventData, Page, ImageSource } from '@nativescript/core';
import { ImageOrganizerViewModel } from './view-models/image-organizer-view-model';

let viewModel: ImageOrganizerViewModel;

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    viewModel = new ImageOrganizerViewModel();
    page.bindingContext = viewModel;
}

export function onAddImage() {
    // This is a placeholder for image picking functionality
    // In a real app, you would use a image-picker plugin
    const imageSource = ImageSource.fromFileOrResource('~/assets/placeholder.png');
    viewModel.addImage(imageSource);
}