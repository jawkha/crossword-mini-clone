import * as React from 'react'

interface IDirection {
	direction: 'Across' | 'Down'
	list: {}
}

function listItems(obj: IDirection['list']) {
	return Object.entries(obj).map(([key, value], index) => <p key={index}>{`${key} ${value}`}</p>)
}

export default function CluesList(prop: IDirection) {
	const { direction, list } = prop
	return (
		<div>
			<h3>{direction}</h3>
			{listItems(list)}
		</div>
	)
}
