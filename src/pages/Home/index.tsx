import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Navigation from '../../Modules/Navigation';
import './Home.scss';
import axios from 'axios';
import Options from '../../components/Options';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Aside from '../../Modules/Aside';


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
	const [createPosts, SetCreatePosts] = useState<CustomPost[]>([]);
	const [textPost, setTextPost] = useState<string>('');
	const [textBtn, setTextBtn] = useState('');
	const [loading, setLoading] = useState<boolean>(false);
	
	
	const handleClickEdit = (id?: number) => {
		setTextBtn('Сохранить');
		createPosts.forEach((post) => {
			if(post.id === id) {
				setTextPost(post.body)
			}
		})
  };

	const handleClickDelete = (id?: number) => {
		setLoading(true)
		axios.delete(`http://localhost:3001/posts/${id}`)
			.then(() => {
				fetchPosts()
			}).catch(error => console.log(error))
			.finally(() => setLoading(false) )
		
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
		setTextBtn('Твитнуть');
		if(payload.body) {
			axios.post('http://localhost:3001/posts', payload).then(() => {
				fetchPosts()
			})
			setTextPost('')
		}
		
		
	}

	const fetchPosts = () => {
		axios.get('http://localhost:3001/posts').then((res) => {
			SetCreatePosts(res.data)
		})
	}

	useEffect(() =>{
		setLoading(true)
		axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
			setData(res.data)
		}).catch(error => console.log(error))
		.finally(() => setLoading(false) )
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
						{/* {textBtn ? <Button onClick={handleTwit} text={textBtn}/> : } */}
						<Button onClick={handleTwit} text={textBtn ? textBtn : 'Твитнуть'} />
					</div>
				</section>
				{loading ? <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CircularProgress /></Box>:
				createPosts.filter(item => item.body.toLowerCase().includes(searchText.toLowerCase())).map(post => {
					return (
						<div key={post.id} className='home__posts-wrapper'>
							<Options onClickEdit={handleClickEdit} options={options} id={post.id} onClickDelete={handleClickDelete}/>
							<p className='home__posts-body'>{post.body}</p>
						</div>
					)
				}).reverse()}
				{data && data.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()) || item.body.toLowerCase().includes(searchText.toLowerCase())).map(post => {
					return (
						<div key={post.id} className='home__posts-wrapper'>
							
							<h2 className='home__posts-title'>{post.title}</h2>
							<p className='home__posts-body'>{post.body}</p>
						</div>
					)
				})}
			</section>
			<Aside handleChange={handleChange} searchText={searchText}/>
		</section>
	);
}

export default Home;