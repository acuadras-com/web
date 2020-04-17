import styled from 'styled-components'
import Button from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'


export const Span = styled.span`
    padding-top: 8px;
    align-items:center;
    display: flex;
    & svg {
        margin-right: 4px;
    }
`
export const Image = styled.img`
    height: 150px;
    width:100%;
`
export const DefaultImage = styled.img`
    height: 150px;
    width:40%;
`
export const ImageWrapper = styled.div`
    text-align:center;
`

export const RoundButton = styled(Button)`
    border-radius: 4px;
    background-color: #009c5b;
    color: white;
    border-width: 2px;
    border-style: solid;
    border-color: #009c86;
    cursor: pointer;
    width: 80%;
    text-decoration: none;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
`
export const CardStyled = styled(Card)`
    min-width: 280px;
    &:hover {
      box-shadow: 0px 14px 14px rgba(0,0,0,.3);
    }
`
