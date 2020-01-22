import { BlogCard, Images } from './../components';

const data = [1,2,3]

export default ({}) => (
    <div>
        {
            data.map(i => <BlogCard />)
        }
    </div>
)
