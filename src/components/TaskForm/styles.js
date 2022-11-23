import styled from "styled-components";

export const Label = styled.label`
    color: #333333;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
    font-weight: 600;
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #dedede;
    height: 40px;
    width: 100%;
    background: #f8f9fc;
    color: #666666;
    &:focus {
        border: none;
        outline: 2px solid rgb(0, 0, 0, 0.5);
    }
`;

export const TextArea = styled.textarea`
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #dedede;
    resize: none;
    height: 100px;
    width: 100%;
    background: #f8f9fc;
    color: #666666;
    &:focus {
        border: none;
        outline: 2px solid rgb(0, 0, 0, 0.5);
    }
`;

export const Button = styled.button`
    margin-top: 7px;
    background: #db4c3f;
    border-radius: 8px;
    border: 0;
    cursor: pointer;
    color: #ffffff;
    height: 40px;
    width: 100%;
    padding: 0px 20px 0px 20px;
    font-size: 14px;
    line-height: 20px;
    width: 160px;
    text-align: center;
    &:hover {
        opacity: 0.6;
    }
`;
