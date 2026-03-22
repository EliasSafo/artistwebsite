import imageUrlBuilder from '@sanity/image-url';

const SANITY_PROJECT_ID = 'vrrwwb5o';
const SANITY_DATASET = 'production';

const builder = imageUrlBuilder({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
});

export function urlFor(source: any) {
  return builder.image(source).url();
}

