import { render, screen} from '@testing-library/react'
import Index from '../pages/index'


describe('Index', () => {

    describe('Components', () => {
        it('se renderiza', () => {
            const { getByTestId } = render(
                <Index pokemones={[]} />
            )

            const paragraph = getByTestId('titulo')
            expect(paragraph).toBeInTheDocument()
        })
    })
describe('getStaticProps', () => {

    })
})