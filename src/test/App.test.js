import {fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { useNavigate } from 'react-router-dom'
import DashboardView from '../components/dashboardView'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//describe('funciones dentro del componente app',()=>{
//   describe("debe retornar un string",()=>{
//     const result=App();
//     expect(typeof result).toBe('string')
//   })


  describe("Renders the About component", () => {
    const component = render(
      useNavigate('/dashboard')
    )
      const button = component(/Start/i);
      expect(button).toBeInTheDocument();
      fireEvent.click(button);

    // it("Renders the About component", () => {
    //   const { getByText } = render(
    //     <BrowserRouter>
    //       <About />
    //     </BrowserRouter>
    //   );
  
    // const button = getByText(/contact us/i);
    // expect(button).toBeInTheDocument();
    // fireEvent.click(button);
    // });


   // const button = component.container.querySelector('.style-button')
   // expect(button).toHaveTextContent('Start');
   // expect(component.getByRole('button')).toBeInTheDocument()

    })
    

    // const button = component.getByText('Start')
    // expect(button).toBeInTheDocument();
    // fireEvent.click(button)
  
    //expect(mockHandler.mock.calls).toHaveLength(1)
  //   const div = component.container.querySelector('.container-welcome')
  // expect(div).toHaveTextContent(
  //   'Component testing is done with react-testing-library'
  // )
    // const { getByText } = render(
    //   <BrowserRouter>
    //     <About />
    //   </BrowserRouter>
    // );

  //  // const button = getByText(/Start/i);
  //   const button = screen.ge (/Start/i);
  //   expect(button).toBeInTheDocument();
  //   fireEvent.click(button);
  // });
//})
