import { useState, useEffect } from "react";

export default function Preloader({ onFinish }) {
	const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

	const letters = ["BITS", "2", "BYTES", "2", "K", "2", "5"];
	const animationClasses = ["fromRightOutBottom", "fromTopOutRight", "fromLeftOutTop", "fromBottomOutLeft", "fromRightOutTop", "fromBottomOutRight", "fromLeftOutBottom", "fromTopOutRight", "fromRightOutTop", "fromBottomOutLeft", "fromLeftOutTop"];

	useEffect(() => {
		const letterInterval = setInterval(() => {
			setCurrentLetterIndex((prev) => {
				if (prev < letters.length - 1) {
					return prev + 1;
				} else {
					clearInterval(letterInterval);
					setTimeout(() => {
						setTimeout(() => {
							onFinish(); // Notify App.js
						}, 1000);
					}, 600);
					return prev;
				}
			});
		}, 500);

		return () => clearInterval(letterInterval);
	}, [onFinish, letters.length]);

	return (
		<div className="loader__wrapper relative w-full h-screen overflow-hidden">
			<div className="cube-wrapper relative z-10">
				<div className="loader-cube">
					{letters.map((letter, index) => (
						<div
							key={index}
							className={`loader-char ${index === currentLetterIndex ? animationClasses[index] : ""}`}
							style={{
								opacity: index === currentLetterIndex ? 1 : 0,
								zIndex: index === currentLetterIndex ? 10 : 1,
							}}
						>
							<span>{letter}</span>
						</div>
					))}
				</div>
			</div>

			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
				<div className="flex space-x-1">
					{[...Array(3)].map((_, i) => (
						<div
							key={i}
							className="w-2 h-2 bg-white rounded-full animate-pulse"
							style={{
								animationDelay: `${i * 0.2}s`,
								animationDuration: "1s",
							}}
						></div>
					))}
				</div>
			</div>
		</div>
	);
}
