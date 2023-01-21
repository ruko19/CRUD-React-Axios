import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    createRoutesFromElements,
} from "react-router-dom";

import { App } from '../Containers/App';
import { NavbarContainer } from '../Components/NavbarContainer'
import { NewMotorCycle } from '../Containers/NewMotorCycle'



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<NavbarContainer />}>
            <Route path="/" element={<App />} />
            <Route path="/new" element={<NewMotorCycle />} />
        </Route>
    )
)

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export { AppRouter }