import AppLayout from "../layout";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }) {
  return <main>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </main>
}