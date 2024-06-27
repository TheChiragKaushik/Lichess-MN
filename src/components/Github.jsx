
import { useLoaderData } from 'react-router-dom';
import { githubData } from '../api/index';

function Github() {

    const data = useLoaderData(githubData);

    // const [data, setData] = useState([]);


    // useEffect(() => {
    //     fetch('https://api.github.com/users/thechiragkaushik')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[]);
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'> <img src={data.avatar_url} alt="Github PFP" /> </div>
    
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers} </div>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'> {data.bio} </div>
    </>
  )
}

export default Github

