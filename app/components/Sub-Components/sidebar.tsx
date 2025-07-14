export default function SidebarToggle({state, setState}: {state: boolean, setState: (open: boolean) => void}) {
  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          state ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b font-bold text-[#ab45db]">Sidebar</div>
        <ul className="p-4 space-y-2">
          <li><a href="#" className="block">Home</a></li>
          <li><a href="#" className="block">About</a></li>
          <li><a href="#" className="block">Contact</a></li>
        </ul>
      </div>

      {state && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setState(false)}
        />
      )}
    </div>
  );
}
