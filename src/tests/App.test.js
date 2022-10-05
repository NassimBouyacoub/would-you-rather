import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import {store} from '../index'
import React from 'react'
import App from '../App'
import { MemoryRouter } from "react-router-dom";
import { toBeInTheDocument } from '@testing-library/jest-dom'

describe("test if creator name appears", () => {
    it("appears?", () => {
        render(
                <Provider store={store}>
                    <App />
                </Provider>
        )
        
            fireEvent.click(screen.getAllByTestId('showC')[0])
            expect(screen.getAllByTestId('Creator')[0]).toBeInTheDocument()
    
    })
})