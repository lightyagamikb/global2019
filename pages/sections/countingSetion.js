import { CountCard } from './../components';

const data = [
    {
        count: 60,
        title: 'Years of Experience'
    },
    {
        count: 3575,
        title: 'Quilified Workers'
    },
    {
        count: 84049,
        title: 'Successful Deals Made'
    },
    {
        count: 28,
        title: 'Partners Worldwide'
    },
]

export default ({}) => (
    <div className="flex justify-between align-center">
        {
            data.map(item => <CountCard title={item.title} count={item.count} />)
        }
    </div>
)