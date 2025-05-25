import { getAllByText, render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";
import { act } from "react";



describe("Pruebas en <FirstApp />", () => {


    test("Debe hacer match con el snapshot", () => {
      
        const title = "Hola, soy Vegeta";
        let container;
        act(() => {


            ({ container } = render(<FirstApp title={title} />));
        
        })      
        expect(container).toMatchSnapshot();
    

    });
    

    test('debe de mostar el tótulo en un h1', () => { 
        const title = 'Hola, Johan';
        const subtitulo = "NO existe numero";

        const { container, getAllByText } = render(<FirstApp title={title} subtitulo={subtitulo} />);

        expect(getAllByText(subtitulo)).toBeTruthy();


        const h1 = container.querySelectorAll('h1');
        console.log(h1)
        console.log(h1[0].innerHTML);
        console.log(h1[1].innerHTML);
        console.log(h1[2].innerHTML);

        expect(h1[0].innerHTML).toContain(title);
    })

    test("debe de mostar el tótulo en un h1", () => {
        const title = "Hola, Johan";
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />)
        expect(getByText(title)).toBeTruthy();


        expect(getByTestId('test-title').innerHTML).toContain(title);


        

    });


    test('debe de mostar el subtitulo enviado por props', () => { 


        const subtitulo = "Este es el subtitulo";
       // const title = 'este es el ttitulo';
        const { getAllByText } = render(<FirstApp  subtitulo={subtitulo} />);
        expect( getAllByText(subtitulo).length).toBe(4);
    })
    
    


});
