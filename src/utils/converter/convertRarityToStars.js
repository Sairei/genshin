import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

export const convertRarityToStars = (rarity) => {
  var i;
  let res = [];

  for(i=0; i<rarity; i++) {
    res.push(<FontAwesomeIcon icon={solidStar} />)
  }

  for(i=5; i>rarity; i--) {
    res.push(<FontAwesomeIcon icon={emptyStar} />)
  }

  return res;
}