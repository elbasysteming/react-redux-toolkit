import styled from "styled-components";

export const Item = styled.div`
    border-bottom: solid 1px #e6e9f0;
    padding: 10px 0 10px 0;
    &:hover {
        cursor: pointer;
    }
`;

export const Description = styled.div`
    color: #777777;
`;

export const Container = styled.div`
    padding: 90px 0 10px 0;

    @media (max-width: 768px) {
        padding: 15px;
    }
`;

export const Header = styled.h1`
    padding: 0px 0 40px 0;
`;
export const Opciones = styled.div`
    text-align: right;
`;
