import { defaultCipherList } from "constants"

interface Props {
    children: React.ReactNode;
  }



  const TagP = ({ children }: Props): JSX.Element => {
    return <p>{children}</p>;
  };
  
  export default TagP;
  