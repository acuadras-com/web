import React from 'react'
import { PageLoading } from './styles'
import './styles.css';


export const Spinner = () => {
    return (
        <>
        <PageLoading>
            <div className="lds-grid">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </PageLoading>
        </>
    )
}