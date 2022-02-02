
type PropsPhotoComp ={
    title : string
}
export const PhotoComponent : React.FC<PropsPhotoComp> =({title})=>{
    return (
        <div className="palyer-card_container">
        <div className="player-card__photo">
          <div className="player-card__photo-img">{title}</div>
        </div>
      </div>
    )
}