import '../styles/globals.css'
import page from '../public/page.json'
import Wrapper from "../ext/wrapper/Wrapper";

function MyApp({Component, pageProps}) {


    return (
        <Wrapper
            host={page.host}
            pages={[{label: 'Início', path: '/', requireAuth: true}]}
        >
            <Component {...pageProps}/>
        </Wrapper>
    )
}

export default MyApp
