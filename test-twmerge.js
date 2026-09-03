import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['text-small', 'text-medium', 'text-large', 'caption-small', 'caption-medium', 'caption-big', 'heading-tiny', 'heading-small', 'heading-medium', 'heading-large', 'heading-giant', 'heading-big'] }],
      'text-color': [{ text: ['brand-text-on-solid', 'text-primary', 'text-inverse-primary', 'destructive-text-on-solid', 'subtle-text-on-solid', 'secondary-text-on-solid'] }],
      'rounded': [{ rounded: ['radius-lg', 'radius-md', 'radius-sm', 'radius-xl', 'radius-2xl', 'radius-full', 'radius-none'] }],
      'bg-color': [{ bg: ['brand-solid-default', 'secondary-solid-default', 'subtle-solid-default', 'destructive-solid-default', 'surface-inverse-default'] }]
    }
  }
});
console.log(customTwMerge('bg-brand-solid-default text-brand-text-on-solid rounded-radius-lg text-text-small'));
