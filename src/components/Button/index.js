import { ButtonContainer } from "./styles";

export default function Input(props) {

    const { onClick } = props;

    return (
        <ButtonContainer onClick={onClick}>
            {props.children}
        </ButtonContainer>
    );
}
