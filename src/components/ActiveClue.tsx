import * as React from 'react'

export default function ActiveClue(props: { currentActiveClue: string | null }) {
	return <div>{props.currentActiveClue}</div>
}
