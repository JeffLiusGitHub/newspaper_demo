import { find } from "lodash";

const FormatImage = (image, ref) => {
  const imageObject = find(image, { id: ref });
  const alt = imageObject?.alt || "";
  let url = imageObject?.media?.image?.primary?.complete[0].url || "";
  if (url === "") {
    url = imageObject?.externalembed?.url || "";
  }
  const caption = imageObject?.caption || " ";
  return { alt: alt, url: url, caption: caption };
};

export default FormatImage;
