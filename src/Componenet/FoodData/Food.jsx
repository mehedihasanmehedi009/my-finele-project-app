
export const Food = ({data}) => {
    const item = data
console.log(data)
  return (
    <div className="border-2 p-3 rounded-2xl hover:bg-cyan-300">
     <div>
              {/* Top Row: Category & Availability */}
              <div className="flex items-center justify-between gap-2 mb-3 ">
                <span className="text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-indigo-50 text-indigo-600">
                  {item.category}
                </span>

                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    item.available !== false
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-rose-50 text-rose-600"
                  }`}
                >
                  {item.available !== false ? "Available" : "Sold Out"}
                </span>
              </div>

              {/* Food Name */}
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {item.name}
              </h3>

              {/* Rating & Prep Time */}
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                {item.rating && <span>⭐ {item.rating}</span>}
                {item.prepTimeMins && <span>⏱️ {item.prepTimeMins} mins</span>}
              </div>
            </div>

            {/* Bottom Row: Price & Action */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <p className="text-xl font-extrabold text-slate-900">
                ৳{item.price}{" "}
                <span className="text-xs font-normal text-slate-400">
                  {item.currency || "BDT"}
                </span>
              </p>

              <button
                type="button"
                disabled={item.available === false}
                className="px-4 py-2 text-sm font-semibold rounded-xl bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 transition cursor-pointer disabled:cursor-not-allowed"
              >
                {item.available !== false ? "Add to Order" : "Unavailable"}
              </button>
            </div>

    </div>
  )
}
