const CurvedArrow = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 50"
            width="200"
            height="100"
        >
            {/* Garis melengkung */}
            <path
                d="M10 40 Q50 10 90 40"
                fill="none"
                stroke="#4A2E2E"
                strokeWidth="2"
            />
            {/* Kepala panah */}
            <path
                d="M85 37 L90 40 L85 43 L87 40 Z"
                fill="#4A2E2E"
                stroke="#4A2E2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default CurvedArrow;