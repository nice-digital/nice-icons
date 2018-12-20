import React from "react";

const SvgTwitterSquare = props => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 512 512"
		fill="none"
		className="icon"
		aria-hidden={true}
		{...props}
	>
		<path
			d="M405.333 172.583c-10.889 4.861-22.652 8.167-35.291 9.917 13.222-7.778 22.264-19.153 27.125-34.125-12.639 7.389-25.667 12.347-39.084 14.875-11.861-12.833-26.736-19.25-44.625-19.25-16.916 0-31.354 5.979-43.312 17.937-11.959 11.959-17.938 26.396-17.938 43.313 0 5.639.486 10.306 1.459 14-25.084-1.361-48.611-7.681-70.584-18.958-21.972-11.278-40.639-26.348-56-45.209-5.639 9.723-8.458 20.028-8.458 30.917 0 22.167 8.847 39.181 26.542 51.042-9.139-.195-18.861-2.723-29.167-7.584v.584c0 14.583 4.861 27.562 14.583 38.937 9.723 11.375 21.681 18.424 35.875 21.146-5.639 1.556-10.597 2.333-14.875 2.333-2.527 0-6.319-.389-11.375-1.166 4.084 12.25 11.327 22.361 21.729 30.333 10.403 7.972 22.216 12.056 35.438 12.25-22.556 17.5-47.931 26.25-76.125 26.25-5.056 0-9.917-.292-14.583-.875 28.777 18.278 60.083 27.417 93.916 27.417 21.778 0 42.195-3.452 61.25-10.355 19.056-6.902 35.389-16.138 49-27.708 13.611-11.569 25.327-24.889 35.146-39.958 9.82-15.07 17.111-30.82 21.875-47.25 4.764-16.431 7.146-32.813 7.146-49.146 0-3.5-.097-6.125-.292-7.875 12.25-8.75 22.459-19.347 30.625-31.792zM480 116v280c0 23.139-8.215 42.924-24.646 59.354C438.924 471.785 419.139 480 396 480H116c-23.139 0-42.924-8.215-59.354-24.646C40.216 438.924 32 419.139 32 396V116c0-23.139 8.215-42.924 24.646-59.354C73.076 40.216 92.86 32 116 32h280c23.139 0 42.924 8.215 59.354 24.646C471.785 73.076 480 92.86 480 116z"
			fill={props.colour || "currentColor"}
		/>
	</svg>
);

export default SvgTwitterSquare;