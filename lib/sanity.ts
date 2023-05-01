import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanityClient = createClient({
  projectId: "81r8tdl0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: string) => builder.image(source);

export default sanityClient;
