import { render, screen, fireEvent, Simulate } from '@testing-library/react';
import App from '../App';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import userEvent from "@testing-library/user-event";
import DashboardView from '../components/dashboardView'


const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}));



describe('Testeando boton Start', () => {
    let button

    beforeEach(() => {
        render(<App />);
        button = screen.getByRole('button', { name: "Start" })
        jest.clearAllMocks();
    });


    test('Al pulsar el boton ejecute funcion navegar', async () => {

userEvent.click(button)
expect(mockedNavigate).toHaveBeenCalledWith('/dashboard');



        // render(
        //     <BrowserRouter>
        //         <Routes>
        //             <Route path="dashboard" element={<DashboardView />} />
        //         </Routes>
        //     </BrowserRouter>
        // );


        // userEvent.click(await button);

        // expect(nav).toHaveBeenCalledWith('/dashboard');
        // //  expect(mockedUsedNavigate).toHaveBeenCalledWith('/dashboard');
    });



})

