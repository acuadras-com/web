import styled, { css } from 'styled-components'

import Form  from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'

export const RowNav = styled(Row)`
    padding-left: 20px;
`
export const NavMobile = styled.div`
    position:fixed;
        top: 65px;
        right: 0;
        left: 0;
        z-index: 1040;
        background-color:white;
    @media (min-width: 572px) {
        display: none;
      }
`

export const NavDesktop = styled.div`
    position:fixed;
        top: 65px;
        right: 0;
        left: 0;
        z-index: 1040;
        background-color:white;
    @media (max-width: 572px) {
        display: none;
      }
`
export const MainContainer = styled.div`
    padding-top: ${props => props.padding? props.padding : '125px'};
`

export const SearchContainer = styled.div`
    padding-top:20px;
    padding-bottom:20px;
    width: 70%;
    text-align: center;
    margin: 0 auto;
    visibility: ${props => props.visible? 'visible' : 'collapse'};
    height: ${props => props.visible? 'auto' : '0px'};
`

export const RoundIconContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    margin-top:20px;
    padding-top:15px;
    background-color: #257400;
    color: white;
    border-radius: 50%;
    height: 80px;
    width: 80px;
`

export const RoundIconContainerNav = styled.div`
    text-align: center;
    margin: 0 auto;
    padding-top:10px;
    background-color: #257400;
    color: white;
    border-radius: 50%;
    height: 50px;
    width: 50px;
`

export const SearchInNav = styled.div`
    
    visibility: ${props => props.visible? 'visible' : 'collapse'};
`

export const FormStyles = styled(Form)`
    width: 600px;
`


export const DivList = styled.div`
    list-style:none;
    display: flex;
    display: inline-block;
    text-align: left;
`
export const Container = styled.div`
    width: 100%;
    padding:20px 20px 30px 30px;
    padding-right:20px;
    margin: 0 auto;
    text-align: center;
    max-width:800px;
    background-color:white;
`

