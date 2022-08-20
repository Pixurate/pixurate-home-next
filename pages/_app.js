import {useRouter} from "next/router";
import "../styles/app.css";

export default function MyApp({Component, pageProps}) {
    const {locale} = useRouter();

    return (
        <Component {...pageProps} />
    )
}