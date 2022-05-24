import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

const author = 'Amelia Hepworth'
const title = 'I Love You to the Moon and Back'
const img =
	'https://wwwmpa.mpa-garching.mpg.de/gadget/cr/CR_TCDM_dump40_400_170000_12000_100_blue.gif'

function BookList() {
	return (
		<section className='booklist'>
			<Book title={title} />
		</section>
	)
}

const Book = (props) => {
	console.log(props)
	return (
		<article className='book'>
			<img src={img} alt='' />
			<h1>{props.title}</h1>
			<h4>{author}</h4>
		</article>
	)
}

ReactDom.render(<BookList />, document.getElementById('root'))
