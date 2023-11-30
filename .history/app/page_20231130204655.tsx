import Image from 'next/image'
import Search from '../components/searchInput';
import Events from '../components/events';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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

      <div className="z-10 items-center justify-between font-mono text-sm lg:flex w-4/12 flex-col">
        <Search placeholder="Search events..." />

        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>


      </div >

      <Events />

    </main>
  )
}
