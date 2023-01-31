import styled from "styled-components";

export const ItemContainer = styled.div`
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    padding: 32px 0;
    width: 100%;

    .content {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    h3 {
        color: #FAFAFA;
        font-size: 32px;
    }

    p {
        color: rgb(73, 80, 87);
        font-size: 16px;
    }

    a, button {
        cursor:pointer;
        font-size: 16px;
        text-decoration: none;
    }

    .actions {
        display: flex;
        gap: 20px;
    }

    .remove {
        color: rgb(250,	82, 82);
        background-color: transparent;
        border: none;
        &:hover {
            color: rgb(255,	135, 135)
        }
    }

    a.details {
        color: rgb(92,	124, 250);
        &:hover {
            color: rgb(145,	167, 255)
        }
    }
`;