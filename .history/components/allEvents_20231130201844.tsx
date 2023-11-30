

export default function AllEvents() {





    return (
        <div>
            {
                [1, 2, 3, 4, 5, 6, 6, 7, 8].map((event) => (
                    <div key={event}>
                        Event {event}
                    </div>
                ))
            }
        </div>

    );
}