import Link from 'next/link';

import { ticketsPath } from '@/paths';

const HomePage = () => {
  return (
      <div className="page">
          <h2 className="text-3xl mb-5">Home page</h2>
          <Link href={ticketsPath()}>
              Go to Tickets
          </Link>
      </div>
  );
}

export default HomePage;
