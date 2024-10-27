import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useCallback, useState} from 'react';
import {retrieveTutorials, createComment} from '../slices/tutorials.js';

const AddComment = () => {
	const tutorials = useSelector(state => state.tutorials);
	const dispatch = useDispatch();
	const [comment, setComment] = useState('');
	const [tutorial, setTutorial] = useState({});
	const [commented, setCommented] = useState(false);

	const fetchData = useCallback(() => {
		dispatch(retrieveTutorials());
	}, [dispatch]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const onChangeComment = e => {
		setComment(e.target.value);
	};

	const onChangeTutorial = e => {
		const selectedTutorial = tutorials.find(t => t.title === e.target.value);
		console.log(tutorials);
		console.log(selectedTutorial);
		setTutorial(selectedTutorial);
	};

	const addComment = () => {
		const data = {
			tutorialId: tutorial.id,
			comment,
		};
		console.log('data joka lähetetään', data);
		dispatch(createComment({data}))
        .then(data => {
        console.log(data);
            if(data !== undefined){
                setCommented(true);
            }
      });
	};

	const onSubmit = e => {
		e.preventDefault();
		addComment();
	};

    const onCommented = () => {
        setCommented(false);
    };
	return (
		<div className='submit-form'>
			{commented ? (
				<div>
					<h4>You commented successfully!</h4>
					<button className='btn btn-success' onClick={onCommented}>
            Ok
					</button>
				</div>
			) : (
				<div>
					<div className='mb-3'>
						<label htmlFor='title' className='form-label'>Tutorial</label>
						<select id="test-select" onChange={onChangeTutorial}>
							<option value='' disabled selected>Select a tutorial</option>
							{tutorials.map(p => (
								<option key={p.id}>{p.title}</option>
							))}

						</select>
					</div>

					<div className='form-group'>
						<label htmlFor='comment'>Comment</label>
						<input
							type='text'
							className='form-control'
							id='comment'
							required
							value={comment}
							onChange={onChangeComment}
							name='comment'
						/>
					</div>

					<button onClick={onSubmit} className='btn btn-success'>
            Submit
					</button>
				</div>

			)}
		</div>

	);
};

export default AddComment;
