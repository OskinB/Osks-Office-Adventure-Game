import { Play, Smile, Timer } from 'lucide-react'
import { GameTipType } from '@/lib/types'

const GameTip = ({ icon, title, description }: GameTipType) => {
    const Icon: React.ElementType = { Timer, Smile, Play }[icon];

    return (
        <div className="bg-card/5 p-4 flex flex-col items-center md:items-start rounded-lg border border-primary/50">
            {Icon && <Icon className="w-5 h-5 text-secondary mb-2" />}
            <h3 className="font-bold text-sm mb-1">{title}</h3>
            <p className="text-xs text-neutral-300">{description}</p>
        </div>
    )
}

export default GameTip