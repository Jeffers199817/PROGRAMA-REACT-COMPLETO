import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en <CounterApp.jsx></CounterApp.jsx>', () => { 

    const value = 100;

    test('debe de hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={value} />)
    expect(container).toMatchSnapshot();


    })

    test('Debe de mostrar el valor inicial de 100', () => {
      render(<CounterApp value={value} />);
        //expect(screen.getByRole('heading',{level:2}).innerHTML).toContain(`El valor es:${value}`);
        expect(screen.getByText(value)).toBeTruthy();
    })

    test('debe de incrementar con el boton +1', () => { 

        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    })
    
    test('debe de decrementar con el boton --1 ', () => { 

        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('--1'));
        expect(screen.getByText('99')).toBeTruthy();
    })
})