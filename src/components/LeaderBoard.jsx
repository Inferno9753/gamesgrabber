import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import { collection, getDocs } from '@firebase/firestore';

const LeaderBoard = () => {
    const [rank, setRank] = useState([]);
    const scoreCollectionRef = collection(db, "score");

    const getScore = async () => {
        try {
            const data = await getDocs(scoreCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
            }))
            filteredData.sort((a, b) => {
                return b.highscore - a.highscore;
            });
            setRank(filteredData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getScore();
        console.log("rank",rank);
    }, []);
    return (
        <div>LeaderBoard</div>
    )
} 

export default LeaderBoard