import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { toBeInTheDocument } from '@testing-library/jest-dom'
import React from 'react'
import { Provider } from "react-redux";
import { store } from '../index'
import { MemoryRouter } from "react-router-dom";
import Leaderboard from "../Components/Leaderboard";
import Login from "../Components/Login";
describe("testing Leaderboard ", () => {
    it("Testing info users", () => {
        var lead = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Leaderboard />
                </Provider>
            </MemoryRouter>
        )
        var log = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        )
        waitFor(() => {
            //Log user to acces leaderboard
            fireEvent.click(log.getByTestId("drop"))
            fireEvent.click(log.getByTestId("sarahedo"))
            //Sarahedo
            expect(lead.getByTestId("Sarah Edo")).toBeInTheDocument();
            expect(lead.findByTestId("Sarah Edo_questions")).toEqual("2")
            expect(lead.findByTestId("Sarah Edo_answers")).toEqual("4")
            //Mike
            expect(lead.getByTestId("Mike Tsamis")).toBeInTheDocument();
            expect(lead.findByTestId("Mike Tsamis_questions")).toEqual("2")
            expect(lead.findByTestId("Mike Tsamis_answers")).toEqual("3")
            //Tyler
            expect(lead.getByTestId("Tyler McGinnis")).toBeInTheDocument();
            expect(lead.findByTestId("Tyler McGinnis_questions")).toEqual("2")
            expect(lead.findByTestId("Tyler McGinnis_answers")).toEqual("2")
        })

    })
})