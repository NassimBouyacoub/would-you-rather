import { fireEvent, render, screen } from "@testing-library/react";
import Login from '../Components/Login'
import React from 'react'
import { Provider } from "react-redux";
import { store } from '../index'
import { MemoryRouter } from "react-router-dom";

describe("testing login component", () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <Login />
            </Provider>
        </MemoryRouter>
    )
    it("Compare to snapshot", () => {
        expect(screen).toMatchSnapshot()
    })
    it("Verify that user is Logged", async () => {
        // console.log(component)
        const test = screen.getByTestId("authUser")
        console.log(test)
        // expect(test).toBeInTheDocument()
        // fireEvent.click(log)
        // expect(props.authedUser).not.toBeNull()
    })
})
