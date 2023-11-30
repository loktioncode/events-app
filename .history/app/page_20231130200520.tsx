import Image from 'next/image'
import Search from '../components/searchInput';
import Events from '../components/events';

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

  

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;


  return (
    <main className="flex max-h-screen flex-row items-center justify-between p-8">

      <div className="z-10 items-center justify-between font-mono text-sm lg:flex w-3/12">
       <Search placeholder="Search events..." />
      </div>


      <div className="text-center lg:max-w-5xl lg:w-9/12 lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Events />
      </div>
    </main>
  )
}
