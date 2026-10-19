const stats = [
  { label: "Requests / min", value: "12,480" },
  { label: "p95 latency", value: "84 ms" },
  { label: "Error rate", value: "0.12%" },
  { label: "Uptime (30d)", value: "99.98%" },
];

const routes = [
  { method: "GET", path: "/v1/orders", upstream: "orders-svc", rpm: "4,210", p95: "62 ms" },
  { method: "POST", path: "/v1/orders", upstream: "orders-svc", rpm: "980", p95: "118 ms" },
  { method: "GET", path: "/v1/catalog", upstream: "catalog-svc", rpm: "5,630", p95: "41 ms" },
  { method: "POST", path: "/v1/payments", upstream: "payments-svc", rpm: "640", p95: "203 ms" },
  { method: "GET", path: "/v1/users/:id", upstream: "accounts-svc", rpm: "1,020", p95: "55 ms" },
];

export default function Home() {
  return (
    <div className="flex-1 bg-[#0b0f14] font-mono text-slate-300">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm">
          <span className="text-slate-100">▲ conduit</span>
          <span className="flex items-center gap-2 text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> all systems operational
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="font-sans text-3xl font-semibold tracking-tight text-slate-100">API gateway</h1>
        <p className="mt-2 text-sm text-slate-500">production · us-east · 5 routes · 4 upstreams</p>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <div className="text-xs uppercase tracking-wider text-slate-500">{s.label}</div>
              <div className="mt-2 text-2xl text-slate-100">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-x-auto rounded-lg border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.03] text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-4 py-3">Route</th>
                <th className="px-4 py-3">Upstream</th>
                <th className="px-4 py-3 text-right">rpm</th>
                <th className="px-4 py-3 text-right">p95</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {routes.map((r) => (
                <tr key={r.method + r.path}>
                  <td className="px-4 py-3">
                    <span className={r.method === "GET" ? "text-sky-400" : "text-amber-400"}>{r.method}</span>{" "}
                    <span className="text-slate-100">{r.path}</span>
                  </td>
                  <td className="px-4 py-3 text-slate-400">{r.upstream}</td>
                  <td className="px-4 py-3 text-right">{r.rpm}</td>
                  <td className="px-4 py-3 text-right">{r.p95}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
