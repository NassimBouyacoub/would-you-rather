import { fireEvent, render, screen } from "@testing-library/react";
import Login from '../Components/Login'
import React from 'react'
import { Provider } from "react-redux";
import { store } from '../index'
import { MemoryRouter } from "react-router-dom";

describe("testing login component", () => {
    it("snapshot", () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        )
        expect(screen).toMatchSnapshot()
    })
})