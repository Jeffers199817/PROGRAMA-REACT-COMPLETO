import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";



describe('Pruebas en <FirstApp.jsx></FirstApp.jsx>', () => {


    const title = "Hola soy goku.";
    const subtitle = "Esto es un subtitulo";

    test('Debe de hacer match con el snapshot', () => { 

       
        const {container} = render(<FirstApp title={title} />)
       
        expect(container).toMatchSnapshot();

    })
    

    test('Debe mostrar el mensaje hola soy goku', () => {
        
        render(<FirstApp title={title} />)
   

        
        expect(screen.getByText(title)).toBeTruthy();
    })

    test('Debe mostrar el titulo en un h1', () => { 

        render(<FirstApp title={title} />)
       expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
    })
    
    test('debe de mostar el subtitulo enviado por props', () => { 

        render(<FirstApp subtitulo={subtitle} />)

        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain(subtitle);

    
    })
    
    
 })