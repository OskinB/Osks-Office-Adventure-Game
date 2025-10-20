import GameTip from './GameTip'
import { GameTipType } from '@/lib/types'

const gameTipsInfo: GameTipType[] = [
    {
        icon: "Timer",
        title: "6-10 Minutes",
        description: "Quick, fun gameplay"
    },
    {
        icon: "Smile",
        title: "5 NPCs",
        description: "Meet the team"
    },
    {
        icon: "Play",
        title: "Instant Play",
        description: "No login required"
    }
]

const GameTips = () => {
    return (
        <div className="grid md:grid-cols-3 gap-4 py-4">
            {gameTipsInfo.map((tip) => {
                return <GameTip key={tip.title} {...tip} />
            })}
        </div>
    )
}

export default GameTips