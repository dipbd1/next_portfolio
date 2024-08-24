import { Html, Head, Main, NextScript } from 'next/document'
import {useEffect} from "react";

export default function Document() {

    return (
        <Html lang="en">
            <Head />
            <body>
            <div id="globalLoader">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt=""/>
            </div>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}