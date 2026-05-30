const submissionShows = [
    {
        itemName: "Calsi",
        category: "Electronics",
        askingPrice: 600,
        sellerName: "Nikita Singh",
        submissionDate: "25-5-2026",
        condition: "Good",

    },
    {
        itemName: "Calsi",
        category: "Electronics",
        askingPrice: 600,
        sellerName: "Nikita Singh",
        submissionDate: "25-5-2026",
        condition: "Good",

    },
]

const Submissions = () => {
    return (
        <div>
            <div className=" flex gap-4 flex-col">
                {submissionShows.map((submission) => (
                    <div className="flex items-center gap-4 border rounded-lg p-3 font-semibold">
                        <p>{submission.itemName}</p>
                        <p>{submission.askingPrice}</p>
                        <p>{submission.sellerName}</p>
                        <p>{submission.submissionDate}</p>
                        <p>{submission.condition}</p>
                        <div className="flex gap-1 ">
                            <button className="bg-green-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-green-600">Accept</button>
                            <button className="bg-red-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-red-600">Reject</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Submissions