function isTouching(obj1,obj2) {
    if (obj2.x - obj1.x < obj1.width / 2 + obj2.width / 2
      && obj1.x - obj2.x < obj1.width / 2 + obj2.width / 2
      && obj2.y - obj1.y < obj1.height / 2 + obj2.height / 2
      && obj1.y - obj2.y < obj1.height / 2 + obj2.height / 2) {
      return true;
    }
    else {
      return false;
    }
  }
  
  function bounceOff(k1,k2){
    if (k2.x - k1.x < k1.width / 2 + k2.width / 2
      && k1.x - k2.x < k1.width / 2 + k2.width / 2) {
      k1.velocityX = k1.velocityX * (-1);
      k2.velocityX = k2.velocityX * (-1);
    }
    if (k2.y - k1.y < k1.height / 2 + k2.height / 2
      && k1.y - k2.y < k1.height / 2 + k2.height / 2) {
      k1.velocityY = k1.velocityY * (-1);
      k2.velocityY = k2.velocityY * (-1);
    }
  }