import { get } from "lodash";
const FormatContributors = (data) => {
  let contributorArray = [];
  for (let i = 0; i < data._embedded.contributors.length; i++) {
    contributorArray.push(
      get(data, `_embedded.contributors[${i}].names.full`, "")
    );
  }
  return contributorArray;
};
export default FormatContributors;
