import classes from './posts-grids.module.css';
import PostItem from './post-item';

function PostsGrid(props) {
    const { posts } = props;

    return (<ul className={classes.grid}>
        {posts.map(post => <PostItem />)}
    </ul>);
};

export default PostsGrid;