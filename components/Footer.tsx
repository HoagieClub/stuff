import { Pane } from 'evergreen-ui'
import Link from 'next/link'

// eslint-disable-next-line max-len
const logo = <svg xmlns="http://www.w3.org/2000/svg" width="69" height="22" fill="none"><path d="M57.647 20.724c5.232 0 9.474-4.242 9.474-9.474s-4.241-9.474-9.474-9.474H39.66L25.375 20.724h32.272z" fill="#474d66" /><path d="M25.375 20.724h32.272c5.232 0 9.474-4.242 9.474-9.474h0c0-5.232-4.241-9.474-9.474-9.474H39.66M25.375 20.724H10.752c-5.232 0-9.474-4.242-9.474-9.474h0c0-5.232 4.242-9.474 9.474-9.474h8.024m6.6 18.948L39.66 1.777m0 0H28.112m0 0l-7.53 9.581m7.53-9.581h-9.337m0 0l-6.534 8.645" stroke="#212121" strokeWidth="2.482" strokeLinecap="round" /></svg>

export default function Footer() {
    return (
        <Pane
            display="flex"
            justifyContent="center"
            height="100px"
            paddingTop="50px"
            paddingBottom="30px"
            alignItems="center"
            fontSize="14pt"
        >
            <Link href="/contributors">
                <Pane
                    maxWidth="600px"
                    fontSize={14}
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                >
                    <Pane
                        marginRight={5}
                    >
                        {logo}
                    </Pane>
                    <Pane
                        paddingBottom={3}
                    >
                        Made by the
                        <b> Hoagie Purple Team.</b>
                    </Pane>
                </Pane>
            </Link>
        </Pane>
    )
}
