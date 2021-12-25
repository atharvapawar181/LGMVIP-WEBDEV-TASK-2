import React, { useState } from 'react';
import './index'

const Home = () => {
    const [fetched, setfetched] = useState(false);
    const [clicked, setclicked] = useState(false);
    const [users, setUser] = useState([]);
    const onclick = async () => {
        setclicked(true);
        const res = await fetch("https://reqres.in/api/users?page=1");
        const jsonres = await res.json();
        setUser(jsonres.data);

        setInterval(() => {
            setfetched(true);
        }, 3000);
    };
    return (
        <div className="Home">
            <div>
                <nav>
                    <div className='nav' >
                        <h2>Click the button to get data!</h2>
                    </div>
                    <div className='nav' >
                        <button onClick={onclick}>Get users</button>
                    </div>
                </nav>
            </div>
            {clicked ? (
                fetched ? (
                    <div className="usercard">
                        {users.map(({ id, first_name, last_name, avatar, email }) => {
                            return (
                                <div className="card">
                                    <div className="pic">
                                        <img src={avatar}></img>
                                    </div>

                                    <div className="details">
                                        <h3>
                                            {first_name} {last_name}
                                        </h3>
                                        <p>{email}</p>
                                    </div>
                                    
                                </div>
                            );
                        })}

                    </div>
                ) : (
                    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        )
                        ) : (
                        <> </>
           )}
                    </div>
                )

}

export default Home;