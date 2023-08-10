import * as C from "../../theme/components";

const Card = ({ title, description, imageUrl }) => {
  return (
      <C.CardWrapper>
        <C.CardImage src={imageUrl} alt="Imagem do Card" />
        <C.CardTitle>{title}</C.CardTitle>
        <C.CardDescription>{description}</C.CardDescription>
      </C.CardWrapper>
  );
};

export default Card;
