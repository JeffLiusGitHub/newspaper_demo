import { findIndex } from "lodash";

const FormatImage = (image,ref) => {
//   const image = data._embedded.mediaEmbedded;
  const index = findIndex(image, ref);
  return image[index].media.image.primary.complete[0].url;
};
export default FormatImage;
