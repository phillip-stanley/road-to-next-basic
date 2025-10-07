import Link from 'next/link';

import initialTickets from "@/data";
import { ticketPath } from '@/paths';

const TicketsPage = () => {
    return (
        <div className="page">
            <h2 className="text-3xl mb-5">Tickets page</h2>
            {initialTickets.map(ticket => (
                <>
                    <h2 className="text-lg">{ticket.title}</h2>
                    <Link
                        className="text-sm underline block mb-5"
                        key={ticket.id}
                        href={ticketPath(ticket.id)}
                    >
                        View
                    </Link>
                </>
            ))}
        </div>
    );
}

export default TicketsPage;
