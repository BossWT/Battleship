import { useState } from "react";
import styled from "../../../styles/theme";

interface Props {
    onClickHandler: (value: "public" | "private") => void;
}

const RoomModeSlider: React.FC<Props> = ({ onClickHandler }) => {
    const [isChecked, setChecked] = useState<boolean>(false);

    const handleSwitchClick = () => {
        onClickHandler(isChecked ? "private" : "public");
        setChecked(!isChecked);
    };

    return (
        <Container onClick={handleSwitchClick}>
            <Slider isChecked={isChecked} />
            <TextContainer isChecked={isChecked}>
                <span>Public</span>
                <span>Private</span>
            </TextContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 7.8125rem;
    height: 1.875rem;

    background: #302b4a;
    border-radius: 0.375rem;

    cursor: pointer;
`;

const Slider = styled.span<{ isChecked: boolean }>`
    position: relative;
    cursor: pointer;

    &::before {
        position: absolute;
        content: "";
        height: 1.375rem;
        width: 3.75rem;
        transition: 0.4s;
        border-radius: 0.3125rem;
        background-color: ${(props) =>
            props.theme.colors.lobby.slider.background.light};
        transform: translateX(0.25rem) translateY(0.25rem);

        ${(props) =>
            props.isChecked &&
            `
                    transform: translateX(4rem) translateY(0.25rem);
                    width: 3.6rem;`}
    }
`;

const TextContainer = styled.div<{ isChecked: boolean }>`
    position: relative;

    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;

    & > * {
        user-select: none;
    }

    & > *:first-child {
        margin: 0 1.0625rem 0 0.84375rem;
    }

    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.125rem;

    color: ${(props) => props.theme.colors.lobby.slider.text.default};

    flex: none;
    order: 0;
    flex-grow: 0;

    ${(props) =>
        props.isChecked
            ? `
        & > *:last-child {    
            color: ${props.theme.colors.lobby.slider.text.selected};

        }
    `
            : `
        & > *:first-child {
            color: ${props.theme.colors.lobby.slider.text.selected};
        }
    `}
`;

export default RoomModeSlider;
