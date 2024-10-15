import Paragraph from "../Paragraph/Paragraph";

const TextWithChildrenComponent = ({ title, text, children }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <Paragraph>{text}</Paragraph>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TextWithChildrenComponent;
