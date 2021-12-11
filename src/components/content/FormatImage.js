import { find } from "lodash";

const FormatImage = (image,ref) => {

const imageObject = find(image,{"id":ref});
const alt = imageObject?.alt||'';
let url = imageObject?.media?.image?.primary?.complete[0].url||'';
if(url ===''){
    url = imageObject?.externalembed?.url||''
}
// console.log(url)
const caption = imageObject?.caption||'';
// console.log(alt)
// console.log(image[4])
return {'alt':alt,'url':url,'caption':caption}

//   const index = findIndex(image, ref);
//   return image[index].media.image.primary.complete[0].url;
};
export default FormatImage;
