import React from 'react';
import decoration from '../../assets/Decoration.svg';

/**
 * @param {object} props
 * @param {string | string[]} props.title - the title of the content group
 * @param {object} props.children
 */
export default function ContentGroup({ title, children }) {
	/**
	 * If the title is an array, then returns it converted to JSX with <br />'s
	 * @returns {JSX.Element[] | string | string[]}
	 */
	const convertedTitle = () => {
		if (Array.isArray(title) && title.length > 1) {
			return title.map((el, index) => (
				<React.Fragment key={index}>
					<br />
					{el}
				</React.Fragment>
			));
		}

		return title;
	};

	return (
		<div className={`content-group`}>
			<h1 className='content-group__title'>{convertedTitle()}</h1>

			<img
				src={decoration}
				alt=''
				role='presentation'
				className='content-group__decoration'
			/>

			{children}
		</div>
	);
}
