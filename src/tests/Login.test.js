import { render, screen } from "@testing-library/react";
import Login from '../Components/Login'
import React from 'react'
import { Provider } from "react-redux";
import {store} from '../index'

test("testing login component", () => {
    var component = render(
        <Provider store={store}>
            <Login />
        </Provider>
    )
    expect(component).toMatchSnapshot()
})