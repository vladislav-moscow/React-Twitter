import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Navigation from '../../Modules/Navigation';
import './Home.scss';
import axios from 'axios';
import Options from '../../components/Options';

interface Post {
	id: number;
	userId: number;
	title: string;
	body: string
}

interface CustomPost {
	id: number;
	body: string;
}

const options = [
  'Редактировать',
	'Удалить',
];

function Home() {
	const [searchText, setSearchText] = useState('');
	const [data, setData] = useState<Post[]>([]);
	const [createPosts, SetCreatePosts] = useState<CustomPost[]>([])
	const [textPost, setTextPost] = useState<string>('')
	
	
	const handleClickEdit = (id?: number) => {
		
			createPosts.forEach((post) => {
				if(post.id === id) {
					setTextPost(post.body)
				}
			})
  };

	const handleClickDelete = (id?: number) => {
		axios.delete(`http://localhost:3001/posts/${id}`)
			.then(() => {
				fetchPosts()
			})
		
};
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(event.target.value)
	}

	const handlePostsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextPost(event.target.value)
	}

	const handleTwit = () => {
		const payload = {
			body: textPost
		}

		axios.post('http://localhost:3001/posts', payload).then(() => {
			fetchPosts()
		})
		setTextPost('')
	}

	const fetchPosts = () => {
		axios.get('http://localhost:3001/posts').then((res) => {
			SetCreatePosts(res.data)
		})
	}

	useEffect(() =>{
		axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
			setData(res.data)
		})
		fetchPosts()
	},[])

	
	return (
		<section className="home">
			<Navigation />
			<section className="home__posts">
				<section className='status'>
					<h2 className="status-title">Главная</h2>
					<div className="status__img-wrapper">
						<img src="" alt="face" className="status__img" />
					</div>
					<div className="status__input">
						<textarea className='textarea' rows={5} cols={50} value={textPost} onChange={handlePostsChange}> </textarea>
					</div>
					<div className="status__icon">
						<Button text={'Твитнуть'} onClick={handleTwit}/>
					</div>
				</section>
				{createPosts.filter(item => item.body.toLowerCase().includes(searchText.toLowerCase())).map(post => {
					return (
						<div key={post.id} className='home__posts-wrapper'>
							<Options onClickEdit={handleClickEdit} options={options} id={post.id} onClickDelete={handleClickDelete}/>
							<p className='home__posts-body'>{post.body}</p>
						</div>
					)
				}).reverse()}
				{data.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()) || item.body.toLowerCase().includes(searchText.toLowerCase())).map(post => {
					return (
						<div key={post.id} className='home__posts-wrapper'>
							
							<h2 className='home__posts-title'>{post.title}</h2>
							<p className='home__posts-body'>{post.body}</p>
						</div>
					)
				})}
			</section>
			<aside className="home__aside">
				<input type="text" onChange={handleChange} value={searchText}/>
			</aside>
		</section>
	);
}

export default Home;