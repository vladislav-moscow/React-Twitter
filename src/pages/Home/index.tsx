import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Navigation from '../../Modules/Navigation';
import './Home.scss';
import axios from 'axios';
import Options from '../../components/Options';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Aside from '../../Modules/Aside';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { CustomPost, fetch, post, remove, update } from '../../store/post/postSlice'


interface Post {
	id: number;
	userId: number;
	title: string;
	body: string
}

const options = [
	'Редактировать',
	'Удалить',
];

function Home() {
	const [searchText, setSearchText] = useState<string>('');
	const [data, setData] = useState<Post[]>([]);
	const [textPost, setTextPost] = useState<string>('');
	const [changeMode, setChangeMode] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [currentPost, setCurrentPost] = useState<number>();
	const dispatch = useAppDispatch();
	const createPosts: CustomPost[] = useAppSelector((store: any) => store.post.posts)


	const handleClickEdit = (id: number) => {
		setCurrentPost(id)
		setChangeMode(true);

		//поиск поста и переносит его текст в инпут
		createPosts.forEach((post) => {
			if (post.id === id) {
				setTextPost(post.body)
			}
		})
	};

	const handleUpdateTwit = () => {
		const payload = {
			id: currentPost,
			body: textPost
		} as CustomPost
		if (payload.body) {
			dispatch(update(payload)).then(fetchPosts)
			setTextPost('')
		}
	}

	const handleClickDelete = (id: number) => {
		dispatch(remove(id)).then(fetchPosts)

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
		if (payload.body) {
			dispatch(post(payload)).then(fetchPosts)
			setTextPost('')
		}
	}

	const fetchPosts = () => {
		dispatch(fetch())
	}

	useEffect(() => {
		setLoading(true)
		axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
			setData(res.data)
		}).catch(error => console.log(error))
			.finally(() => setLoading(false))
		fetchPosts()
	}, [])

	return (
		<section className="home">
			<Navigation />
			<section className="home__posts">
				<section className='status'>
					<h2 className="status-title">Главная</h2>
					<div className="status__img-wrapper">
						<AccountCircleIcon className='status__img-avatar'/>
					</div>
					<div className="status__input">
						<textarea className='status__input-textArea' rows={2} cols={49} value={textPost} onChange={handlePostsChange} placeholder='Что происходит?'> </textarea>
					</div>
					<div className="status__icon">
						{/* {textBtn ? <Button onClick={handleTwit} text={textBtn}/> : } */}
						{!changeMode && <Button className={'home__twit'} onClick={handleTwit} text={'Твитнуть'}/>}
						{changeMode && <Button className={'home__twit'} onClick={handleUpdateTwit} text={'Сохранить'}/>}
					</div>
				</section>
				{loading ? <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CircularProgress /></Box> :
					createPosts.filter(item => item.body.toLowerCase().includes(searchText.toLowerCase())).map(post => {
						return (
							<div key={post.id} className='home__posts-wrapper'>
								<Options onClickEdit={handleClickEdit} options={options} id={post.id} onClickDelete={handleClickDelete} />
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
			<Aside handleChange={handleChange} searchText={searchText} />
		</section>
	);
}

export default Home;