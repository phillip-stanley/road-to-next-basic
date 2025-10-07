import Link from 'next/link';

import initialTickets from "@/data";

interface TicketPageProps {
    params: Promise<{
        ticketId: string;
    }>
}

const TicketsPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;

    const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

    if (!ticket) {
        return <h2>No tickets founds</h2>
    }

    return (
        <div className="page">
            <h2 className="text-3xl mb-5">{ticket.title}</h2>
            <p className="text-sm mb-10">{ticket.content}</p>

            <Link href="/tickets" className="text-sm underline">Back</Link>
        </div>
    )
}

export default TicketsPage;