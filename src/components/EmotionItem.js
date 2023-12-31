const EmotionItem = ({
                         emotion_id,
                         emotion_img,
                         emotion_description,
                         onClick,
                         isSelected
                     }) => {

    return (
        <div onClick={() =>
            onClick(emotion_id)}
             className={['EmotionItem',
                 isSelected === true ? `EmotionItem_on_${emotion_id}` : 'EmotionItem_off'].join(' ')
             }
        >
            <img src={emotion_img} alt=""/>
            <span>{emotion_description}</span>
        </div>
    )
}

export default EmotionItem