import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Navigation from '../../Modules/Navigation';
import './Home.scss';
import Options from '../../components/Options';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Aside from '../../Modules/Aside';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { CustomPost, fetch, fetchByUser, post, PostStore, remove, update } from '../../store/post/postSlice';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import { UserProc, fetch as fetchUser } from '../../store/user/userSlice';

const options = [
	'Редактировать',
	'Удалить',
];

function Home() {
	const [searchText, setSearchText] = useState<string>('');
	const [textPost, setTextPost] = useState<string>('');
	const [changeMode, setChangeMode] = useState<boolean>(false);
	const [currentPost, setCurrentPost] = useState<number>();

	const dispatch = useAppDispatch();
	const postData: PostStore = useAppSelector((store: any) => store.post)
	const user: UserProc = useAppSelector((store: any) => store.user.user)

	const handleClickEdit = (id: number) => {
		setCurrentPost(id)
		setChangeMode(true);

		//поиск поста и переносит его текст в инпут
		postData.posts.forEach((post) => {
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
		const payload:CustomPost = {
			body: textPost,
			userId: user.id
		} as CustomPost;

		console.log(payload);
		
		if (payload.body) {
			dispatch(post(payload)).then(fetchPosts)
			setTextPost('')
		}
	}

	const fetchPosts = () => {
		dispatch(fetch())
	}

	const fetchPostsId = () => {
		dispatch(fetchByUser(Number(sessionStorage.getItem('userId'))))
	}

	useEffect(() => {
		//setLoading(true)
		dispatch(fetchUser(Number(sessionStorage.getItem('userId'))))
		fetchPostsId()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	/* useEffect(() => {
		setLoading(true)
		axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
			setData(res.data)
		}).catch(error => console.log(error))
			.finally(() => setLoading(false))
		fetchPosts()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []) */

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
						<div className="status__icon-wrapp">
							<ImageOutlinedIcon className='status__icon-icons'/>
							<GifBoxOutlinedIcon className='status__icon-icons'/>
							<LeaderboardOutlinedIcon className='status__icon-icons'/>
							<SentimentSatisfiedRoundedIcon className='status__icon-icons'/>
							<RoomOutlinedIcon className='status__icon-icons'/>
						</div>
						<div className="status__icon-btn">
							{!changeMode && <Button className={'home__twit'} onClick={handleTwit} text={'Твитнуть'}/>}
							{changeMode && <Button className={'home__twit'} onClick={handleUpdateTwit} text={'Сохранить'}/>}
						</div>
					</div>
				</section>
				{postData.isloading ? <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CircularProgress /></Box> :
					postData.posts.filter(item => item.body.toLowerCase().includes(searchText.toLowerCase())).map(post => {
						return (
							<div key={post.id} className='home__posts-wrapper'>
								<Options onClickEdit={handleClickEdit} options={options} id={post.id} onClickDelete={handleClickDelete} />
								<p className='home__posts-body'>{post.body}</p>
							</div>
						)
					}).reverse()}
			</section>
			<Aside handleChange={handleChange} searchText={searchText} />
		</section>
	);
}

export default Home;