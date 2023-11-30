import Image from 'next/image'
import Search from '../components/searchInput';
import Events from '../components/events';
import BandInfo from '../components/bandInfo';


export default function Home(
  {
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }
) {



  return (
    <main className="flex max-h-screen flex-row items-center justify-between p-8">

      <div className="z-10 items-center justify-between font-mono text-sm lg:flex w-4/12 flex-col">
        <Search placeholder="Search events..." />

     

<BandInfo />
      </div >

      <Events />

    </main>
  )
}
