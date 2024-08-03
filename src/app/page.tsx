import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';

// Put UserButton component in Navbar
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <UserButton />
      <h1>Home Page</h1>
    </main>
  );
}
