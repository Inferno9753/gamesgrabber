import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();

    const handlePlay = () => {
        navigate("/play");
      }

    const handleMenu = () => {
        navigate("/home");
      }

    return (
        <div className="bg-neutral-800 flex-col flex p-8" >
            <div>
                <h1 className='text-red-500 text-4xl text-center mb-12'>About the Game</h1>
            </div>
            <div className='mb-20'>
                <p className='text-white text-xl'>The "Simon" game is a classic memory game that tests a player's ability to remember and repeat sequences of colors.The game is designed for one or more players and is often used as a fun and educational tool for testing and improving memory and concentration.</p>
                <p className='text-white text-xl'>The primary objective of the Simon game is to see how long the player can remember and repeat increasingly longer sequences correctly. It's a game of memory, concentration, and pattern recognition.</p>
            </div>
            <div>
                <h1 className='text-red-500 text-4xl text-center mb-12'>How to Play</h1>
            </div>
            <div>
                <h1 className='text-amber-500 text-2xl'>Observe the Sequence:</h1>
                <p className='text-white text-xl mb-4'>The sequence of colors will be shown. Pay close attention to the sequence as it plays, as you will need to repeat it.</p>
                <h1 className='text-amber-500 text-2xl'>Repeat the Sequence:</h1>
                <p className='text-white text-xl mb-4'>After the sequence is played, it's your turn to replicate it. Press the buttons in the exact order as it was showed. For example, if a sequence like "Red, Green, Blue" was played, you would press the buttons in the same order.</p>
                <h1 className='text-amber-500 text-2xl'>Continue to the Next Level:</h1>
                <p className='text-white text-xl mb-4'>If you successfully repeat the sequence, the game will progress to the next level, which is usually a longer and more complex sequence.For example, if previous sequence was "Red, Green, Blue" then the next sequence will have one more color "Red, Green, Blue, Red".Pay attention and repeat it accurately.</p>
                <h1 className='text-amber-500 text-2xl'>Mistakes and Game Over:</h1>
                <p className='text-white text-xl mb-20'>After clicking on wrong button it's game over and the game resets and your Highscore is stored. You can restart after that.</p>
                <div className='flex justify-between text-white'>
                    <button onClick={handlePlay} className="text-lg mb-12 w-50 bg-transparent hover:bg-amber-500 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded">Play Game</button>
                    <button onClick={handleMenu} className="text-lg mb-12 w-50 bg-transparent hover:bg-amber-500 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded">Main Menu</button>
                </div>
            </div>
        </div>
    )
}

export default About