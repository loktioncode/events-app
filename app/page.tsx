'use client'
import { Provider } from 'react-redux';
import { store } from '@/redux-config/store';
import Home from './home';


export default function IndexPage() {


  return (
    <main className="flex max-h-screen flex-row items-center justify-between p-8">
      <Provider store={store}>
        <Home />
      </Provider>
    </main>
  )
}
