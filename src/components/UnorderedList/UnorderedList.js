import { List } from "./style";
import Paragraph from "../Paragraph/Paragraph";

const UnorderedList = ({ children }) => {
  return (
    <List>
      <Paragraph>{children}</Paragraph>
    </List>
  );
};

export default UnorderedList;
