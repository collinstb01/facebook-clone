import react, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserpost } from "../../actions/posts"

export const UserProfile = () => {
    const dispatch = useDispatch();
    const { userposts } = useSelector((state) => state.userposts);
    const user = JSON.parse(localStorage.getItem('profile'))
    const id = user?.result?._id

    useEffect(() => {

        dispatch(getUserpost(id))

    }, [id])

    return (
        <div>
            <h1>Welocme {user?.result?.name}</h1>
            {userposts.map((userpost) => (
                <div>
                    <h1>{userpost.name}</h1>
                    {userpost.message}
                </div>
            ))}
        </div>
    )
}

export default UserProfile