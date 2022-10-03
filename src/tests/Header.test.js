import { render, screen } from "@testing-library/react"
import { toBeInTheDocument } from '@testing-library/jest-dom'
import Header from "../Components/Header"
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from '../index'
import React from 'react'

describe("Testing Navigation bar", () => {
    
    //Home
    test("testing Home link", () => {
        const header = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </MemoryRouter>
        )
        var comp = header.getAllByTestId("HomeNav")
        comp.map(comp => expect(comp).toBeInTheDocument())
    });
    //NewQuestion
    test("testing new question link", () => {
        const header = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </MemoryRouter>
        )
        var nq =  header.getAllByTestId("newQuestion")
        nq.map(comp => expect(comp).toBeInTheDocument())
    });
    //Leaderboard
    it("testing Leaderboard link", () => {
        const header = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </MemoryRouter>
        )
        var lb = header.getAllByTestId("Leaderboard")
        lb.map(comp => expect(comp).toBeInTheDocument())
    })
})