import { GameControlType } from '@/lib/types'

const GameControl = ({ icon, press, description }: GameControlType) => {
    return (
        <div>
            {icon} <strong>{press}</strong> {description}
        </div>
    )
}

export default GameControl