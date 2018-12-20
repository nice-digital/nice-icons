import React from "react";

const SvgYoutubeSquare = props => (
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
			d="M300.042 374.708v-45.791c0-9.723-2.82-14.584-8.459-14.584-3.305 0-6.514 1.556-9.625 4.667v65.333c3.111 3.111 6.32 4.667 9.625 4.667 5.639 0 8.459-4.764 8.459-14.292zm53.666-35.583h19.25v-9.917c0-9.916-3.208-14.875-9.625-14.875-6.416 0-9.625 4.959-9.625 14.875v9.917zm-166.541-77.583v20.416h-23.334v123.375H142.25V281.958H119.5v-20.416h67.667zm58.625 36.75v107.041H226.25v-11.666c-7.583 8.75-14.972 13.125-22.167 13.125-6.416 0-10.5-2.723-12.25-8.167-1.166-3.111-1.75-8.361-1.75-15.75v-84.583h19.25v78.75c0 4.666.098 7.194.292 7.583.194 2.917 1.653 4.375 4.375 4.375 3.889 0 7.972-3.014 12.25-9.042v-81.666h19.542zm73.5 32.375v42.583c0 10.111-.681 17.208-2.042 21.292-2.333 8.166-7.486 12.25-15.458 12.25-6.806 0-13.417-3.986-19.834-11.959v10.5h-19.541V261.542h19.541V308.5c6.223-7.778 12.834-11.667 19.834-11.667 7.972 0 13.125 4.084 15.458 12.25 1.361 4.084 2.042 11.278 2.042 21.584zm73.208 37.625v2.625c0 5.639-.194 9.819-.583 12.541-.584 4.278-2.042 8.167-4.375 11.667-5.25 7.778-13.028 11.667-23.334 11.667-10.111 0-17.986-3.695-23.625-11.084-4.083-5.25-6.125-13.611-6.125-25.083V333c0-11.472 1.945-19.833 5.834-25.083 5.639-7.389 13.416-11.084 23.333-11.084 9.917 0 17.5 3.695 22.75 11.084 4.083 5.444 6.125 13.805 6.125 25.083v22.167h-38.792v18.958c0 9.917 3.306 14.875 9.917 14.875 4.667 0 7.583-2.528 8.75-7.583 0-.195.049-.875.146-2.042.097-1.167.146-2.771.146-4.813v-6.27H392.5zM260.958 127.958v45.5c0 9.917-3.111 14.875-9.333 14.875-6.222 0-9.333-4.958-9.333-14.875v-45.5c0-10.111 3.111-15.166 9.333-15.166 6.222 0 9.333 5.055 9.333 15.166zm155.459 207.959c0-34.417-1.848-59.695-5.542-75.834-1.944-8.555-6.125-15.701-12.542-21.437-6.416-5.736-13.805-9.09-22.166-10.063-26.445-2.916-66.5-4.375-120.167-4.375-53.472 0-93.431 1.459-119.875 4.375-8.556.973-15.993 4.327-22.313 10.063-6.319 5.736-10.451 12.882-12.395 21.437-3.89 16.917-5.834 42.195-5.834 75.834 0 34.222 1.945 59.5 5.834 75.833 1.944 8.361 6.076 15.458 12.395 21.292 6.32 5.833 13.66 9.236 22.021 10.208 26.639 2.917 66.695 4.375 120.167 4.375 53.472 0 93.528-1.458 120.167-4.375 8.361-.972 15.701-4.375 22.02-10.208 6.32-5.834 10.452-12.931 12.396-21.292 3.889-16.333 5.834-41.611 5.834-75.833zM196.208 146.042l26.25-86.334h-21.875l-14.875 56.875-15.458-56.875H147.5l7 20.125 6.708 20.125c6.806 20.028 11.278 35.389 13.417 46.084v58.625h21.583v-58.625zm84.292 23.625V131.75c0-11.278-2.042-19.736-6.125-25.375-5.639-7.389-13.222-11.083-22.75-11.083-9.917 0-17.5 3.694-22.75 11.083-4.083 5.639-6.125 14.097-6.125 25.375v37.917c0 11.277 2.042 19.736 6.125 25.375 5.25 7.389 12.833 11.083 22.75 11.083 9.528 0 17.111-3.694 22.75-11.083 4.083-5.25 6.125-13.709 6.125-25.375zm52.792 35h19.541V96.75h-19.541v82.542c-4.278 6.027-8.361 9.041-12.25 9.041-2.917 0-4.473-1.555-4.667-4.666-.194-.389-.292-2.917-.292-7.584V96.75h-19.541v85.458c0 7.195.583 12.542 1.75 16.042 2.139 5.25 6.319 7.875 12.541 7.875 7 0 14.486-4.375 22.459-13.125v11.667zM480 116v280c0 23.139-8.215 42.924-24.646 59.354C438.924 471.785 419.139 480 396 480H116c-23.139 0-42.924-8.215-59.354-24.646C40.216 438.924 32 419.139 32 396V116c0-23.139 8.215-42.924 24.646-59.354C73.076 40.216 92.86 32 116 32h280c23.139 0 42.924 8.215 59.354 24.646C471.785 73.076 480 92.86 480 116z"
			fill={props.colour || "currentColor"}
		/>
	</svg>
);

export default SvgYoutubeSquare;