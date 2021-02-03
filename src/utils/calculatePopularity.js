const calculatePopularity = (likes, dislikes) => {
  
    if (likes === 0 && dislikes === 0){
      return 0
    } else if (likes > 0 && dislikes === 0) {
      return 100
    } else if (dislikes> 0 && likes === 0){
      return 0
    }
    return Math.round(likes * 100 / (likes + dislikes));
  }

  export default calculatePopularity;