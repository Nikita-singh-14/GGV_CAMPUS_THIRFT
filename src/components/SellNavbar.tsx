const SellNavbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-8 py-4 bg-white shadow-md">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <img
                    src="/logo.jpeg"
                    alt="logo"
                    className="w-12 h-12 rounded-full object-cover"
                />

                <h1 className="text-2xl font-bold text-blue-600">
                    GGV_CAMPUS_THRIFT
                </h1>
            </div>
            <p className="text-2xl text-gray-700"><b>Sell Your Item</b></p>
        </nav>
    );
};

export default SellNavbar;