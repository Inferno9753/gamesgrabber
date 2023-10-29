import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase';
import { collection, getDocs } from '@firebase/firestore';

const Home = () => {
  const [score, setScore] = useState(0);
  const scoreCollectionRef = collection(db, "score");

  const navigate = useNavigate();

  const handlePlay = () => {
    navigate("/play");
  }

  const handleLeaderBoard = () => {
    navigate("/leaderboard");
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  }

  const getScore = async () => {
    try {
      const data = await getDocs(scoreCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
      }))
      const player = filteredData.filter((item) => (item.email === auth.currentUser.email))
      setScore(player[0].highscore);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getScore();
  }, []);

  return (
    <div className="bg-neutral-800 h-screen flex justify-center ">
      <div className=" p-20 rounded-lg w-96">
        <h2 className="text-3xl text-amber-500 font-semibold mb-20 text-center ">GAMESGRABBER</h2>
        <button
          onClick={handlePlay}
          className="text-lg mb-12 w-full bg-transparent hover:bg-amber-500 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded"
        >
          Play Game
        </button>
        <button
          className="text-lg mb-12 w-full bg-transparent hover:bg-amber-500 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded"
        >
          About the Game
        </button>
        <button
          onClick={handleLogout}
          className="text-lg mb-20 w-full bg-transparent hover:bg-amber-500 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded"
        >
          Logout
        </button>
        <h1 className='text-2xl text-red-500 flex justify-center'>Your Highscore : {score}</h1>
      </div>
    </div>
  )
}

export default Home