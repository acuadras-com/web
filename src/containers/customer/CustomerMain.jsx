import React, { useState } from 'react'
import '../../assets/styles/components/customer/Register.scss'
import Container from 'react-bootstrap/Container'
import { InputText } from '../../components/basic/Input-Text/InputText'
import {ListOfCategories } from '../../components/ListOfCategories'
import { ListOfShopCards } from '../../components/ListOfShopCards'

export const CustomerMain = () => {
    

    
    return (
        <section>
            <Container className="form-container">
                <div className="text-center">
                    <p>Donde te encuentras?</p>
                </div>
                <InputText text="Dirección" />
                <ListOfCategories />
                 
            </Container>
            <ListOfShopCards />
           
        </section >

    );
}