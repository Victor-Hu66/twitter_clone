import {Link} from "react-router-dom";
import {Popover} from "@headlessui/react";

export default function Footer() {
	return (
		<footer className="mb-4 px-4 flex flex-wrap gap-2">
			<Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Terms of service</Link>
			<Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Privacy Policy</Link>
			<Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Cookie Policy</Link>
			<Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Accessibility</Link>
			<Link to="/" className="text-[#71767b] leading-4 text-[13px] hover:underline">Ads Info</Link>
			<div className="w-full flex gap-2">
				<Popover className="relative inline-flex leading-4">
					<Popover.Button
						className="text-[#71767b] outline-none leading-4 text-[13px] hover:underline inline-flex items-center">
						More
						<svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
								<path
									fill="currentColor"
									d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
								/>
						</svg>
					</Popover.Button>
					<Popover.Panel className="w-[150px] max-w-[384px] bg-black shadow-box rounded-xl absolute bottom-0 right-0 grid overflow-hidden">
						<Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] transition-colors">
							About
						</Link>
						<Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] transition-colors">
							Status
						</Link>
						<Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] transition-colors">
							X for Business
						</Link>
						<Link to="/" className="py-3 px-4 text-white text-[15px] leading-5 font-bold hover:bg-[#16181c] transition-colors">
							Developers
						</Link>
					</Popover.Panel>
				</Popover>
				<p className="text-[#71767b] leading-4 text-[13px]">
					&copy; 2023 Arazz
				</p>
			</div>
		</footer>
	)
}