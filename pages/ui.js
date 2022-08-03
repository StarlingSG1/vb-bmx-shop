import {
  BigParagraph,
  BorderedButton,
  Button,
  Input,
  IntermediateParagraph,
  Paragraph,
  Price,
  ReversedBorderedButton,
  SubTitle,
  TextLink,
  Title,
} from "../components/atoms";
import { Header } from "../components/molecules";
export default function Ui() {
  return (
    <section className="ml-10 mt-10">
      <Title>Buttons</Title>
      <div className="flex items-center gap-8 mb-12">
        <Button>Button</Button>
        <BorderedButton>BorderedButton</BorderedButton>
        <ReversedBorderedButton>ReversedBorderedButton</ReversedBorderedButton>
      </div>

      <Title>Texts</Title>
      <div className="flex items-center gap-8 mb-12">
        <Title>Title</Title>
        <SubTitle>SubTitle</SubTitle>
        <IntermediateParagraph>IntermediateParagraph</IntermediateParagraph>
        <BigParagraph>BigParagraph</BigParagraph>
        <TextLink>TextLink</TextLink>
        <Price>Price</Price>
        <Paragraph>Paragraph</Paragraph>
      </div>

      <Title>Inputs</Title>
      <div className="flex items-center gap-8 mb-12">
        <Input placeholder={"Input"} />
      </div>

      <Title>Header</Title>
      <Header></Header>
    </section>
  );
}
