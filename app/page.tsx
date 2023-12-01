'use client'
import { Provider } from 'react-redux';
import { store } from '@/redux-config/store';
import Home from './home';


export default function IndexPage() {


  return (
    <main >
      <Provider store={store}>
        <Home />
      </Provider>
    </main>
  )
}
