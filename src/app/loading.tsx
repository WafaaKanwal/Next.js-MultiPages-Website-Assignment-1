export default function Loading() {
    return (
      <div className="flex items-center justify-center h-[90vh] bg-[#FFF8F0]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-[#D4A373] border-[#f1e7da] rounded-full animate-spin mx-auto"></div>
          <h2 className="mt-4 text-xl font-semibold text-[#6B4226]">
            Loading, please wait...
          </h2>
        </div>
      </div>
    );
  }
  