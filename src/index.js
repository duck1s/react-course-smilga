import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

const firstBook = {
	author: 'Amelia Hepworth',
	title: 'I Love You to the Moon and Back',
	img: 'http://balkadu.com/wp-content/uploads/2017/07/400X400.jpg',
}

const secondBook = {
	author: 'Book 2',
	title: 'Kaas',
	img: 'https://i.pinimg.com/originals/82/e6/7c/82e67c686a6f80321455b3d016def273.jpg',
}

function BookList() {
	return (
		<section className='booklist'>
			<Book
				title={firstBook.title}
				img={firstBook.img}
				author={firstBook.author}
			/>
			<Book
				title={secondBook.title}
				img={secondBook.img}
				author={secondBook.author}
			/>
		</section>
	)
}

const Book = (props) => {
	console.log(props)
	return (
		<article className='book'>
			<img src={props.img} alt='' />
			<h1>{props.title}</h1>
			<h4>{props.author}</h4>
		</article>
	)
}

ReactDom.render(<BookList />, document.getElementById('root'))
