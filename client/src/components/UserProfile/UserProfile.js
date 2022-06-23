import react, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserpost } from "../../actions/posts"
import Feed from '../home/Grid2.js/feeds/Feed';

export const UserProfile = () => {
    const dispatch = useDispatch();
    const { userposts } = useSelector((state) => state.posts);
    const user = JSON.parse(localStorage.getItem('profile'))
    const id = user?.result?._id
    console.log(userposts?.data?.PostbyUser)

    useEffect(() => {

        dispatch(getUserpost(id))

    }, [id])

    return (
        <div>
            <h1>Welocme {user?.result?.name}</h1>
            {userposts?.data?.PostbyUser?.map((userpost) => (
                <Feed {...userpost} />
            ))}
        </div>
    )
}

export default UserProfile